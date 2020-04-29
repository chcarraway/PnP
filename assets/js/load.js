function getLocalStorage(){
    for(var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
    }
}

function populateCharacters(){
    let dropdown = document.getElementById('characterSelect');
}