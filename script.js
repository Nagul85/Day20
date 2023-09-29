document.addEventListener('DOMContentLoaded', () => {
    const apiList = document.querySelector('.api-list');

    // Fetch data from the GitHub API
    fetch('https://api.publicapis.org/entries')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process and display the API data
            displayAPIs(data.entries);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

    // Function to display the API data
    function displayAPIs(apiData) {
        apiList.innerHTML = ''; // Clear any existing content

        apiData.forEach(api => {
            const apiCard = document.createElement('div');
            apiCard.classList.add('api-card');

            const title = document.createElement('h2');
            title.textContent = api.API;

            const description = document.createElement('p');
            description.textContent = api.Description;

            const link = document.createElement('a');
            link.href = api.Link;
            link.textContent = 'Visit API';

            apiCard.appendChild(title);
            apiCard.appendChild(description);
            apiCard.appendChild(link);

            apiList.appendChild(apiCard);
        });
    }
});