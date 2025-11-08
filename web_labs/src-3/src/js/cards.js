const API_ENDPOINT = 'https://ceramic-api.onrender.com';

function createCardHTML(product) {
    return `
        <article class="card__item">
            <div class="card__info">
                <img 
                    class="card__img" 
                    src="${new URL(product.image, API_ENDPOINT)}" 
                    alt="${product.title}" 
                    loading="lazy"
                >
                <div class="card__title-btn">
                    <h3 class="card__title">${product.title}</h3>
                    <button class="btn-read card__btn">Read</button>
                </div>
            </div>
            <p class="card__p">${product.excerpt}</p>
        </article>
    `;
}

async function fetchCardsData() {
    const response = await fetch(`${API_ENDPOINT}/api/posts`);
    
    if (!response.ok) throw new Error(`Fetch failed with status: ${response.status}`);
    
    return await response.json();
}

async function renderProductsGrid() {
    const gridContainer = document.querySelector('.cards__grid');
    if (!gridContainer) {
        console.warn('No .cards__grid found');
        return;
    }

    gridContainer.innerHTML = '<div class="loading">Loading...</div>';

    try {
        const productsData = await fetchCardsData();

        gridContainer.innerHTML = productsData.map(createCardHTML).join('');
    } catch (error) {
        console.error(error);
        gridContainer.innerHTML = '<div class="error">Failed to load</div>';
    }
}

document.addEventListener('DOMContentLoaded', renderProductsGrid);
