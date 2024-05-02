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


document.addEventListener("DOMContentLoaded", function() {
    const myBtn = document.querySelector('#darkBtn');
    const main = document.querySelector('main');

    myBtn.addEventListener('click', () => {
        main.classList.toggle('dark');
    });
});
