const links = document.getElementsByTagName("a");

function fadeOutBeforeChangePage(ev){
    const targetPage = ev.target.href;
    ev.preventDefault();
    document.body.classList.add("fade");
    const fadeAway = setTimeout(() => {
        location.href = targetPage;
    }, 1000);
}

for(link of links){
    link.addEventListener("click",fadeOutBeforeChangePage);
}