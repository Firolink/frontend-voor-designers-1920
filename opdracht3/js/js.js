const header = document.querySelector('header');
const section = document.querySelector('section');

var filmlijst = document.querySelector('main');
var mijnlijst = document.querySelector('.myList');
var button = document.querySelector('button');


let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const movies = request.response;
    showMovies(movies);
    console.log(movies);
}
//
//function showtitle(jsonObj) {
//    const title = document.createElement('p');
//    title.textContent = jsonObj['0']['title'];
//    header.appendChild(title);
//}

function showMovies(movies) {
    for (let i = 0; i < movies.length; i++) {

      let title = document.createElement('h2');
      title.textContent = movies[i]['title'];

      let poster = document.createElement('img');
      poster.src = movies[i]['cover'];

      let film = document.createElement('article');
      film.appendChild(title);
      film.appendChild(poster);

      document.body.querySelector("main").appendChild(film);
    }
}


new Sortable(filmlijst, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(mijnlijst, {
    group: 'shared',
    animation: 150
});


button.addEventListener('click', function (event) {
  alert('en dan wil ik dat dit lijstje omhoog schuift vanuit het beeld, maar dat krijg ik niet aan de praat.');
});



