
var levels = Object.keys(powerLevels);
var trait = Object.keys(traits);
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

function weakAttribute(e) {
    e = e || event;
    var activeElement = document.activeElement;
    if (activeElement.classList.contains('trait') && activeElement.classList.contains('rank') && activeElement.value === '1') {
        activeElement.nextElementSibling.firstElementChild.classList.remove('hide');
        weakCount++;
    }
    if (activeElement.classList.contains('trait') && activeElement.classList.contains('rank') && activeElement.value > '1') {
        activeElement.nextElementSibling.firstElementChild.classList.add('hide');
        weakCount--;
    }

    if (weakCount > 3) {
        $('#errorModal').modal('show');
    }
}

function showPowerSource() {
    var rank = document.getElementsByClassName('rank');
    for (i = 0; i < rank.length; i++) {
        if (rank[i].classList.contains('trait')) {
            if (parseInt(rank[i].value) >= 6) {
                rank[i].parentNode.nextElementSibling.classList.remove('hide');
            }
            else {
                rank[i].parentNode.nextElementSibling.classList.add('hide');
            }
        }
        if (rank[i].classList.contains('power') || rank[i].classList.contains('perk')) {
            if (parseInt(rank[i].value) >= 1) {
                rank[i].parentNode.nextElementSibling.classList.remove('hide');
            }
            else {
                rank[i].parentNode.nextElementSibling.classList.add('hide');
            }
        }
    }
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

function clearProsCons() {
    var button = event.srcElement;
    var dropdown = button.parentElement.parentElement.firstElementChild.nextElementSibling;
    dropdown.selectedIndex = 0;
    setSpend();
    tallyHD();
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

function populatePowerSource() {
    let psDropdowns = document.getElementsByClassName('powersource');

    for (let i = 0; i < psDropdowns.length; i++) {
        for (let j = 0; j < powerSources.length; j++) {
            option = document.createElement('option');
            option.text = powerSources[j].name;
            option.value = j;
            psDropdowns[i].add(option);
        }
    }
}

function populateForm() {
    let traitContainer = document.getElementById('traitContainer');
    for (let i = 0; i < trait.length; i++) {
        let noSpaceName = traits[i].name.replace(/\s+/g, '');
        traitContainer.innerHTML +=
            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + traits[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control trait rank" id="' + noSpaceName + 'Value" value="2" min="1">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text hide" id="weak" data-toggle="tooltip" title="You\re only allowed 3 weak attributes">Weak</span>' +
            '</div>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
            '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
            '<option value="0"></option>' +
            '</select>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-secondary d-none d-sm-block"type="button" onclick="clearProsCons();" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
            '</div>' +
            '</div>';
        /* 
                    '<div class="input-group mt-3">' +
                    '<div class="input-group-prepend w186">' +
                    '<span class="input-group-text w186">' + traits[i].name + '</span>' +
                    '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span></div>' +
                    '<input type="number" class="form-control trait rank" id="' + noSpaceName + 'Value" value="2" min="1">' +
                    '<div class="input-group-append">' +
                    '<span class="input-group-text hide" id="weak" data-toggle="tooltip" title="You\'re only allowed 3 weak attributes">Weak</span>' +
                    '</div>' +
                    '</div>' +
                    '<div class="input-group hide">' +
                    '<div class="input-group-prepend">' +
                    '<span class="input-group-text w-100">Power Source:</span></div>' +
                    '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
                    '<option></option>' +
                    '</select>' +
                    '</div>' +
                    '<div class="input-group hide">' +
                    '<div class="input-group-prepend">' +
                    '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
                    '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
                    '<option value="0"></option>' +
                    '</select>' +
                    '<div class="input-group-append">' +
                    '<button class="btn btn-outline-secondary d-none d-sm-block" type="button" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
                    '</div>' +
                    '</div>'; */
        for (let j = 0; j < prosCons.length; j++) {
            let dropdown = document.getElementById(noSpaceName + 'PCs');
            if (prosCons[j].tpp == traits[i].name) {
                option = document.createElement('option');
                option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                option.value = prosCons[j].cost;
                dropdown.add(option);
            }
            if (prosCons[j].tpp == 'tpp') {
                option = document.createElement('option');
                option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                option.value = prosCons[j].cost;
                dropdown.add(option);
            }
        }
    }
    let powerContainer = document.getElementById('powerContainer');
    for (let i = 0; i < powers.length; i++) {
        let noSpaceName = powers[i].name.replace(/\s+/g, '');
        if (powers[i].strong === true) {

            powerContainer.innerHTML +=
            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + powers[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control power rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
            '<div class="input-group-append">' +
            '<span class="input-group-text" id="strong" data-toggle="tooltip" title="Strong attributes cost twice as much">Strong</span>' +
            '</div>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
            '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
            '<option value="0"></option>' +
            '</select>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-secondary d-none d-sm-block"type="button" onclick="clearProsCons();" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
            '</div>' +
            '</div>';

                /* '<div class="input-group mt-3">' +
                '<div class="input-group-prepend w186">' +
                '<span class="input-group-text w186">' + powers[i].name + '</span> ' +
                '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
                '</div>' +
                '<input type="number" class="form-control power rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
                '<div class="input-group-append">' +
                '<span class="input-group-text" id="strong" data-toggle="tooltip" title="Strong attributes cost twice as much">Strong</span>' +
                '</div>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
                '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
                '<option value="0"></option>' +
                '</select>' +
                '<div class="input-group-append">' +
                '<button class="btn btn-outline-secondary d-none d-sm-block" type="button" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
                '</div>' +
                '</div>'; */
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName + 'PCs');
                if (prosCons[j].tpp == powers[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        } else {
            powerContainer.innerHTML +=

            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + powers[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control power rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
            '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
            '<option value="0"></option>' +
            '</select>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-secondary d-none d-sm-block"type="button" onclick="clearProsCons();" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
            '</div>' +
            '</div>';

                /* '<div class="input-group mt-3">' +
                '<div class="input-group-prepend w186">' +
                '<span class="input-group-text w186">' + powers[i].name + '</span> ' +
                '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
                '</div>' +
                '<input type="number" class="form-control power rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
                '<div class="input-group-append">' +
                '</div>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
                '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
                '<option value="0"></option>' +
                '</select>' +
                '<div class="input-group-append">' +
                '<button class="btn btn-outline-secondary d-none d-sm-block" type="button" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
                '</div>' +
                '</div>'; */
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName + 'PCs');
                if (prosCons[j].tpp == powers[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        }
    }
    let perkContainer = document.getElementById('perkContainer');
    for (let i = 0; i < perks.length; i++) {
        let noSpaceName = perks[i].name.replace(/\s+/g, '');
        if (perks[i].multiple === true) {
            perkContainer.innerHTML +=

            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + perks[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control perk rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text hide w-100">Pros/Cons:</span></div>' +
            '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
            '<option value="0"></option>' +
            '</select>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-secondary d-none d-sm-block"type="button" onclick="clearProsCons();" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
            '</div>' +
            '</div>';

            /*  '<div class="input-group mt-3">' +
                '<div class="input-group-prepend w186">' +
                '<span class="input-group-text w186">' + perks[i].name + '*</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span></div>' +
                '<input type="number" class="form-control perk rank" id="' + noSpaceName + 'Value" value="0" min="0">' +
                '<div class="input-group-append">' + '<span class="input-group-text cost" id="' + noSpaceName + 'Cost"> ' + perks[i].cost + '</span>' +
                '</div></div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
                '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
                '<option value=0></option>' +
                '</select>' +
                '<div class="input-group-append">' +
                '<button class="btn btn-outline-secondary d-none d-sm-block" type="button" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
                '</div>' +
                '</div>'; */
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName + 'PCs');
                if (prosCons[j].tpp == perks[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
            }
        } else {
            perkContainer.innerHTML +=

            '<div class="input-group mt-3">' +
            '<div class="input-group w-100">' +
            '<span class="input-group-text w-100">' + perks[i].name + '</span>' +
            '</div></div>' +
            '<div class="input-group">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text">Points spent:</span>' +
            '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span>' +
            '<span class="input-group-text">Rank:</span>' +
            '</div>' +
            '<input type="number" class="form-control perk rank" id="' + noSpaceName + 'Value" value="0" min="0" max="1">' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Power Source:</span></div>' +
            '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
            '<option></option>' +
            '</select>' +
            '</div>' +
            '<div class="input-group hide">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
            '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
            '<option value="0"></option>' +
            '</select>' +
            '<div class="input-group-append">' +
            '<button class="btn btn-outline-secondary d-none d-sm-block"type="button" onclick="clearProsCons();" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
            '</div>' +
            '</div>';

                /* '<div class="input-group mt-3">' +
                '<div class="input-group-prepend w186">' +
                '<span class="input-group-text w186">' + perks[i].name + '</span>' +
                '<span class="input-group-text spend" id="' + noSpaceName + 'Spend">0</span></div>' +
                '<input type="number" class="form-control perk rank" id="' + noSpaceName + 'Value" value="0" min="0" max="1">' +
                '<div class="input-group-append">' + '<span class="input-group-text cost" id="' + noSpaceName + 'Cost"> ' + perks[i].cost + '</span>' +
                '</div></div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Power Source:</span></div>' +
                '<select class="custom-select powersource" id="' + noSpaceName + 'PowerSource">' +
                '<option></option>' +
                '</select>' +
                '</div>' +
                '<div class="input-group hide">' +
                '<div class="input-group-prepend">' +
                '<span class="input-group-text w-100">Pros/Cons:</span></div>' +
                '<select multiple class="custom-select pcs" id="' + noSpaceName + 'PCs">' +
                '<option value="0"></option>' +
                '</select>' +
                '<div class="input-group-append">' +
                '<button class="btn btn-outline-secondary d-none d-sm-block" type="button" id="' + noSpaceName + 'ClearSelected">Clear Selected</button>' +
                '</div>' +
                '</div>'; */
            for (let j = 0; j < prosCons.length; j++) {
                let dropdown = document.getElementById(noSpaceName + 'PCs');
                if (prosCons[j].tpp == perks[i].name) {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
                    dropdown.add(option);
                }
                if (prosCons[j].tpp == 'tpp') {
                    option = document.createElement('option');
                    option.text = prosCons[j].name + ' (' + prosCons[j].cost + ')';
                    option.value = prosCons[j].cost;
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
        //document.getElementById('gameTierMax').innerHTML = "";

        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++) {
            ranks[i].innerHTML = "";
        }
        heroDicePool = "";
    }
    else {
        document.getElementById('gameTierHD').innerHTML = powerLevels[levels[x]].hd;
        //document.getElementById('gameTierMax').innerHTML = powerLevels[levels[x]].maxRank;

        let ranks = document.getElementsByClassName('maxRank')
        for (let i = 0; i < ranks.length; i++) {
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

function setSpend() {
    //loop for traits
    let selectTraits = document.querySelectorAll('.trait');
    for (i = 0; i < selectTraits.length; i++) {
        let noSpaceName = traits[i].name.replace(/\s+/g, '');
        let currentRank = parseInt(selectTraits[i].value);
        traits[i].rank = currentRank - 2;
        let pcSelect = document.getElementById(noSpaceName + 'PCs');
        let pcSpend = 0;
        for (j = 0; j < pcSelect.length; j++) {
            opt = pcSelect.options[j];
            if (opt.selected === true) {
                pcSpend += parseInt(opt.value);
            }
        }
        document.getElementById(noSpaceName + 'Spend').innerHTML = traits[i].rank + pcSpend;
    }

    //loop for powers
    let selectPowers = document.querySelectorAll('.power');
    for (i = 0; i < selectPowers.length; i++) {
        let noSpaceName = powers[i].name.replace(/\s+/g, '');
        let pcSelect = document.getElementById(noSpaceName + 'PCs');
        let currentRank = parseInt(selectPowers[i].value);
        if (powers[i].strong === true) {
            powers[i].rank = Math.trunc(currentRank * 2);
        }
        else {
            powers[i].rank = currentRank;
        }
        let pcSpend = 0;
        for (j = 0; j < pcSelect.length; j++) {
            opt = pcSelect.options[j];
            if (opt.selected === true) {
                pcSpend += parseInt(opt.value);
            }
        }
        document.getElementById(noSpaceName + 'Spend').innerHTML = powers[i].rank + pcSpend;
    }
    //loop for perks
    let selectperks = document.querySelectorAll('.perk');
    for (i = 0; i < selectperks.length; i++) {
        let noSpaceName = perks[i].name.replace(/\s+/g, '');
        let pcSelect = document.getElementById(noSpaceName + 'PCs');
        let currentRank = parseInt(selectperks[i].value);
        perks[i].rank = currentRank;
        let pcSpend = 0;
        for (j = 0; j < pcSelect.length; j++) {
            opt = pcSelect.options[j];
            if (opt.selected === true) {
                pcSpend += parseInt(opt.value);
            }
        }
        document.getElementById(noSpaceName + 'Spend').innerHTML = perks[i].cost * perks[i].rank + pcSpend;
    }
}

const tier = document.getElementById('gameTierSelect');
tier.addEventListener('change', heroDice);

const form = document.getElementById('form');
form.addEventListener('change', weakAttribute);
form.addEventListener('change', setSpend);
form.addEventListener('change', tallyHD);
form.addEventListener('change', advancement);
form.addEventListener('change', showPowerSource);
form.addEventListener('change', showProsCons);

const body = document.querySelector('body');
body.addEventListener('keyup', checkTabPress);

populateForm();
populateDropdown();
tallyHD();
showProsCons();
populatePowerSource();