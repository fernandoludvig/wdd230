// JavaScript code to fetch JSON data and populate the learning activities section
const baseURL = "https://byui-cse.github.io/wdd230-ww-course/";
const linksURL = baseURL + "data/links.json";

function displayLinks(data) {
    const container = document.querySelector('#learning-activities');
    if (!container) {
        console.error("Container element not found.");
        return;
    }

    container.innerHTML = '';

    if (!data || !data.weeks || !Array.isArray(data.weeks)) {
        console.error("Invalid data format:", data);
        return;
    }

    data.weeks.forEach(week => {
        const weekElement = document.createElement('p');
        weekElement.textContent = `${week.week}: `;
        
        week.links.forEach((link, index) => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.textContent = link.title;
            weekElement.appendChild(anchor);

            // Add separator (|) if it's not the last link
            if (index !== week.links.length - 1) {
                weekElement.appendChild(document.createTextNode(' | '));
            }
        });

        container.appendChild(weekElement);
    });
}

// Fetch JSON data and call displayLinks function
fetch(linksURL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        displayLinks(data);
    })
    .catch(error => {
        console.error('Error fetching JSON:', error);
    });
