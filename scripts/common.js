const links = document.getElementsByTagName("a");

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

function init() {
    console.log("Page Loaded");
}

for(link of links){
    link.addEventListener("click",fadeOutBeforeChangePage);
}

window.addEventListener("pageshow", cleanBody);
document.addEventListener("DOMContentLoaded", init);