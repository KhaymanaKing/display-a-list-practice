import { bears } from './beardata.js';
import { renderBearsEl } from './render-bears.js';

import { candies } from './array-candy.js';
import { renderCandyEl } from './render-candy.js';

const bearsEl = document.getElementById(bears);
for (let bear of bears){
    const bearEl = renderBearsEl(bear);

    
    
    bearsEl.append(bearEl);
}

const candyEl = document.getElementById(candies);
for (let candy of candies)
{
    const candy = renderCandyEl(candy);

    candyEl.append(candyEl);
}