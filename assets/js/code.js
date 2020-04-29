
//var levels = Object.keys(powerLevels);
//var trait = Object.keys(traits);
var heroDicePool = 0;
var hdSpend = 0;
var hdRemaining = 0;
var ad = 0;
var weakCount = 0;

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

function showPowerSource() {
    document.querySelectorAll('.trait').forEach((trait, i) => {
        let rank = parseInt(trait.querySelector('.rank').value);
        if (rank >= 6) {
            trait.querySelector(`.${noSpaceName(traits[i].name)}ps`).hidden=false;
            trait.querySelector('.weak').hidden=true;
        } else if (rank == 1) {
            trait.querySelector('.weak').hidden=false;
        } else {
            trait.querySelector(`.${noSpaceName(traits[i].name)}ps`).hidden=true;
            trait.querySelector('.weak').hidden=true;
        }
    })
    if (document.querySelectorAll('.weak:not([hidden])').length > 3) {
        $('#errorModal').modal('show');
    };

    document.querySelectorAll('.power').forEach((power, i) => {
        let rank = parseInt(power.querySelector('.rank').value);
        if (rank >= 1) {
            document.querySelector(`.${noSpaceName(powers[i].name)}ps`).classList.remove('hide');
        } else {
            document.querySelector(`.${noSpaceName(powers[i].name)}ps`).classList.add('hide');
        }
    });

    document.querySelectorAll('.perk').forEach((perk, i) => {
        let rank = parseInt(perk.querySelector('.rank').value);
        if (rank >= 1) {
            document.querySelector(`.${noSpaceName(perks[i].name)}ps`).classList.remove('hide');
        } else {
            document.querySelector(`.${noSpaceName(perks[i].name)}ps`).classList.add('hide');
        }
    });

    /* 
        if (rank[i].classList.contains('power') || rank[i].classList.contains('perk')) {
            if (parseInt(rank[i].value) >= 1) {
                rank[i].parentNode.nextElementSibling.classList.remove('hide');
            }
            else {
                rank[i].parentNode.nextElementSibling.classList.add('hide');
            }
        } */
}

function showProsCons() {
    var rank = document.getElementsByClassName('rank');
    for (i = 0; i < rank.length; i++) {
        if (parseInt(rank[i].value) >= 1) {
            rank[i].parentElement.nextElementSibling.nextElementSibling.classList.remove('hide');
        }
        else {
            rank[i].parentElement.nextElementSibling.nextElementSibling.classList.add('hide');
        }
    }
}

function populateDropdowns() {
    //flaws
    let dropdown = document.getElementById('flaws');
    for (let i = 0; i < flaws.length; i++) {
        option = document.createElement('option');
        option.text = flaws[i].name;
        option.value = i;
        dropdown.add(option);
    }

    //game tier
    dropdown = document.getElementById('gameTierSelect');

    let defaultOption = document.createElement('option');
    defaultOption.text = 'Choose Game Tier';
    defaultOption.value = 999;

    dropdown.add(defaultOption);
    dropdown.selectedIndex = 0;

    for (let i = 0; i < powerLevels.length; i++) {
        option = document.createElement('option');
        option.text = powerLevels[i].name;
        option.value = i;
        dropdown.add(option);
    }

    //power sources
    let dropdowns = document.getElementsByClassName('powersource');
    for (let i = 0; i < dropdowns.length; i++) {
        for (let j = 0; j < powerSources.length; j++) {
            option = document.createElement('option');
            option.text = powerSources[j].name;
            option.value = j;
            dropdowns[i].add(option);
        }
    }

    //weapons
    dropdown = document.getElementById('weapons');
    for (let i = 0; i < weapons.length; i++) {
        option = document.createElement('option');
        option.text = weapons[i].name;
        option.value = i;
        dropdown.add(option);
    }

    //armor
    dropdown = document.getElementById('armor');
    for (let i = 0; i < armors.length; i++) {
        option = document.createElement('option');
        option.text = armors[i].name;
        option.value = i;
        dropdown.add(option);
    }

    //shields
    dropdown = document.getElementById('shields');
    for (let i = 0; i < shields.length; i++) {
        option = document.createElement('option');
        option.text = shields[i].name;
        option.value = i;
        dropdown.add(option);
    }

    //equipment
    dropdown = document.getElementById('equipment');
    for (let i = 0; i < equipment.length; i++) {
        option = document.createElement('option');
        option.text = equipment[i].name;
        option.value = i;
        dropdown.add(option);
    }
}

