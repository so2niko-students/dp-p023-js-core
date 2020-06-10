export default class Model{
    getWeather(location){
        const apiKey = 'de7094831f87b90c07b9cd28325af3c2';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

        return fetch(url).then(req => {
            return req.json();
        });
    }
}