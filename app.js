document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('searchBtn');
    const searchField = document.getElementById('searchField');
    const resultDiv = document.getElementById('result');

    searchBtn.addEventListener('click', () => {
        const query = searchField.value.trim();
        const url = `superheroes.php?query=${encodeURIComponent(query)}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                resultDiv.innerHTML = `<p style="color: red;">Error fetching data. Please try again later.</p>`;
            });
    });
});
