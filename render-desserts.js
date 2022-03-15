
            // <h1>type: Ice Cream</h1>
            // <h2>rating: 4</h2>
            // <h3> flavor: 'Huckleberry',
            //     why:'I do not make the rules its just the truth.'</h3>

export function renderDessertsEl(desserts){
    const dessertsEl = document.createElement('div');
    const typeEl = document.createElement('h1');
    const flavorEl = document.createElement('span');

    dessertsEl.classList.add('desserts');

    typeEl.textContent = desserts.type;
    flavorEl.textContent = `Best Flavor is ${flavorEl.flavor}. Why? ${flavorEl.why}`;

    dessertsEl.append(typeEl, flavorEl);
    return dessertsEl;
}