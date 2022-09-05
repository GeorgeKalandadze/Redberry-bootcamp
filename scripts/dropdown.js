window.addEventListener("load", () => {
  getLaptopBrands();
  getLaptopCpus()

})

document.querySelectorAll('.dropdown > h2').forEach((list) => {
    //adding actived class onClick of dropdown list
    list.addEventListener('click', (e) => {
      console.log(e.target.nextElementSibling);
      //click event
      if (e.target.nextElementSibling == null) {
        
        //checking if element with image is clicked in player option
        e.target.parentElement.nextElementSibling.classList.toggle('actived');
      } else {
        e.target.nextElementSibling.classList.toggle('actived'); //adding class to dropdown ul element
      }
      e.target.classList.toggle('arrow'); // adding class to dropdown h2 element
    });
  });



/***================second API metho================***/

/*const getTeamApi = async () => {
  const response = await fetch("https://pcfy.redberryinternship.ge/api/teams");
  const teamData = await response.json();
  const arrayOfTeamData = teamData.data;
  const teamsContainer = document.querySelector(".first-dropdown-options");
  arrayOfTeamData.forEach((team) => {
    teamsContainer.innerHTML += `<li id="${team.id}">${team.name}</li>`
  });
  const allOptions = document.querySelectorAll(".first-dropdown-options  li");
    const team = document.getElementById("team")
    allOptions.forEach((item) => {
      item.addEventListener("click", (e) => {
        team.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('team').classList.remove('arrow');
      })
    });
}

getTeamApi().then(()=>{
  fetch("https://pcfy.redberryinternship.ge/api/positions")
  .then(response => response.json())
  .then(positionData => {
    const arrayOfTeamData = positionData.data
    const allOptions = document.querySelectorAll(".first-dropdown-options  li");
    allOptions.forEach((option) => {
    
    option.addEventListener("click", e => {
      const positionsContainer = document.querySelector(".second-dropdown-options");
      arrayOfTeamData.forEach((pos) => {
        if(e.target.id == pos.team_id){
          
          positionsContainer.innerHTML += `<li id="${pos.id}">${pos.name}</li>`
        }
      })
    
      const allOptions2 = document.querySelectorAll(".second-dropdown-options  li");
      const pos = document.getElementById("position");
      allOptions2.forEach((item) => {
      item.addEventListener("click", (e) => {
        pos.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('position').classList.remove('arrow');
      })
    });
    })
  });
  })
}
);*/


const getTeamApi = async () => {
  const response = await fetch("https://pcfy.redberryinternship.ge/api/teams");
  const teamData = await response.json();
  const arrayOfTeamData = teamData.data;
  const teamsContainer = document.querySelector(".first-dropdown-options");
  arrayOfTeamData.forEach((team) => {
    teamsContainer.innerHTML += `<li id="${team.id}">${team.name}</li>`
  });
  const allOptions = document.querySelectorAll(".first-dropdown-options  li");
    const team = document.getElementById("team")
    allOptions.forEach((item) => {
      item.addEventListener("click", (e) => {
        team.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('team').classList.remove('arrow');
      })
    });
}


const getPosition = async () => {
  const response = await fetch("https://pcfy.redberryinternship.ge/api/positions");
  const positionData = await response.json();
  const arrayOfTeamData = positionData.data;
  const positionsContainer = document.querySelector(".second-dropdown-options");
  
  arrayOfTeamData.forEach((pos) => {
    positionsContainer.innerHTML += `<li id="${pos.id}">${pos.name}</li>`
  });
  const allOptions2 = document.querySelectorAll(".second-dropdown-options  li");
      const pos = document.getElementById("position");
      allOptions2.forEach((item) => {
      item.addEventListener("click", (e) => {
        pos.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('position').classList.remove('arrow');
      })
    });
  
  
  
}

getTeamApi().then(()=>{


  getPosition()
})






//second dropdown

const getLaptopBrands = async () => {
  const response = await fetch("https://pcfy.redberryinternship.ge/api/brands");
  const laptopData = await response.json();
  const arrayOfLaptopData = laptopData.data;
  const laptopsContainer = document.querySelector(".third-dropdown-options");
  arrayOfLaptopData.forEach((laptop) => {
    laptopsContainer.innerHTML += `<li id="${laptop.id}">${laptop.name}</li>`
  });
  const allOptions = document.querySelectorAll(".third-dropdown-options  li");
    const laptop = document.getElementById("laptop-brand")
    allOptions.forEach((item) => {
      item.addEventListener("click", (e) => {
        laptop.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('laptop-brand').classList.remove('arrow');
      });
    });
}



const getLaptopCpus = async () => {
  const response = await fetch("https://pcfy.redberryinternship.ge/api/cpus");
  const cpuData = await response.json();
  const arrayOfCpuData = cpuData.data;
  const cpusContainer = document.querySelector(".fourth-dropdown-options");
  arrayOfCpuData.forEach((cpu) => {
    cpusContainer.innerHTML += `<li id="${cpu.id}">${cpu.name}</li>`
  });
  const allOptions = document.querySelectorAll(".fourth-dropdown-options  li");
    const cpu = document.getElementById("cpu");
    allOptions.forEach((item) => {
      item.addEventListener("click", (e) => {
        cpu.textContent = item.textContent
        e.target.parentElement.classList.remove('actived');
        document.getElementById('cpu').classList.remove('arrow');
      });
    });
}




