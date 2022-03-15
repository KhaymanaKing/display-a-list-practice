export function renderBearEl(bear) {

    const bearsEl = document.createElement('div');
    const bearTypeEl = document.createElement('h2');
    const bearColorEl = document.createElement('h3');
    const bearLocEl = document.createElement('h3');

    bearsEl.classList.add('bear');

    bearTypeEl.textContent = `Bear type: ${bear.type}`;
    bearColorEl.textContent = `Bear color: ${bear.color}`;
    bearLocEl.textContent = `Bear location: ${bear.location}`;

    return bearsEl;
}