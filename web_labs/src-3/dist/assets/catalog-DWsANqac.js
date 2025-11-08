import"./script-DqhT73mu.js";const c="https://ceramic-api.onrender.com";function r(t){return`
        <article class="catalog__item">
            <img 
                src="${new URL(t.image,c)}" 
                alt="${t.title}" 
                loading="lazy"
            >
            <div class="catalog__info">
                <h3>${t.title}</h3>
                <p>${t.price} €</p>
            </div>
        </article>
    `}async function o(){const t=await fetch(`${c}/api/products`);if(!t.ok)throw new Error(`Fetch failed with status: ${t.status}`);return await t.json()}async function n(t="tea"){const e=document.querySelector(".catalog__grid");if(!e){console.warn("No .catalog__grid found");return}e.innerHTML='<div class="loading">Loading...</div>';try{const a=await o();let i=[];t==="tea"?i=a.slice(0,5):t==="kitchen"?i=a.slice(0,3):t==="plants"&&(i=a.slice(0,2)),e.innerHTML=i.map(r).join("")}catch(a){console.error(a),e.innerHTML='<div class="error">Failed to load</div>'}}function s(){const t=document.querySelectorAll(".catalog__filter");t.length&&t.forEach(e=>{e.addEventListener("click",async()=>{t.forEach(i=>i.classList.remove("active")),e.classList.add("active");const a=e.dataset.category;await n(a)})})}document.addEventListener("DOMContentLoaded",()=>{s(),n("tea")});
