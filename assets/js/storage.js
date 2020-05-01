form.addEventListener('submit', submitForm);
function submitForm(event) {

    // Don't submit the form
    event.preventDefault();
    submitFormNext();
}

function submitFormNext() {
    var saveData = {};
    document.querySelectorAll("input, select").forEach((item, i) => {
        if (item.id != "") {
            var name = item.id;
            if (item.tagName == 'INPUT') {
                saveData[name] = item.value;
                //console.log(item.id + " : " + item.value)
            } else {
                var options = [];
                item.querySelectorAll("option:checked").forEach((item, j) => {
                    if (item.label != "") {
                        options.push(item.label)
                    }
                })
                saveData[name] = options;
                //console.log(item.id + " : " + options);
            }
        }
    })
    localStorage.setItem('SaveData_' + saveData.characterName, JSON.stringify(saveData));
    submitFormNextAgain();
}

function submitFormNextAgain(){
    location.href('sheet.html')
}