/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

// Code gemaakt met ook hulp van https://www.w3schools.com en https://www.youtube.com

// bij de eerste functie ben ik voor een progressive disclosure idee gegaan, waarbij de lezer het formulier kan krijgen dmv een knop, zodat het voor andere lezers niet de pagina stoort

var delabel = document.querySelector(".delabel");

function bestellen() {

    var checkBox = document.querySelector(".box");

    var invulvelden = document.querySelector(".formulier");

    if (checkBox.checked === true) {
        invulvelden.style.display = "block";
    } else {
        invulvelden.style.display = "none";
    }
}

delabel.addEventListener('click', bestellen);

// bij de tweede functie kan de lezer door meerdere foto's van Max Molovich heen gaan, waarbij de foto's in een rijtje staan

var knopp = document.getElementById('knop');
var status = 'foto';
var imgg = document.getElementById('foto');


function imgVeranderen() {
    if (status == 'foto') {
        imgg.src = 'images/maxmolovich2.jpg';
        status = 'foto1';
        return status;
    } else if (status == 'foto1') {
        imgg.src = 'images/maxmolovich3.jpeg';
        status = 'foto2';
        return status;
    } else if (status == 'foto2') {
        imgg.src = 'images/maxmolovich1.jpg';
        status = 'foto';
        return status;
    }
}

// Naast klikken kan de gebruiker ook het toetsenbord gebruiken waarbij een bepaalde toets een foto bezit

window.addEventListener("keydown", checkKeyPress);

function checkKeyPress(key) {
    if (key.keyCode == "49") {
        imgg.src = 'images/maxmolovich1.jpg';
    } else if (key.keyCode == "50") {
        imgg.src = 'images/maxmolovich2.jpg';
    } else if (key.keyCode == "51") {
        imgg.src = 'images/maxmolovich3.jpeg';
    }
}

knopp.addEventListener('click', imgVeranderen);

// Als laatste probeerde ik ook nog een onscroll functie, waarbij de naam Max Molovich in de footer zou moeten oplichten als de gebruiker langs het formulier bestellen scrollt, maar dat is helaas nog niet gelukt


//window.onscroll = function () {
//    myFunction()
//};
//
//function myFunction() {
//    if (document.body.scrollTop > delabel || document.documentElement.scrollTop > delabel) {
//        document.getElementById("geel").className = "test";
//    } else {
//        document.getElementById("geel").className = "";
//    }
//}
