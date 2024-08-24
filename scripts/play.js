// VARIABLES
const maxPoints = 12;

let mentalHealth = maxPoints;
let physicHealth = maxPoints;
let adrenaline = 3;

// DOM
// DOM - COUNTERS
const counterEsprit = document.getElementById("counter-esp");
const counterPhysic = document.getElementById("counter-phy");
// DOM - CHECKBOXES
const checkboxesEsprit = document.querySelectorAll("[data-espr]");
const checkboxesPhysic = document.querySelectorAll("[data-phys]");
const checkboxesAdre = document.querySelectorAll("[data-adre]");
// DOM - DMG COUNTER
const espDmgCounter = document.getElementById("esp-dmg-counter");
const phyDmgCounter = document.getElementById("phy-dmg-counter");
// DOM - CTAS
const chockBtn = document.getElementById("btn-damages");
const dmgApply = document.getElementById("dmg-apply");
const adreShotBtn = document.getElementById("btn-adrenaline");
// DOM - OTHERS
const modalElement = document.getElementById("modal-wrap");

// SORT ARRAYS
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

// FUnCtions
function popModal() {
    modalElement.classList.add("active");
    espDmgCounter.value = 0;
    phyDmgCounter.value = 0;
}

function applyDamages() {
    if(phyDmgCounter !== 0) {
        physicHealth -= phyDmgCounter.value;
        updtateDOMcounter("phy");
    }
    if(espDmgCounter !== 0) {
        mentalHealth -= espDmgCounter.value;
        updtateDOMcounter("esp");
    }
    popOut();
}

function adrenalineShot() {
    for(adrEl of checkboxesAdre) {
        if(!adrEl.classList.contains("close") && !adrEl.checked) {
            adrEl.checked = true;
            updateAdrenaline();
            break;
        }
    }
}

function updateAdrenaline() {
    if(physicHealth <= 8) {
        checkboxesAdre[1].classList.remove("close");
    }
    if(physicHealth <= 4) {
        checkboxesAdre[2].classList.remove("close");
    }
    for(adrEl of checkboxesAdre) {
        if(!adrEl.classList.contains("close") && !adrEl.checked) {
            adreShotBtn.disabled = false;
            break;
        } else {
            adreShotBtn.disabled = true;
        }
    }
}

function damageUpdate(char, dir) {
    let target = phyDmgCounter;
    let damages = parseInt(target.value);
    let max = physicHealth;
    if (char==="esp"){
        target = espDmgCounter;
        damages = parseInt(target.value);
        max = mentalHealth;
    }
    if(dir === "up" && damages < max) {
        damages += 1;
    }
    else if (dir === "down" && damages > 0) {
        damages -= 1;
    }
    target.value = damages;
}

function updtateDOMcounter (cat) {
    if(cat === "esp" || cat === "both") {
        for(indexEsp in tableEsprit) {
            tableEsprit[indexEsp].checked = indexEsp >= mentalHealth;
        }
        counterEsprit.innerText = mentalHealth;
        espDmgCounter.setAttribute("max", mentalHealth);
    }
    if(cat === "phy" || cat ==="both") {
        for(indexPhy in tablePhysic) {
            tablePhysic[indexPhy].checked = indexPhy >= physicHealth;
        }
        counterPhysic.innerText = physicHealth;
        phyDmgCounter.setAttribute("max", physicHealth);
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

// EVENT LISTENERS
chockBtn.addEventListener("click", popModal);
dmgApply.addEventListener("click", applyDamages)
adreShotBtn.addEventListener("click", adrenalineShot);

// INIT
updtateDOMcounter("both");