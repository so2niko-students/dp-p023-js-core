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

    getLocalDate(timezone, isSpecificDate = true, date){
        let d;

        if(isSpecificDate){
            d = new Date();
        }else{
            d = new Date(date);
        }        

        const myShift = d.getTimezoneOffset() * 60 * 1000;
        const ms = d.getTime() + timezone * 1000 + myShift;
        return new Date(ms);
    }

    renderWeather(weather){
        console.log(weather);

        const temp = Math.ceil(weather.main.temp - 273.15);

        const { lat, lon } = weather.coord;

        const localTime = this.getLocalDate(weather.timezone);
        const h = localTime.getHours();
        const m = localTime.getMinutes();

        const sunrise = this.getLocalDate(weather.timezone, false, weather.sys.sunrise * 1000);
        const sunset = this.getLocalDate(weather.timezone, false, weather.sys.sunset * 1000);
        
        const hRise = sunrise.getHours();
        const mRise = sunrise.getMinutes();

        
        const hSet = sunset.getHours();
        const mSet = sunset.getMinutes();


        const weatherHTML = `
        <h1>${weather.name} <span class="badge badge-primary">${weather.sys.country}</span></h1>
        <h4><img src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"> ${temp} °C</h4>
        <table class="table table-striped w-50">
            <tbody>
            <tr>
                <th scope="row">Local time</th>
                <td>${h}:${m}</td>
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
                <td>${hRise}:${mRise}</td>
            </tr>
            <tr>
                <th scope="row">Sunset</th>
                <td>${hSet}:${mSet}</td>
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