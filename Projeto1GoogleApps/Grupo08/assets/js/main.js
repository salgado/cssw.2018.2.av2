var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
    cardSelect(slideIndex);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
    cardSelect(slideIndex);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-red", "");
    }
    x[slideIndex - 1].style.display = "block";
    //dots[slideIndex - 1].className += " w3-red";
}

function cardClick(n) {
    currentDiv(n);

    cardSelect(n)
}

function cardSelect(n) {
    var card = document.getElementsByClassName("card");
    card[n - 1].scrollIntoView({
        behavior: 'smooth'
    });

    card[n - 1].classList.add("card-select");
    for (var i = 0; i < card.length; i++) {
        if (card[i] != card[n - 1]) {
            card[i].classList.remove("card-select");
        }
    }
}

function compartilhar() {
    var url = window.location.href,
        f = "https://www.facebook.com/sharer.php?u=";
    window.open(f + url, '_blank').focus();
}
