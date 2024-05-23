// Get the current year
const currentYear = new Date().getFullYear();

// Find the paragraph element in the footer for the copyright text
const footerParagraph = document.querySelector('footer p');

// Update the text content of the paragraph with the current year
footerParagraph.textContent = `© ${currentYear} | Fernando Ludvig | Brazil`;

// Get the span element where the last modified date will be displayed
var lastModifiedSpan = document.getElementById("lastModified");

// Get the last modified date of the document and set it to the span element
lastModifiedSpan.textContent = document.lastModified;

const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


window.addEventListener('load', function () {
    const apiKey = '09f41b3700b1f5ec16123b2e3e4bddb6'; // Replace with your OpenWeatherMap API key
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
            const weatherIcon = data.weather[0].icon;

            document.getElementById('temperature').textContent = `${temperature}° C`;
            document.getElementById('weather-description').textContent = weatherDescription.charAt(0).toUpperCase() + weatherDescription.slice(1);

            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
            document.getElementById('weather-icon').setAttribute('src', weatherIconUrl);
            document.getElementById('weather-icon').setAttribute('alt', weatherDescription);
        })
        .catch(error => {
            console.error('Failed to fetch weather data:', error);
            document.getElementById('temperature').textContent = 'Temperature data unavailable';
            document.getElementById('weather-description').textContent = 'Weather condition data unavailable';
        });
});


document.addEventListener("DOMContentLoaded", function() {
    const myBtn = document.querySelector('#darkBtn');
    const main = document.querySelector('main');

    myBtn.addEventListener('click', () => {
        main.classList.toggle('dark');
    });
});


 // Retrieve the counter value from localStorage or set it to 0
 let counter = parseInt(localStorage.getItem('pageVisits')) || 0;

 // Increment the counter each time the page is visited
 counter++;
 
 // Store the updated counter value in localStorage
 localStorage.setItem('pageVisits', counter);

 // Display the counter value in the information card
 document.getElementById('visitCounter').textContent = `Visit Count: ${counter}`;

 
