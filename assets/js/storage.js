var items = document.getElementsByClassName('storeMe'); //elements that we care about

form.addEventListener('submit', submitForm);
function submitForm(event) {

    // Don't submit the form
    event.preventDefault();
    submitFormNext();
}

function submitFormNext() {
    //store player-set values
    var character = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].tagName === 'SELECT'){
            //console.log($('#flaws option:selected').map(function(a, item){return item.value;}))
            character[i] = {
                name: items[i].id,
                value: $('#' + items[i].id +' option:selected').map(function(a, item){return item.value;}),
                //value: document.querySelectorAll('#' + items[i].id + " option:selected").map(function(a, item){return item.value;}),
            }
        }
        else {
            character[i] = {
                name: items[i].id,
                value: items[i].value
            };
        }
    }
    console.log(JSON.stringify(character));
    //localStorage.setItem(itemKey, itemValue);
}
