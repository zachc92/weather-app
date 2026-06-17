const showWeather = (location, scale) => {
    const weatherDisplay = document.querySelector('#weather-display');
    const locationWeather = document.querySelector('#location');
    const maxTemp = document.querySelector('#max-temp');
    const minTemp = document.querySelector('#min-temp');
    const precipProb = document.querySelector('#precip-prob');

    weatherDisplay.style.display = "flex";
    locationWeather.textContent = location.location;
    maxTemp.textContent = `Maximum Temperature: ${scale == 'f' ? location.maxTempF.toFixed(1) : location.maxTempC.toFixed(1)}${scale == 'f' ? '°F' : '°C'}`;
    minTemp.textContent = `Minimum Temperature: ${scale == 'f' ? location.minTempF.toFixed(1) : location.minTempC.toFixed(1)}${scale == 'f' ? '°F' : '°C'}`;
    precipProb.textContent = `Chance of Rain: ${location.precipprob}%`;
};

export { showWeather };