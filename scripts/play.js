const maxPoints = 12;

let mentalHealth = maxPoints;
let physicHealth = maxPoints;

// DOM
const counterEsprit = document.getElementById("counter-esp");
const counterPhysic = document.getElementById("counter-phy");

const checkboxesEsprit = document.querySelectorAll("[data-espr]");
const checkboxesPhysic = document.querySelectorAll("[data-phys]");

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