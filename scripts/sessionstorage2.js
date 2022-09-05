function saveValue(e) {
    let id = e.id; // get the sender's id to save it .
    let val = e.value; // get the value.
    sessionStorage.setItem(id, val); // Every time user writing something, the localStorage's value will override .
}

function saveDropdownValue(e) {
    let id = e.firstElementChild.id;
    let val = e.firstElementChild.textContent;
    sessionStorage.setItem(id, val);
    //if we are on second dropdown options we need to take save id as well
}

function saveSessionData(){
    // saving dropdown default options at start
    if (sessionStorage.getItem('laptop-brand') === null) {
    sessionStorage.setItem('laptop-brand', 'ლეპტოპის ბრენდი');
        }
    if (sessionStorage.getItem('cpu') === null) {
        sessionStorage.setItem('cpu', 'CPU');
        }
}


/** function which checks radion inputs **/
function checkRadioInput() {
    document.getElementsByName("memory-type").forEach((e) => {
      sessionStorage.setItem(e.value, e.checked);
    });
}

function checkRadioInput2() {
    document.getElementsByName("laptop-condition").forEach((e) => {
      sessionStorage.setItem(e.value, e.checked);
    });
}



function loadData2(){
    //save input values after refresh
    document.getElementById('laptop-name').value = sessionStorage.getItem('laptop-name');
    document.getElementById('cpu-stream').value = sessionStorage.getItem('cpu-stream');
    document.getElementById('laptop-ram').value = sessionStorage.getItem('laptop-ram');
    document.getElementById('cpu-core').value = sessionStorage.getItem('cpu-core');
    document.getElementById('price').value = sessionStorage.getItem('price');
    //save dropdown values after refresh
    document.getElementById('laptop-brand').innerHTML = sessionStorage.getItem('laptop-brand');
    document.getElementById('cpu').innerHTML = sessionStorage.getItem('cpu');
    //save radio inputs values after refresh
    document.getElementById('ssd').checked = JSON.parse(sessionStorage.getItem('ssd'));
    document.getElementById('hdd').checked = JSON.parse(sessionStorage.getItem('hdd'));
    document.getElementById('newLaptop').checked = JSON.parse(sessionStorage.getItem('ახალი'));
    document.getElementById('oldLaptop').checked = JSON.parse(sessionStorage.getItem('ძველი'));
}

//call functions
saveSessionData();
loadData2();
