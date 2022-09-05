

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


function saveSessionData() {
// saving dropdown default options at start
if (sessionStorage.getItem('team') === null) {
    sessionStorage.setItem('team', 'თიმი');
    }
if (sessionStorage.getItem('position') === null) {
      sessionStorage.setItem('position', 'პოზიცია');
    }
}

function loadData(){
    document.getElementById('name').value = sessionStorage.getItem('name');
    document.getElementById('lastname').value = sessionStorage.getItem('lastname');
    document.getElementById('email').value = sessionStorage.getItem('email');
    document.getElementById('phone').value = sessionStorage.getItem('phone');
    document.getElementById('team').innerHTML = sessionStorage.getItem('team');
    document.getElementById('position').innerHTML = sessionStorage.getItem('position');

    
}

saveSessionData();
loadData();





