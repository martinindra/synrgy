var typed = new Typed("#typed", {
  strings: ["Developer", "Designer", "Programmer", "Freelancer"],
  typeSpeed: 40,
  startDelay: 100,
  loop: true,
});

// scroll to top
mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// active
$(document).ready(function () {
  $(".nav ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
  var main_route = window.location.pathname.split("/")[1];
  console.log(main_route);
  $("#navbar_" + main_route).addClass("active");
});
