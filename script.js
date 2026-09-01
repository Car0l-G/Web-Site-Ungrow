const loadingScreen = document.getElementById("loading-screen");
const flower = document.getElementById("loading-flower");

const frames = [
  "assets/flor1.png",
  "assets/flor2.png",
  "assets/flor3.png"
];

let currentFrame = 0;
let loadingInterval;


// Verifica se o usuário já estava no site
const alreadyVisited = sessionStorage.getItem("ungrowVisited");

// Descobre de onde o usuário veio
const referrer = document.referrer;

// Descobre o endereço atual do site
const currentOrigin = window.location.origin;


// Decide se deve mostrar o loading
let showLoading = false;


// Primeira entrada no site
if (!alreadyVisited) {
  showLoading = true;
}

// Usuário veio de outro site
else if (referrer && !referrer.startsWith(currentOrigin)) {
  showLoading = true;
}


// Marca que o usuário já entrou no site
sessionStorage.setItem("ungrowVisited", "true");


// Se NÃO precisar mostrar o loading
if (!showLoading) {

  loadingScreen.style.display = "none";

} else {

  // Animação da flor
  loadingInterval = setInterval(() => {

    currentFrame++;

    if (currentFrame >= frames.length) {
      currentFrame = 0;
    }

    flower.src = frames[currentFrame];

  }, 300);


  // Espera a página carregar
  window.addEventListener("load", () => {

    setTimeout(() => {

      loadingScreen.style.opacity = "0";

      setTimeout(() => {

        loadingScreen.style.display = "none";

        clearInterval(loadingInterval);

      }, 500);

    }, 1500);

  });

}

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


/*==========================
  POP-UP DE AKIRA
=========================== */
//CODIGO FOI TRANSFIRIDO PARA O ARQUIVO INDEX POR PROBLEMAS DE FUNCIONAMENTO, POIS O SCRIPT.JS É CARREGADO ANTES DO HTML, E O POP-UP NÃO CONSEGUIA SER ACESSADO.
// CÓDIGO SE ENCONTRA NAS LINHAS 141 A 165 DO NDEX.HTML

