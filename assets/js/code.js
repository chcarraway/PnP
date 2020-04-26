
var levels = Object.keys(powerLevels);
var trait = Object.keys(traits);
var heroDicePool = 0;
function checkTabPress(e) {
    "use strict";
    // pick passed event or global event object if passed one is empty
    e = e || event;
    var activeElement;
    if (e.keyCode == 9) {
        // Here read the active selected item.
        activeElement = document.activeElement;
        // If HTML element has class "btn-link"
        if (activeElement.classList.contains("btn-link")) {
            activeElement.click();
        }
    }
}

function weakAttribute(e) {
    e = e || event;
    var activeElement = document.activeElement;
    if (activeElement.classList.contains('trait') && activeElement.value === '1') {
        activeElement.nextElementSibling.firstElementChild.classList.remove('hide');
    }
    if (activeElement.classList.contains('trait') && activeElement.value > '1') {
        activeElement.nextElementSibling.firstElementChild.classList.add('hide');
    }
}

function populateDropdown() {
    let dropdown = document.getElementById('gameTierSelect');
    dropdown.length = 0;

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose Game Tier';
    defaultOption.value = 999;

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;


    for (let i = 0; i < levels.length; i++) {
        option = document.createElement('option');
        option.text = powerLevels[levels[i]].name;
        option.value = i;
        dropdown.add(option);
    }
}

function populateForm() {
    let traitContainer = document.getElementById('traitContainer');
    for (let i = 0; i < trait.length; i++) {
        traitContainer.innerHTML +=
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">' + traits[i].name + '</span></div>' +
            '<input type="number" class="form-control trait" id="' + traits[i].name + 'Value" value="2" min="1">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text hide" id="weak">Weak</span>' +
            '</div>' +
            '</div>';
    }
}

function heroDice() {
    let x = document.getElementById('gameTierSelect').value;
    if (x == 999) {
        document.getElementById('gameTierHD').innerHTML = "";
        document.getElementById('gameTierMax').innerHTML = "";
        document.getElementById('maxRank').innerHTML = "";
        heroDicePool = "";
    }
    else {
        document.getElementById('gameTierHD').innerHTML = powerLevels[levels[x]].hd;
        document.getElementById('gameTierMax').innerHTML = powerLevels[levels[x]].maxRank;
        document.getElementById('maxRank').innerHTML = powerLevels[levels[x]].maxRank;
        heroDicePool = powerLevels[levels[x]].hd;

        let selectTraits = document.querySelectorAll('.trait');
        for (let i = 0; i < selectTraits.length; i++) {
            selectTraits[i].max = powerLevels[levels[x]].maxRank;
        }
        document.getElementById('hdRemaining').innerHTML = powerLevels[levels[x]].hd;
    }
}


function spendHD() {

}

const tier = document.getElementById('gameTierSelect');
tier.addEventListener('change', heroDice);

const form = document.getElementById('form');
form.addEventListener('change', weakAttribute);

const body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

populateForm();
populateDropdown();