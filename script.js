const flower = document.getElementById("loading-flower");

const frames = ["assets/flor1.png", "assets/flor2.png", "assets/flor3.png"];

let currentFrame = 0;

setInterval(() => {
  currentFrame++;

  if (currentFrame >= frames.length) {
    currentFrame = 0;
  }

  flower.src = frames[currentFrame];
}, 300);

window.addEventListener("load", () => {

    const loadingScreen = document.getElementById("loading-screen");

    setTimeout(() => {

        loadingScreen.style.opacity = "0";

        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 500);

    }, 1500);

});

//menu do site//

function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
  }

  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}

document.getElementById("myLink").click();
