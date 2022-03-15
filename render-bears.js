export function renderBearEl(bear) {

    const bearEl = document.createElement('div');
    const bearTypeEl = document.createElement('h2');
    const bearColorEl = document.createElement('h3');
    const bearLocEl = document.createElement('h3');

    bearEl.classList.add('bear');

    bearTypeEl.textContent = `Bear type: ${bear.type}`;
    bearColorEl.textContent = `Bear color: ${bear.color}`;
    bearLocEl.textContent = `Bear location: ${bear.location}`;

    bearEl.append(bearTypeEl, bearColorEl, bearLocEl);
    return bearEl;
}