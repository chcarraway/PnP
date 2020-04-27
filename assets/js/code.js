
var levels = Object.keys(powerLevels);
var trait = Object.keys(traits);
var heroDicePool = 0;
var hdSpend = 0;
var hdRemaining = 0;
var ad = 0

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
    if (activeElement.classList.contains('trait') && activeElement.classList.contains('rank') && activeElement.value === '1') {
        activeElement.nextElementSibling.firstElementChild.classList.remove('hide');
    }
    if (activeElement.classList.contains('trait') && activeElement.classList.contains('rank') && activeElement.value > '1') {
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
        let noSpaceName = traits[i].name.replace(/\s+/g, '');
        traitContainer.innerHTML +=
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend w186">' +
            '<span class="input-group-text w186">' + traits[i].name + '</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span></div>' +
            '<input type="number" class="form-control trait rank" id="' + noSpaceName + 'Value" value="2" min="1">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text hide" id="weak">Weak</span>' +
            '</div>' +
            '</div>';
    }
    let powerContainer = document.getElementById('powerContainer');
    for (let i = 0; i < powers.length; i++) {
        let noSpaceName = powers[i].name.replace(/\s+/g, '');
        powerContainer.innerHTML +=
            '<div class="input-group mb-3">' +
            '<div class="input-group-prepend w186">' +
            '<span class="input-group-text w186">' + powers[i].name + '</span> ' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '</div>' +
            '<input type="number" class="form-control power rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text hide" id="strong">Strong</span>' +
            '</div>' +
            '</div>';
    }
}

function heroDice() {
    let x = document.getElementById('gameTierSelect').value;
    if (x == 999) {
        document.getElementById('gameTierHD').innerHTML = "";
        //document.getElementById('gameTierMax').innerHTML = "";
        
        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++){
            ranks[i].innerHTML = "";
        }
        heroDicePool = "";
    }
    else {
        document.getElementById('gameTierHD').innerHTML = powerLevels[levels[x]].hd;
        //document.getElementById('gameTierMax').innerHTML = powerLevels[levels[x]].maxRank;

        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++){
            ranks[i].innerHTML = powerLevels[levels[x]].maxRank;
        }

        heroDicePool = powerLevels[levels[x]].hd;
        hdRemaining = powerLevels[levels[x]].hd;

        let selectInputs = document.querySelectorAll('.trait, .power');
        for (let i = 0; i < selectInputs.length; i++) {
            selectInputs[i].max = powerLevels[levels[x]].maxRank;
        }
        document.getElementById('hdRemaining').innerHTML = hdRemaining;
    }
}

function advancement() {
    ad = parseInt(document.getElementById('advancement').value);
    hdRemaining = heroDicePool - hdSpend + ad;
    document.getElementById('hdRemaining').innerHTML = hdRemaining;
}

function tallyHD() {
    hdSpend = 0;
    // count HD spent
    let selectSpend = document.querySelectorAll('.spend');
    for (let i = 0; i < selectSpend.length; i++) {
        hdSpend += parseInt(selectSpend[i].innerText);
    }
    hdRemaining = heroDicePool - hdSpend + ad;
    // update HD remaining in the header
    document.getElementById('hdRemaining').innerHTML = hdRemaining
}

function setSpend(){
    //loop for traits
    let selectTraits = document.querySelectorAll('.trait');
    for (i = 0; i < selectTraits.length; i++){
        let noSpaceName = traits[i].name.replace(/\s+/g, '');
        let currentRank = parseInt(selectTraits[i].value);
        traits[i].rank = currentRank - 2;
        document.getElementById(noSpaceName + 'Spend').innerHTML = traits[i].rank;
    }

    //loop for powers
    let selectPowers = document.querySelectorAll('.power');
    for (i = 0; i < selectPowers.length; i++){
        let noSpaceName = powers[i].name.replace(/\s+/g, '');
        let currentRank = parseInt(selectPowers[i].value);
        if (powers[i].strong === 'TRUE') {
            powers[i].rank = Math.trunc(currentRank * 2);
        }
        else {
            powers[i].rank = currentRank;
        }
        document.getElementById(noSpaceName + 'Spend').innerHTML = powers[i].rank;
    }
}

const tier = document.getElementById('gameTierSelect');
tier.addEventListener('change', heroDice);

const form = document.getElementById('form');
form.addEventListener('change', weakAttribute);
form.addEventListener('change', setSpend);
form.addEventListener('change', tallyHD);
form.addEventListener('change', advancement);

const body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

populateForm();
populateDropdown();
tallyHD();