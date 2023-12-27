function searchCharacters() {
    const searchInput = document.getElementById('mySearch').value;
    const searchResultsContainer = document.getElementById('searchResults');

    // Clear previous results
    searchResultsContainer.innerHTML = '';

    // Perform AJAX request to the server
    if (searchInput.length >= 2) {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const results = JSON.parse(xhr.responseText);
                displayResults(results);
            }
        };

        let baseUrl = 'https://tibia.bieda.it/api/tibia-eocf/v1/characters?searchText=bobeek&page=1&pageSize=10'

        // Adjust the URL to your server script
        xhr.open('GET', 'https://tibia.bieda.it/api/tibia-eocf/v1/characters/prompt?searchText=' + searchInput + '&page=1&pageSize=10', true);
        xhr.send();
    }
}

function displayResults(results) {
    const searchResultsContainer = document.getElementById('searchResults');

    // Display the results in the <ul> element
    results.forEach(function (result) {
        const li = document.createElement('li');
        li.textContent = result;
        searchResultsContainer.appendChild(li);
    });
}
