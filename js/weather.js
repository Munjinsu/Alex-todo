
const API_KEY = "12a64afadf56f368083d07d304c0db2a";

function onGeoOK(positon){

    console.log(positon)
    const lat = positon.coords.latitude
    const lng = positon.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    console.log(lat)
    fetch(url)
        .then(response => response.json())
        .then(data => { 
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const sky = data.weather[0].main;
            
            switch(sky){
                case 'Clear':
                weather.innerHTML = `<i class="clouds">${data.weather[0].main}</i> / ${data.main.temp}`;
                break;
                case 'Wind':
                weather.innerHTML = `<i class="wind">${data.weather[0].main}</i> / ${data.main.temp}`;
                break;
                case 'Clouds':
                weather.innerHTML = `<i class="clouds">${data.weather[0].main}</i> / ${data.main.temp}`;
                break;
                case 'Rain':
                weather.innerHTML = `<i class="rain">${data.weather[0].main}</i> / ${data.main.temp}`;
                break;
                case 'Snow':
                weather.innerHTML = `<i class="snow">${data.weather[0].main}</i> / ${data.main.temp}`;
                break;
            }
            
            city.innerText = data.name;
        });  
}

function onGeoError(){
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
