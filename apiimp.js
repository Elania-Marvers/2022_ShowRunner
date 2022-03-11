document.body.style.background = 'linear-gradient(to left, red, violet)';
let myStock = localStorage;



chargement();
function chargement(){
    var tabdata = localStorage.getItem('tabdata');
    tabdata = parseInt(tabdata);
    for (let index = 0; index < tabdata; index++) {
        var idx = "FAV" + index;
        document.getElementById('screen').innerHTML += localStorage.getItem(idx);
    }
}

function buttonClick() {
    var c = document.getElementById('textget').value;
    ssearch(c);
}


function setFav() {
    var content = "CAS" + (selectedIndex % cellCount);
    document.getElementById('screen').innerHTML += document.getElementById(content).innerHTML;
    var tabdata = localStorage.getItem('tabdata');
    if (tabdata == undefined || tabdata == null || isNaN(tabdata) || tabdata == "")
	tabdata = 0;
    tabdata = parseInt(tabdata);
    var name = "FAV" + tabdata;
    tabdata = tabdata + 1;
    localStorage.setItem('tabdata', tabdata);
    localStorage.setItem(name, document.getElementById(content).innerHTML);
}

async function ssearch(sea) {
    var seat = sea.replaceAll(" ", "+");


    var url;
    if (seat.startsWith("\"") && seat.endsWith("\"")) {
        seat = seat.substring(1);
        seat = seat.slice(0, -1);
        url = 'https://api.tvmaze.com/search/shows?q=' + seat
    } else {
        url = 'https://api.tvmaze.com/singlesearch/shows?q=' + seat
    }

    fetch(url)
        .then(response => {
            response.json()
                .then(rep => {
                    if (rep === null) {
                        alert(" serie called " + sea + " not found !");
                    } else {
                        if (Array.isArray(rep)) {
                            var repi;
                            if (rep.length === 0)
                                document.getElementById('screen').innerHTML = " serie called " + sea + " not found !";
                            for (let i = 0; i < rep.length && i < 5; i++) {
                                var v = "CAS" + ((selectedIndex + i) % cellCount);
                                document.getElementById(v).innerHTML = "Titre: " + rep[i].show.name + "<br>Date de première diffusion: " +
                                    rep[i].show.premiered + "<br>Note: " +
                                    rep[i].show.rating.average +
                                    "<br> <img src=\"" + rep[i].show.image.medium + "\"><br>";
                            }
                        } else {
                            var v = "CAS" + (selectedIndex % cellCount);
                            document.getElementById(v).innerHTML = "Titre: " + rep.name +
                                "<br>Date de première diffusion: " + rep.premiered +
                                "<br>Note: " + rep.rating.average +
                                "<br> <img src=\"" + rep.image.medium + "\"><br>";
                        }
                    }

                })
                .catch(error => {
                    console.log("an error oculted " + error)
                })

        })
        .catch(error => {
            console.log("an error oculted " + error)
        })
}












/*
** This is for the Caroussel !
*/
var carousel = document.querySelector('.carousel');
var cellCount = 5;
var selectedIndex = 0;
var prevButton = document.getElementById('previous-button');
var nextButton = document.getElementById('next-button');

function rotateCarousel(i) {
    var angle = selectedIndex / cellCount * -360;
    changeCaseCol(selectedIndex + i, 0.1);
    changeCaseCol(selectedIndex, 1);
    carousel.style.transform = 'translateZ(-288px) rotateY(' + angle + 'deg)'; // create the animation
}


function changeCaseCol(nb, value) {
    var v = "CAS" + (nb % cellCount);
    document.getElementById(v).style.opacity = value;
}

prevButton.addEventListener('click', function() {
    if (selectedIndex - 1 > 0) {
        selectedIndex--;
    } else {
        selectedIndex = cellCount - 1 + cellCount;
    }
    rotateCarousel(+1);

});

nextButton.addEventListener('click', function() {
    selectedIndex++;
    rotateCarousel(-1);
});

/*
** This is for the Caroussel !
*/
