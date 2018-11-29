var x=document.getElementById("demo");
window.location = "#wall-1";

function getLocation()
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(showPosition);
    }
  else{x.innerHTML="O seu navegador não suporta Geolocalização.";}
  }
function showPosition(position)
  {
  	let lat = position.coords.latitude;
  	let long = position.coords.longitude;  
    criaMap(long, lat );
  }
function criaMap(long, lat ){
		mapboxgl.accessToken = 'pk.eyJ1IjoiYWxleC1zYWxnYWRvIiwiYSI6ImNqbnc2OHdreTAwMXcza3B0bzdvOGZhZWEifQ.GAqMlYzetVlP7lb8eW7zUw';
			
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
        bearing: 0,
        center: [long, lat],
        zoom: 17,
        speed: 0.8,
        pitch: 0
});
var chapters = {
    'welcome': {
        bearing: 0,
        center: [-43.106577,-22.896528],
        zoom: 17,
        speed: 0.8,
        pitch: 0
    },
    'Meu1': { //Meu1
        bearing: 0,
        center: [-46.358625,-23.362960],
        zoom: 19,
        pitch: 54.00
    },
};
// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};
var activeChapterName = '';


	}  

function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;
    map.flyTo(chapters[chapterName]);
    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');
    activeChapterName = chapterName;
}
function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}  