function populateForm() {
    // Traits
    let traitContainer = document.getElementById('traitContainer');
    for (let i = 0; i < traits.length; i++) {
        traitContainer.innerHTML +=
            '<div class="trait" id="' + noSpaceName(traits[i].name) + 'Group" data-name="' + traits[i].name + '">' +
            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + traits[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName(traits[i].name) + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control rank" id="' + noSpaceName(traits[i].name) + 'Value" value="2" min="1">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text weak" hidden data-toggle="tooltip" title="You\re only allowed 3 weak attributes">Weak</span>' +
            '</div>' +
            '</div>' +
            '<div class="input-group ' + noSpaceName(traits[i].name) + 'ps">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName(traits[i].name) + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<select multiple class="custom-select pcs hide" id="' + noSpaceName(traits[i].name) + 'PCs">' +
            '</select>' +
            '</div>';

        for (let j = 0; j < prosCons.length; j++) {
            let dropdown = document.getElementById(noSpaceName(traits[i].name) + 'PCs');
            if (prosCons[j].tpp == traits[i].name) {
                option = document.createElement('option');
                option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                option.dataset.cost = prosCons[j].cost;
                dropdown.add(option);
            }
            if (prosCons[j].tpp == 'tpp') {
                option = document.createElement('option');
                option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                option.dataset.cost = prosCons[j].cost;
                dropdown.add(option);
            }
        }
    }
    // Powers
    let powerContainer = document.getElementById('powerContainer');
    for (let i = 0; i < powers.length; i++) {
        if (powers[i].strong === true) {
            powerContainer.innerHTML +=
                '<div class="power ' + noSpaceName(powers[i].name) + 'Group" data-name="' + powers[i].name + '">' +
                '<div class="input-group mt-3">' +
                '<div class="input-group w-100">' +
                '<span class="input-group-text w-100">' + powers[i].name + '</span>' +
                '</div></div>' +
                '<div class="input-group">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text">Points spent:</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName(powers[i].name) + 'Spend">0</span>' +
                '<span class="input-group-text">Rank:</span>' +
                '</div>' +
                '<input type="number" class="form-control rank" id="' + noSpaceName(powers[i].name) + 'Value" value="0" min="0">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="strong" data-toggle="tooltip" title="Strong attributes cost twice as much">Strong</span>' +
                '</div>' +
                '</div>' +
                '<div class="input-group ' + noSpaceName(powers[i].name) + 'ps hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName(powers[i].name) + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<select multiple class="custom-select pcs hide" id="' + noSpaceName(powers[i].name) + 'PCs">' +
                '</select>' +
                '</div>';
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName(powers[i].name) + 'PCs');
                if (prosCons[j].tpp == powers[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        } else {
            powerContainer.innerHTML +=
                '<div class="power ' + noSpaceName(powers[i].name) + 'Group" data-name="' + powers[i].name + '">' +
                '<div class="input-group mt-3">' +
                '<div class="input-group w-100">' +
                '<span class="input-group-text w-100">' + powers[i].name + '</span>' +
                '</div></div>' +
                '<div class="input-group">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text">Points spent:</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName(powers[i].name) + 'Spend">0</span>' +
                '<span class="input-group-text">Rank:</span>' +
                '</div>' +
                '<input type="number" class="form-control rank" id="' + noSpaceName(powers[i].name) + 'Value" value="0" min="0">' +
                '</div>' +
                '<div class="input-group ' + noSpaceName(powers[i].name) + 'ps hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName(powers[i].name) + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<select multiple class="custom-select pcs hide" id="' + noSpaceName(powers[i].name) + 'PCs">' +
                '</select>' +
                '</div>';
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName(powers[i].name) + 'PCs');
                if (prosCons[j].tpp == powers[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
            }

        }
    }
    //Perks
    let perkContainer = document.getElementById('perkContainer');
    for (let i = 0; i < perks.length; i++) {
        if (perks[i].multiple === true) {
            perkContainer.innerHTML +=
                '<div class="perk ' + noSpaceName(perks[i].name) + 'Group" data-name="' + perks[i].name + '">' +
                '<div class="input-group mt-3">' +
                '<div class="input-group w-100">' +
                '<span class="input-group-text w-100">' + perks[i].name + '</span>' +
                '</div></div>' +
                '<div class="input-group">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text">Points spent:</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName(perks[i].name) + 'Spend">0</span>' +
                '<span class="input-group-text">Rank:</span>' +
                '</div>' +
                '<input type="number" class="form-control rank" id="' + noSpaceName(perks[i].name) + 'Value" value="0" min="0">' +
                '</div>' +
                '<div class="input-group ' + noSpaceName(perks[i].name) + 'ps hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName(perks[i].name) + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<select multiple class="custom-select pcs hide" id="' + noSpaceName(perks[i].name) + 'PCs">' +
                '</select>' +
                '</div>';
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName(perks[i].name) + 'PCs');
                if (prosCons[j].tpp == perks[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        } else {
            perkContainer.innerHTML +=
                '<div class="perk ' + noSpaceName(perks[i].name) + 'Group" data-name="' + perks[i].name + '">' +
                '<div class="input-group mt-3">' +
                '<div class="input-group w-100">' +
                '<span class="input-group-text w-100">' + perks[i].name + '</span>' +
                '</div></div>' +
                '<div class="input-group">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text">Points spent:</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName(perks[i].name) + 'Spend">0</span>' +
                '<span class="input-group-text">Rank:</span>' +
                '</div>' +
                '<input type="number" class="form-control rank" id="' + noSpaceName(perks[i].name) + 'Value" value="0" min="0" max="1">' +
                '</div>' +
                '<div class="input-group ' + noSpaceName(perks[i].name) + 'ps hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName(perks[i].name) + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<select multiple class="custom-select pcs hide" id="' + noSpaceName(perks[i].name) + 'PCs">' +
                '</select>' +
                '</div>';
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName(perks[i].name) + 'PCs');
                if (prosCons[j].tpp == perks[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.dataset.cost = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        }
    }
}

function heroDice() {
    let x = document.getElementById('gameTierSelect').value;
    if (x == 999) {
        document.getElementById('gameTierHD').innerHTML = "";
        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++) {
            ranks[i].innerHTML = "";
        }
        heroDicePool = "";
    }
    else {
        document.getElementById('gameTierHD').innerHTML = powerLevels[x].hd;

        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++) {
            ranks[i].innerHTML = powerLevels[x].maxRank;
        }

        heroDicePool = powerLevels[x].hd;
        hdRemaining = powerLevels[x].hd;

        let selectInputs = document.querySelectorAll('.rank');
        for (let i = 0; i < selectInputs.length; i++) {
            selectInputs[i].max = powerLevels[x].maxRank;
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

function setSpend() {
    document.querySelectorAll('.trait, .power, .perk').forEach(container => {
        let traitSpend = parseInt(container.querySelector('.rank').value);
        let pcSpend = 0;
        if (container.classList.contains('trait')) {
            traitSpend -= 2;
        }
        if (container.classList.contains('power')) {
            powers.forEach(power => {
                if (power.name == container.dataset.name && power.strong) {
                    traitSpend *= 2;
                }
            })
        }
        if (container.classList.contains('perk')) {
            perks.forEach(perk => {
                if (perk.name == container.dataset.name) {
                    traitSpend *= perk.cost;
                }
            })
        }
        container.querySelectorAll('.pcs option:checked').forEach(option => {
            if (option.dataset.cost != undefined) {
                pcSpend += parseInt(option.dataset.cost);
            }
        })
        container.querySelector('.spend').innerText = traitSpend + pcSpend;
    })
}

function noSpaceName(name) {
    return name.replace(/[^a-zA-Z0-9]/g, '');
}

const tier = document.getElementById('gameTierSelect');
tier.addEventListener('change', heroDice);

const form = document.getElementById('builderForm');
form.addEventListener('change', setSpend);
form.addEventListener('change', tallyHD);
form.addEventListener('change', advancement);
form.addEventListener('change', showPowerSource);
form.addEventListener('change', showProsCons);

const body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

populateForm();
populateDropdowns();
tallyHD();
showProsCons();
showPowerSource();

$(document).ready(function () {
    $('#flaws').multiselect({
        buttonWidth: '100%',
        maxHeight: 200,
        buttonClass: 'form-control w-100',
        numberDisplayed: 3,
        nSelectedText: ' - Too many options selected!'
    });
});
$(document).ready(function () {
    let pcs = document.getElementsByClassName('pcs');
    $(pcs).multiselect({
        buttonWidth: '100%',
        maxHeight: 200,
        buttonClass: 'form-control w-100',
        nonSelectedText: 'Pros/Cons'
    });
});
$(document).ready(function () {
    let pcs = document.getElementById('weapons');
    $(pcs).multiselect({
        buttonWidth: '100%',
        maxHeight: 200,
        buttonClass: 'form-control w-100',
    });
}); $(document).ready(function () {
    let pcs = document.getElementById('equipment');
    $(pcs).multiselect({
        buttonWidth: '100%',
        maxHeight: 200,
        buttonClass: 'form-control w-100',
    });
});