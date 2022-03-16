export function renderCandyEl(candy) {
    const candyEl = document.createElement ('div');

    candyEl.classList.add('candy');
    candyEl.textContent = `${candy}`;
    
    return candyEl;
}