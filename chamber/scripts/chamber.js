document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const footerParagraph = document.querySelector('footer p:first-of-type');
    footerParagraph.textContent = `© ${currentYear} | Fernando Ludvig | Brazil`;

    const lastModifiedSpan = document.getElementById("lastModified");
    lastModifiedSpan.textContent = document.lastModified;

    const mainnav = document.querySelector('.navigation')
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    window.addEventListener('load', function () {
        const apiKey = '5a8657114b057a1c89d842cd87d5c2c7'; // Replace with your OpenWeatherMap API key
        const city = 'Florianopolis';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const temperature = data.main.temp;
                const weatherDescription = data.weather[0].description;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;
                const weatherIcon = data.weather[0].icon;

                document.getElementById('temperature').textContent = `${temperature}° C`;
                document.getElementById('weather-description').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);
                document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
                document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} km/h`;

                const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
                document.getElementById('weather-icon').setAttribute('src', weatherIconUrl);
                document.getElementById('weather-icon').setAttribute('alt', weatherDescription);
            })
            .catch(error => {
                console.error('Failed to fetch weather data:', error);
                document.getElementById('temperature').textContent = 'Temperature data unavailable';
                document.getElementById('weather-description').textContent = 'Weather condition data unavailable';
                document.getElementById('humidity').textContent = 'Humidity data unavailable';
                document.getElementById('wind-speed').textContent = 'Wind Speed data unavailable';
            });
    });
});