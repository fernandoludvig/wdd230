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


document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    var currentDate = new Date();

    // Get the last visit date from localStorage
    var lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        // Calculate the time difference in milliseconds
        var timeDifference = currentDate - new Date(lastVisit);
        // Convert milliseconds to days
        var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display appropriate message based on time difference
        var message = "";
        if (daysDifference === 0) {
            message = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = "You last visited " + daysDifference + " days ago.";
        }
    } else {
        // If it's the first visit, display welcome message
        message = "Welcome! Let us know if you have any questions.";
    }

    // Display the message in the sidebar
    var lastVisitElement = document.getElementById("lastVisit");
    lastVisitElement.textContent = message;

    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", currentDate);
});

// script.js

document.addEventListener('DOMContentLoaded', () => {
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => renderMembers(data))
        .catch(error => console.error('Error fetching the members data:', error));
});

const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const memberContainer = document.getElementById('memberContainer');

gridButton.addEventListener('click', () => toggleView('grid'));
listButton.addEventListener('click', () => toggleView('list'));

function renderMembers(members) {
    memberContainer.innerHTML = '';
    members.forEach(member => {
        const memberElement = document.createElement('section');
        memberElement.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">${member.website}</a></p>
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.description}</p>
        `;
        memberContainer.appendChild(memberElement);
    });
}

function toggleView(view) {
    if (view === 'grid') {
        memberContainer.classList.add('grid');
        memberContainer.classList.remove('list');
    } else {
        memberContainer.classList.add('list');
        memberContainer.classList.remove('grid');
    }
}
