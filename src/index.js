import "./styles.css";
import { showWeather } from "./dom.js";
import { Weather } from "./weather.js";

const convertButton = document.querySelector('#weather-display button');
const form = document.querySelector('form');
const input = document.querySelector('input');

const controller = (() => {
    let weather;
    let scale = 'f';

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        getWeather(input.value);
    });

    convertButton.addEventListener('click', (e) => {
        scale == 'f' ? scale = 'c' : scale = 'f';
        showWeather(weather, scale);
    });

    const getWeather = async (location) => {
        try{
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=AD98U8JUY2X3FYY4ZGY2UGV24`);
            const weatherData = await response.json();
            weather = new Weather(weatherData.resolvedAddress, weatherData.days[0].tempmax, weatherData.days[0].tempmin, weatherData.days[0].precipprob);
            scale = 'f';
            showWeather(weather, 'f');
        } catch {
            alert(`We can't access weather information for ${location}`)
        }
    }
})();