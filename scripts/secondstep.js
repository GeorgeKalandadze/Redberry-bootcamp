const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener('click', (e) => {
  //validating second step and submitting
  validateStep();
  if(isFormValid() == true){
    
  }else{
    e.preventDefault()
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



function validateStep(){
  //drop down variables
    const thirdDropdownHeader = document.getElementById('laptop-brand');
    const fourthdDropdownHeader = document.getElementById('cpu');
    const thirdDropdownOptions = document.querySelectorAll('.third-dropdown-options  li');
    const fourthDropdownOptions = document.querySelectorAll('.fourth-dropdown-options  li');
  //radio input variables
    const memoryType = document.getElementById("memory-type");
    const ssd = document.getElementById("ssd");
    const hdd = document.getElementById("hdd");

    const laptopCondition = document.getElementById("laptop-condition");
    const newLaptop = document.getElementById("newLaptop");
    const oldLaptop = document.getElementById("oldLaptop");


    const inputs = document.querySelectorAll(".input");
    
    inputs.forEach((input) => {
        if(input.name == "laptop-name" ){
          laptopNameValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        if(input.name == "cpu-stream" ){
          numberValidation(input,input.nextElementSibling,input.previousElementSibling)

        } 
        if(input.name == "laptop-ram"){
          numberValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        if(input.name == "cpu-core"){
          numberValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        if(input.name == "price"){
          numberValidation(input,input.nextElementSibling,input.previousElementSibling)
        }
        
    });

  let isSelectedthree = false;
    for (let i = 0; i < thirdDropdownOptions.length; i++) {
      //checking if user choose difficulty level
      if (thirdDropdownOptions[i].textContent == thirdDropdownHeader.textContent) {
        isSelectedthree = true; // if we have selected one breaking loop
        break;
      }
    }
    
    //checking if option is selected
    if (!isSelectedthree) {
      thirdDropdownHeader.classList.add("error")
    }else{
      thirdDropdownHeader.classList.remove("error")
    }
  
    let isSelectedfour = false;
    for (let i = 0; i < fourthDropdownOptions.length; i++) {
      //checking if user choose difficulty level
      if (fourthDropdownOptions[i].textContent == fourthdDropdownHeader.textContent) {
        isSelectedfour = true; // if we have selected one breaking loop
        break;
      }
    }
  
    //checking if option is selected
    if (!isSelectedfour) {
      fourthdDropdownHeader.classList.add("error")
    } else {
      fourthdDropdownHeader.classList.remove("error")
    }



    if(ssd.checked == false && hdd.checked == false){
      memoryType.classList.add("error");
    }else{
      memoryType.classList.remove("error");
    }

    if(newLaptop.checked == false && oldLaptop.checked == false){
      laptopCondition.classList.add("error");
    }else{
      laptopCondition.classList.remove("error");
    }

    
}


//laptop brand name validation

function laptopNameValidation(input,notice,notice2) {

    if (input.value.length < 2 || !input.value.match(/^[a-zA-Z0-9!@#$%^&*()_+=]*$/)) {
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
  
  
  
  
  //number validation for cpu stream, ram and cpu core
function numberValidation(input,notice,notice2) {
  
    if (input.value.length < 2 || !input.value.match(/^[0-9]*$/)) {
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


  
  
  