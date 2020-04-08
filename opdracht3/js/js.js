
var filmlijst = document.querySelector('ul');
var mijnlijst = document.querySelector('.myList');
var button = document.querySelector('.listButton');
var deSlider = document.querySelector('.slider');
var radio_array = new Array();
var positieSlider;


let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const movies = request.response;
    showMovies(movies);
    interactionSlider();
}


function showMovies(movies) {
    for (let i = 0; i < movies.length; i++) {

        let film = document.createElement('li');
        let poster = document.createElement('img');
        let title = document.createElement('h2');

        poster.src = movies[i].cover;
        poster.setAttribute("alt", movies[i].title);
        title.innerHTML = movies[i].title;



        film.appendChild(title);
        film.appendChild(poster);

        document.body.querySelector("ul").appendChild(film);

        deSlider.appendChild(film);
        positieSlider = 0;
    }



}

//Sortable code.

new Sortable(filmlijst, {
    group: 'shared', // set both lists to same group
    animation: 150
});

new Sortable(mijnlijst, {
    group: 'shared',
    animation: 150
});

button.addEventListener("click", function () {
    document.body.classList.toggle("beweeg");
});


//hieronder de carousel code met behulp van de codepen van Sanne.

function interactionSlider() {
    var buttonRight = document.getElementById("right");
    var buttonLeft = document.getElementById("left");

    buttonLeft.addEventListener("click", function () {
        moveSlider("naarLinks");
    });
    buttonRight.addEventListener("click", function () {
        moveSlider("naarRechts");
    });

    window.addEventListener("keydown", function () {
        if (event.key == "ArrowLeft") {
            moveSlider("naarLinks");
        } else if (event.key == "ArrowRight") {
            moveSlider("naarRechts");
        }
    });
    deSlider.addEventListener("change", function (event) {
        var deRadioButton = event.target;
        var deRadioButtonID = deRadioButton.id;
        var deRadioButtonIDnummer = deRadioButtonID.substring(5);
        var newPositieSlider = parseInt(deRadioButtonIDnummer) - 1;
        positieSlider = newPositieSlider;
    });

}

function moveSlider(richting) {
    var radio_length = radio_array.length;

    if (richting == "naarLinks") {
        draaiCarrousel("naarLinks");

    } else if (richting == "naarRechts") {+
        draaiCarrousel("naarRechts");
    }
}



function draaiCarrousel(richting) {

    var deCarrousel = document.querySelector(".slider");
    var huidigeCarrouselHoek;
    var nieuweCarrouselHoek;

    huidigeCarrouselHoek = getComputedStyle(deCarrousel).getPropertyValue("--carrouselHoek");
    huidigeCarrouselHoek = huidigeCarrouselHoek.substring(0, huidigeCarrouselHoek.length - 3);
    huidigeCarrouselHoek = parseInt(huidigeCarrouselHoek);

    if (richting == "naarLinks") {
        nieuweCarrouselHoek = huidigeCarrouselHoek - 60;

    } else if (richting == "naarRechts") {
        nieuweCarrouselHoek = huidigeCarrouselHoek + 60;
    }
    nieuweCarrouselHoek = nieuweCarrouselHoek + "deg";
    deCarrousel.style.setProperty("--carrouselHoek", nieuweCarrouselHoek);
}
