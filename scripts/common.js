/*var splide = new Splide( '.splide', {
    type   : 'loop',
    direction: 'ttb',
    height   : '80px',
    drag   : 'free',
    snap   : true,
    perPage: 1,
    pagination: false
  } );

splide.mount();*/

const links = document.getElementsByTagName("a");

// DOM
const mainModal = document.getElementById("modal-wrap");
const popOutCTA = document.getElementById("modal-close");

function fadeOutBeforeChangePage(ev){
    const targetPage = ev.target.href;
    ev.preventDefault();
    document.body.classList.add("fade-out");
    const fadeAway = setTimeout(() => {
        location.href = targetPage;
    }, 1000);
}

function cleanBody() {
    document.body.classList.remove("fade-out");
}

function popOut() {
    mainModal.classList.remove("active");
}

function init() {
    console.log("RAS");
}

for(link of links){
    link.addEventListener("click",fadeOutBeforeChangePage);
}

// EVENT LISTENERS
popOutCTA.addEventListener("click", popOut);

window.addEventListener("pageshow", cleanBody);
document.addEventListener("DOMContentLoaded", init);