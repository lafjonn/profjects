var searchBtn = document.querySelector(".searchblock__btn");
var modalForm = document.querySelector(".modal");
var counterLess = modalForm.querySelectorAll(".modal__counter-less");
var counterMore = modalForm.querySelectorAll(".modal__counter-more");
var inputs = modalForm.querySelectorAll(".modal__counter-wrapper input");

modalForm.classList.add("modal__hide");

searchBtn.addEventListener("click", function(event) {
  event.preventDefault();

  modalForm.classList.toggle("modal__hide");
});

modalForm.addEventListener("submit", function(event) {
  if(inputs[0].value < 1) {
    event.preventDefault();
    modalForm.classList.remove("modal__error");
    modalForm.offsetWidth = modalForm.offsetWidth;
    modalForm.classList.add("modal__error");
    console.log("Выберите как минимум одного взрослого");
  }
});

for (var i = 0; i < inputs.length; i++) {
  (function(i) {
    counterLess[i].addEventListener("click", function(event) {
      event.preventDefault();

      if (inputs[i].value > 0) {
        inputs[i].value = --inputs[i].value;
      }
    });
    counterMore[i].addEventListener("click", function(event) {
      event.preventDefault();

      inputs[i].value = ++inputs[i].value;
    });
  }(i));
}

function initMap() {
  var locationSedona = {lat: 34.865969, lng: -111.763604};
  var mapOptions = {
    center: new google.maps.LatLng(locationSedona),
    zoom: 10,
    disableDefaultUI: true
  };

  var map = new google.maps.Map(document.querySelector(".map"), mapOptions);

  var marker = new google.maps.Marker({
    position: locationSedona,
    map: map,
    title: "Sedona"
  });
}

google.maps.event.addDomListener(window, 'load', initMap);