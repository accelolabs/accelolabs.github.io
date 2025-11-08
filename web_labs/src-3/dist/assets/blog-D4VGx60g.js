import"./script-X_33geZs.js";const r="https://ceramic-api.onrender.com";function e(t){return`
        <article class="card__item">
            <div class="card__info">
                <img 
                    class="card__img" 
                    src="${new URL(t.image,r)}" 
                    alt="${t.title}" 
                    loading="lazy"
                >
                <div class="card__title-btn">
                    <h3 class="card__title">${t.title}</h3>
                    <button class="btn-read card__btn">Read</button>
                </div>
            </div>
            <p class="card__p">${t.excerpt}</p>
        </article>
    `}async function n(){const t=await fetch(`${r}/api/posts`);if(!t.ok)throw new Error(`Fetch failed with status: ${t.status}`);return await t.json()}async function i(){const t=document.querySelector(".cards__grid");if(!t){console.warn("No .cards__grid found");return}t.innerHTML='<div class="loading">Loading...</div>';try{const a=await n();t.innerHTML=a.map(e).join("")}catch(a){console.error(a),t.innerHTML='<div class="error">Failed to load</div>'}}document.addEventListener("DOMContentLoaded",i);
