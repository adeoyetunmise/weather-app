
const start = () => {
    window.location.href = 'dash.html'
}
const fetchApi = () =>{
    let input = city.value
    let apiKey = '709708d5c0e5db404a333d45190389cf'
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(response=>response.json())
    .then((result)=>{
        let img =`http://openweathermap.org/img/w/${result.weather[0].icon}.png`
        imagery.src=img
    console.log(result);
    cityName.innerHTML = `${result.name}`
    description.innerHTML =`${result.weather[0].description}`
    temperature.innerHTML = `${result.main.temp}°C`
    country.innerHTML = `<img src="img/country2.png"> ${result.sys.country}`
    humidity.innerHTML = `<img src="img/humidity.png"> ${result.main.humidity}%`
 
    })
    .catch((err)=>{
        console.log(err);
    })
}

navigator.geolocation.getCurrentPosition((pos)=>{
    let lat = pos.coords.latitude
    let lon = pos.coords.longitude
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=709708d5c0e5db404a333d45190389cf&units=metric`

    fetch(endpoint)
    .then(res=>res.json())
    .then((resp)=>{
        let img =`http://openweathermap.org/img/w/${resp.weather[0].icon}.png`
        imagery.src=img
        console.log(resp);
        cityName.innerHTML = `${resp.name}`
        description.innerHTML =`${resp.weather[0].description}`
        temperature.innerHTML = `${resp.main.temp}°C`
        country.innerHTML = `<img src="img/country2.png" > ${resp.sys.country}`
        humidity.innerHTML = `<img src="img/humidity.png"> ${resp.main.humidity}%`
    })
    .catch((err)=>{
        console.log(err);
    })
})