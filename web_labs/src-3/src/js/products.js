const API_URL = 'https://ceramic-api.onrender.com';

function productToHTML(product) {
    return `
        <article class="catalog__item">
            <img 
                src="${new URL(product.image, API_URL)}" 
                alt="${product.title}" 
                loading="lazy"
            >
            <div class="catalog__info">
                <h3>${product.title}</h3>
                <p>${product.price} €</p>
            </div>
        </article>
    `;
}

async function fetchProductsData() {
    const response = await fetch(`${API_URL}/api/products`);
    
    if (!response.ok) throw new Error(`Fetch failed with status: ${response.status}`);
    
    return await response.json();
}

async function renderProductGrid(category = 'tea') {
    const gridContainer = document.querySelector('.catalog__grid');
    if (!gridContainer) {
        console.warn('No .catalog__grid found');
        return;
    }

    gridContainer.innerHTML = '<div class="loading">Loading...</div>';

    try {
        const productsData = await fetchProductsData();
        
        let displayedProducts = [];
        
        if (category === 'tea') displayedProducts = productsData.slice(0, 5);
        else if (category === 'kitchen') displayedProducts = productsData.slice(0, 3);
        else if (category === 'plants') displayedProducts = productsData.slice(0, 2);

        gridContainer.innerHTML = displayedProducts.map(productToHTML).join('');
    } catch (error) {
        console.error(error);
        gridContainer.innerHTML = '<div class="error">Failed to load</div>';
    }
}

function setupCategoryTabs() {
    const tabButtons = document.querySelectorAll('.catalog__filter');
    if (!tabButtons.length) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', async () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            button.classList.add('active');

            const selectedCategory = button.dataset.category;
            await renderProductGrid(selectedCategory);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupCategoryTabs();
    renderProductGrid('tea');
});
