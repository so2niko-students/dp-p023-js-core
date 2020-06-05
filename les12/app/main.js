function getWeather(){
    const inpCity = document.querySelector('.inp-city');

    const apiKey = 'de7094831f87b90c07b9cd28325af3c2';
    const location = inpCity.value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;


    fetch(url).then(req => {
        console.log('request: ', req);
        return req.json();
    }).then(data => renderWeather(data));
}

function renderWeather(weather){
    const info = document.querySelector('.info');
    console.log(weather);
    const temp = Math.ceil(weather.main.temp - 273.15);

    const { lat, lon } = weather.coord;

    const weatherHTML = `
    <h1>${weather.name} <span class="badge badge-primary">${weather.sys.country}</span></h1>
        <h4><img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"> ${temp} °C</h4>
        <table class="table table-striped w-50">
            <tbody>
            <tr>
                <th scope="row">Local time</th>
                <td>Mark</td>
            </tr>
            <tr>
                <th scope="row">Wind</th>
                <td>${weather.wind.speed} m/s (${weather.wind.deg})</td>
            </tr>
            <tr>
                <th scope="row">Cloudiness</th>
                <td>${weather.weather[0].description}</td>
            </tr>
            <tr>
                <th scope="row">Pressure</th>
                <td>${weather.main.pressure} hpa</td>
            </tr>
            <tr>
                <th scope="row">Humidity</th>
                <td>${weather.main.humidity} %</td>
            </tr>
            <tr>
                <th scope="row">Sunrise</th>
                <td>Larry</td>
            </tr>
            <tr>
                <th scope="row">Sunset</th>
                <td>Larry</td>
            </tr>
            <tr>
                <th scope="row">Geo coords</th>
                <td>
                    <a href="https://openweathermap.org/weathermap?zoom=8&lat=${lat}&lon=${lon}">
                        [ ${lat}, ${lon} ]
                    </a>
                </td>
            </tr>
            </tbody>
        </table>`;
        info.innerHTML = weatherHTML;
}


document.querySelector('.btn-search').addEventListener('click', getWeather);
