const header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    const movies = request.response;
    showtitle(movies);
    console.log(movies);
}
//
//function showtitle(jsonObj) {
//    const title = document.createElement('p');
//    title.textContent = jsonObj['0']['title'];
//    header.appendChild(title);
//}



function showtitle(jsonObj) {

    var i;
    for (i = 0; i < 6; i++) {

    const title = document.createElement('p');
    title.textContent = jsonObj[i]['title'];
    const poster = document.createElement('img');
    poster.src = jsonObj[i]['cover'];
    header.appendChild(title);
    header.appendChild(poster);


    }



}
