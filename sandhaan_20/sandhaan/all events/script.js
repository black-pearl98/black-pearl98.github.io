window.onload = function() {
  this.removeLoadingScreen()
}

function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond).nextAll().removeClass().addClass('hideRight');
  $(prevSecond).prevAll().removeClass().addClass('hideLeft');

}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function() {
  moveToSelected('prev');
});

$('#next').click(function() {
  moveToSelected('next');
});


var menuBtn = document.querySelector(".menu-btn");
var nav = document.querySelector(".nav");
var menuShown = false;

menuBtn.addEventListener("click", function () {
  if (menuShown) {
    nav.style.opacity = 0;
    menuShown = false;
    setTimeout(function () {
      nav.style.display = "none";
      menuBtn.classList.remove("pushed");
      nav.classList.remove("active");
    }, 600);
  } else {
    nav.style.display = "flex";
    setTimeout(function () {
      menuBtn.classList.add("pushed");
      nav.style.opacity = 1;
      nav.classList.add("active");
    }, 10);
    menuShown = true;
  }
})

document.querySelectorAll(".buttons button").forEach(function (btn) {
  btn.addEventListener("click", function() {
    btn.style.animation = "explode 500ms 0s ease-in-out 1";
    setTimeout(function() {
      btn.style.animation = "none";
    }, 500);
  })
})

function removeLoadingScreen() {
  setTimeout(() => {
    document.querySelector(".loading").classList.add("complete");

  }, 800);
  setTimeout(() => {
    document.querySelector(".loading").style.display = "none";
  }, 1200);
}