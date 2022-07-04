let scene = document.getElementById("scene").style;
let leftBorder = document.getElementById("leftBorder").style
let rightBorder = document.getElementById("rightBorder").style
let topBorder = document.getElementById("topBorder").style
let bottomBorder = document.getElementById("bottomBorder").style


function b() {

    //scene.width =  window.innerWidth / 2 + "px"
    //scene.height = window.innerWidth / 2 + "px"
    scene.width =  window.innerHeight / 2 + "px"
    scene.height = window.innerHeight / 2 + "px"

    document.getElementById("view").style.height = window.innerHeight / 2 + "px"
    document.getElementsByClassName("border_Hor")[0].style.width = (window.innerWidth - parseInt(scene.width)) / 2 + "px"
    document.getElementsByClassName("border_Hor")[1].style.width = (window.innerWidth - parseInt(scene.width)) / 2 + "px"
    document.getElementsByClassName("wrapper")[0].style.height = window.innerHeight / 5 + "px"

    document.getElementsByClassName("border_Ver")[0].style.height = window.innerHeight / 6 / 2 + "px"
    document.getElementsByClassName("border_Ver")[1].style.height = window.innerHeight / 6 +  
    window.innerHeight / 6 / 2
    + "px"

    /*console.log(
      window.innerHeight - parseInt(scene.height) - document.getElementById("vi")
    )*/
    
}
function d_() 
{
  
}
function b2(dam) 
{

  scene.width = dam + "px"
  scene.height = dam + "px"
  document.getElementById("view").style.height = dam + "px"
  document.getElementsByClassName("border_Hor")[0].style.width = window.innerWidth/2 + "px"
  document.getElementsByClassName("border_Hor")[1].style.width = window.innerWidth/2 + "px"
  

 
}
 

function c() 
{
  //create a div with the class "settingsContainer"
  let settingsContainer = document.createElement("div");
  settingsContainer.className = "settingsContainer";
  //append container to body
  document.body.appendChild(settingsContainer);
  settingsContainer.appendChild(document.querySelector(".card"))
  settingsContainer.appendChild(document.querySelector(".searchCard"))
  settingsContainer.appendChild(document.querySelector(".hideComment"))
  settingsContainer.appendChild(document.querySelector(".HIDEandINFO"))
  settingsContainer.appendChild(document.querySelector(".menuCard"))

  
}


setInterval(() => {
  //clear console
  console.clear();
}, 1800);