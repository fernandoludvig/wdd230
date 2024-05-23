        // JavaScript code to fetch JSON data and populate the learning activities section
        const baseURL = "https://fernandoludvig.github.io/wdd230/";
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
                const weekElement = document.createElement('section');
                const header = document.createElement('h2');
                header.textContent = week.week;
                weekElement.appendChild(header);

                const list = document.createElement('ul');
                week.links.forEach(link => {
                    const listItem = document.createElement('li');
                    const anchor = document.createElement('a');
                    anchor.href = baseURL + link.url;
                    anchor.textContent = link.title;
                    listItem.appendChild(anchor);
                    list.appendChild(listItem);
                });

                weekElement.appendChild(list);
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