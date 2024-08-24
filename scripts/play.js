const maxPoints = 12;

let mentalHealth = maxPoints;
let physicHealth = maxPoints;
let adrenaline = 3;

// DOM
const counterEsprit = document.getElementById("counter-esp");
const counterPhysic = document.getElementById("counter-phy");

const checkboxesEsprit = document.querySelectorAll("[data-espr]");
const checkboxesPhysic = document.querySelectorAll("[data-phys]");
const checkboxesAdre = document.querySelectorAll("[data-adre]");

const tableEsprit = [];
for(espritElem of checkboxesEsprit) {
    espritElem.addEventListener("change", updateScore);
    tableEsprit[parseInt(espritElem.dataset.espr)] = espritElem;
}

const tablePhysic = [];
for(physicElem of checkboxesPhysic) {
    physicElem.addEventListener("change", updateScore);
    tablePhysic[parseInt(physicElem.dataset.phys)] = physicElem;
}

function updateAdrenaline() {
    if(physicHealth <= 8) {
        checkboxesAdre[1].classList.remove("close");
    }
    if(physicHealth <= 4) {
        checkboxesAdre[2].classList.remove("close");
    }
}

function updtateDOMcounter (cat) {
    if(cat === "esp" || cat === "both") {
        for(indexEsp in tableEsprit) {
            tableEsprit[indexEsp].checked = indexEsp >= mentalHealth;
        }
        counterEsprit.innerText = mentalHealth;
    }
    if(cat === "phy" || cat ==="both") {
        for(indexPhy in tablePhysic) {
            tablePhysic[indexPhy].checked = indexPhy >= physicHealth;
        }
        counterPhysic.innerText = physicHealth;
        updateAdrenaline();
    }
}

function updateScore(ev) {
    if(ev.target.hasAttribute("data-espr")) {
        mentalHealth = parseInt(ev.target.dataset.espr);
        updtateDOMcounter("esp");
    } else if (ev.target.hasAttribute("data-phys")) {
        physicHealth = parseInt(ev.target.dataset.phys);
        updtateDOMcounter("phy");
    }
}

// INIT
updtateDOMcounter("both");