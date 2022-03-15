{/* <div class = "movies">
            <h1>Title: Hereditary</h1>
            <h3> release: January 21, 2018</h3>
            <h3>director: 'Ari Aster',</h3>
            <h3>'Toni Collette',
            'Alex Wolff',
            'Milly Shapiro',
            'Ann Dowd',
            'Gabriel Byrne'
            </h3>
        </div> */}
export function rendermovieEl(movie) {
    const movieEl = document.createElement('div');
    const titleEl = document.createElement('h1');
    const releaseEl = document.createElement('h3');
    const directorEl = document.createElement('h3');
    const castEl = document.createElement('h3');

    movieEl.classList.add(movie);
    titleEl.textContent = movie.title;
    releaseEl.textContent = `Released on ${movie.release} `;
    directorEl.textContent = `Directed by ${movie.director} `;

    for (let stars of movie.starring){
        const starsEl = document.createElement('li');
        starsEl.textContent = stars;

        castEl.append(starsEl);

    }
    movieEl.append(titleEl, releaseEl, directorEl, castEl);
    return movieEl
}