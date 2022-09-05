const form = document.querySelector("form");

//error variables
form.addEventListener("submit", e => {
  validateStep();
  validateStep2();
  if(isFormValid() == true){
      form.submit()
  }else{
      e.preventDefault();
  }
});




function isFormValid(){
  const inputGroups = document.querySelectorAll(".input-error");
  let result = true;
  inputGroups.forEach((group) => {
      if(group.classList.contains("error")){
          result = false;
      }
  });
  return result
}


//form input validation
function validateStep(){
    const inputs = document.querySelectorAll(".input");
    inputs.forEach((input) => {
        
        if(input.name == "name" ){
            nameValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        if(input.name == "lastname" ){
            nameValidation(input,input.nextElementSibling,input.previousElementSibling)

        }
        if(input.name == "email"){
            emailValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        if(input.name == "phone"){
            phoneValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        
        
    });

    
}


//name validation
function nameValidation(input,notice,notice2) {
  
    if (input.value.length < 2 || !input.value.match(/^[ა-ჰ]*$/)) {
      notice2.classList.add("text-error");
      notice.classList.add("text-error");
      input.classList.add('error');
      input.classList.remove('succes');
      return false;
      // errorPopUp(input.name);
    } else {
      notice2.classList.remove("text-error");
      notice.classList.remove('text-error');
      input.classList.remove('error');
      input.classList.add('succes');
      return true;
      // removePopUp(input.name);
    }
  }


//email validation

function emailValidation(input,notice,notice2) {
    if (!ValidateEmailAddress(input)) {
      notice2.classList.add("text-error");
      notice.classList.add("text-error");
      input.classList.add('error');
      input.classList.remove('succes2');
      return false;
      // errorPopUp(input.name + ' address');
    } else {
      notice2.classList.remove('text-error');
      notice.classList.remove('text-error');
      input.classList.remove('error');
      input.classList.add('succes2');
      return true;
      // removePopUp(input.name + ' address');
    }
}

function ValidateEmailAddress(input) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@redberry.ge\s*$/;
    if (input.value.match(validRegex)){
      return true;
    } else {
      return false;
    }
}


//phone validation

function phoneValidation(input,notice,notice2) {
    if (!input.value.match(/^5\d{8}$/)) {
      notice.classList.add("text-error");
      notice2.classList.add("text-error");
      input.classList.add('error');
      input.classList.remove('succes2');
      return false;
      // errorPopUp(input.name + ' number');
    } else {
      notice.classList.remove("text-error");
      notice2.classList.remove("text-error");
      input.classList.remove('error');
      input.classList.add('succes2');
      return true;
      // removePopUp(input.name + ' number');
    }
}




/**============dropdown validation==============**/

function validateStep2(){
  const firstDropdownHeader = document.getElementById('team');
  const secondDropdownHeader = document.getElementById('position');
  const firstDropdownOptions = document.querySelectorAll('.first-dropdown-options  li');
  const secondDropdownOptions = document.querySelectorAll('.second-dropdown-options  li');
  

  //question elements
  

  //knowledge
  let isSelected = false;
  for (let i = 0; i < firstDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (firstDropdownOptions[i].textContent == firstDropdownHeader.textContent) {
      isSelected = true; // if we have selected one breaking loop
      break;
    }
  }
  
  //checking if option is selected
  if (!isSelected) {
    firstDropdownHeader.classList.add("error")
  }else{
    firstDropdownHeader.classList.remove("error")
  }

  let isSelectedTwo = false;
  for (let i = 0; i < secondDropdownOptions.length; i++) {
    //checking if user choose difficulty level
    if (secondDropdownOptions[i].textContent == secondDropdownHeader.textContent) {
      isSelectedTwo = true; // if we have selected one breaking loop
      break;
    }
  }

  //checking if option is selected
  if (!isSelectedTwo) {
    secondDropdownHeader.classList.add("error")
  } else {
    secondDropdownHeader.classList.remove("error")
  }

  
}















