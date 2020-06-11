export default class Model{
    getWeather(location){
        const apiKey = 'de7094831f87b90c07b9cd28325af3c2';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        return fetch(url).then(req => {
            return req.json();
        }).then(data => this.prepareData(data));
    }

    prepareData(weather){
        
        console.log(weather);
        weather.temp = Math.ceil(weather.main.temp - 273.15);
        weather.iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

        const localTime = this.getLocalDate(weather.timezone);
        weather.h = localTime.getHours();
        weather.m = localTime.getMinutes();

        const sunrise = this.getLocalDate(weather.timezone, false, weather.sys.sunrise * 1000);
        const sunset = this.getLocalDate(weather.timezone, false, weather.sys.sunset * 1000);
        
        weather.hRise = sunrise.getHours();
        weather.mRise = sunrise.getMinutes();

        
        weather.hSet = sunset.getHours();
        weather.mSet = sunset.getMinutes();

        return weather;
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
}