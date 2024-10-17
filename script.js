const apiKey = '69cdf06e81f3f09b23d8c4730afed97e'; // Your API key
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherOutput = document.getElementById('weatherOutput');

getWeatherBtn.addEventListener('click', () => {
    const cityInput = document.getElementById('cityInput').value;

    if (cityInput) {
        fetchWeatherData(cityInput);
    } else {
        weatherOutput.innerHTML = 'Please enter a city name.';
    }
});

async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        weatherOutput.innerHTML = error.message;
    }
}

function displayWeatherData(data) {
    const { main, weather, name } = data;
    const weatherHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Feels Like: ${main.feels_like} °C</p>
        <p>Main Condition: ${weather[0].main}</p>
    `;
    weatherOutput.innerHTML = weatherHTML;
}
