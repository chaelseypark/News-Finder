async function fetchNews() {
    const searchQuery = document.getElementById('searchInput').value;
    const sortOption = document.getElementById('sortSelect').value;
    const apiKey = 'Personal API Key';
    const url = `https://newsapi.org/v2/everything?q=${searchQuery}&sortBy=${sortOption}&apiKey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.articles);
    } catch (error) {
        console.error('Error:', error);
    }
}

function displayNews(articles) {
    const container = document.getElementById('newsContainer');
    container.innerHTML = '';
    if (!articles) {
        container.innerHTML = '<p>No news found</p>';
        return;
    }
    articles.forEach(article => {
        const div = document.createElement('div');
        div.className = 'article';
        div.innerHTML = `
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        container.appendChild(div);
    });
}

