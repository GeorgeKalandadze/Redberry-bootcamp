const fileInput = document.querySelector(".file-input");
const chooseImgeBtn = document.querySelector(".choose-image-btn");
const imageInputContainer = document.querySelector(".image-input-container");
var uploadImage = "" ;

fileInput.addEventListener("change", function(){

    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadImage = reader.result;
        imageInputContainer.innerHTML = `<img src="${uploadImage}" style="width: 100%; height: 100%; border-radius: 18px;z-index: 5;">`;
        sessionStorage.setItem("laptop-image", uploadImage);
    });
    reader.readAsDataURL(this.files[0]);

    
})


chooseImgeBtn.addEventListener("click", () => fileInput.click());