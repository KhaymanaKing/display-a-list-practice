import { bears } from './beardata.js';
import { renderBearsEl } from './render-bears.js';

import { candies } from './array-candy.js';
import { renderCandyEl } from './render-candy.js';

const bearsEl = document.getElementById(bears);
for (let bear of bears){
    const bearEl = renderBearsEl(bear);

    
    
    bearsEl.append(bearEl);
}

const candiesEl = document.getElementById(candies);
for (let candyEl of candies) {
    const candyEl = renderCandyEl(candy);

    candyiesEl.append(candy);
}