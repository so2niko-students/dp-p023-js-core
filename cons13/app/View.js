export default class View{
    inpLocation = document.querySelector('.inp-city');
    btnSearch = document.querySelector('.btn-search');
    info = document.querySelector('.info');

    constructor(searchFunc){
        this.btnSearch.addEventListener('click', searchFunc);
    }

    getLocation(){
        return this.inpLocation.value;
    }

    renderWeather(weather){
        const { lat, lon } = weather.coord;

        const weatherHTML = `
        <h1>${weather.name} <span class="badge badge-primary">${weather.sys.country}</span></h1>
        <h4><img src="${weather.iconUrl}"> ${weather.temp} °C</h4>
        <table class="table table-striped w-50">
            <tbody>
            <tr>
                <th scope="row">Local time</th>
                <td>${weather.h}:${weather.m}</td>
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
                <td>${weather.hRise}:${weather.mRise}</td>
            </tr>
            <tr>
                <th scope="row">Sunset</th>
                <td>${weather.hSet}:${weather.mSet}</td>
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
        this.info.innerHTML = weatherHTML;
    }
}