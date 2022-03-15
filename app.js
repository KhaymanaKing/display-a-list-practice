import { bears } from './beardata.js';
import { renderBearEl } from './render-bears.js';

import { candies } from './array-candy.js';
import { renderCandyEl } from './render-candy.js';

import { movies } from './array-movies.js';
import { renderMovieEl } from './render-movies.js';

const bearsEl = document.querySelector('.bear');


for (let bear of bears){
    const bearEl = renderBearEl(bear);

    console.log(bearsEl);
    
    bearsEl.append(bearEl);
}

const candiesEl = document.querySelector('.candy');

for (let candy of candies) {
    const candyEl = renderCandyEl(candy);
    console.log(candyEl);
    candiesEl.append(candyEl);
}

const moviesEl = document.querySelector('.movies');

for (let movie of movies) {
    const movieEl = renderMovieEl(movie);
    console.log(movieEl);
    moviesEl.append(movieEl);
}