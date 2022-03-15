export function renderCandyEl(candy) {
    const candyEl = document.createElement ('div');

    candyEl.classList.add('candy');
    candyEl.textContent = `List of Candy ${candy}`;
    candyEl.append(candyEl);
    return candyEl;
}