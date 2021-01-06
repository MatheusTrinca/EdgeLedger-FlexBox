//* Google Maps
let map;
function initMap() {
  const loc = { lat: 37.452473, lng: -122.1212843 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: loc,
    zoom: 10,
  });
  const marker = new google.maps.Marker({ position: loc, map });
}

//* NavBar opacity on scroll down
document.addEventListener("scroll", () => {
  if (window.scrollY > 150) {
    document.getElementById("navbar").style.opacity = 0.8;
  } else {
    document.getElementById("navbar").style.opacity = 1;
  }
});

//* Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 60,
      },
      800
    );
  } // End if
});
