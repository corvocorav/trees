// TREES SETTINGS
let numOfTrees = parseInt(document.getElementsByClassName("numOfTrees")[0].value);
let trees = [];

setTimeout(() => {plant(numOfTrees); }, 100);

function randomizeTrees() 
{

  setTimeout(() => {

    //also replace the 10 here
    animateTrees(window.windSpeed);
  
  }, 100);


  let trees = document.querySelectorAll(".tree");

  
    for (i = 0; i < trees.length ;i ++) 
    {   
       trees[i].remove();

    }

    
   plant(document.getElementsByClassName("numOfTrees")[0].value);
        
        setTimeout(() =>{colorizeTrees();}, 100);
        
}

let  rgb = document.querySelector("#colorizeInput").value;


function colorizeTrees() 
{        

    rgb = document.querySelector("#colorizeInput").value;
     trees = document.querySelectorAll(".tree");
  console.log(trees);
     if (rgb != "") 
     {
      for (i = 0; i < trees.length ;i ++) 
      {  
        trees[i].style.borderBottom =
        trees[i].style.borderBottomWidth + " solid " + rgb;    
      }        
     }
  
}



//animate trees 

setTimeout(() => {
  animateTrees(9);
}, 100);

function animateTrees_()
{
  //this is made cus i cant add a varriable inside () from html
  //this functions call real animate trees function
  animateTrees(window.windSpeed)
  //replace the 10 later
}
function animateTrees(windSpeed)
{

  let canAnimateTrees;


  let animateButton = document.querySelector('#animateTreesInput');

  console.log("windspeed is : " + window.windSpeed);

  if (animateButton.checked) 
  {
    console.log("yes");  
    canAnimateTrees = true;

  }
  else
  {
    console.log("no");
    canAnimateTrees = false; 
 
  }


  if (canAnimateTrees == true) 
  {
     
  trees = document.querySelectorAll(".tree");
  let tree;
  let rotation;
  let positiveRotation;
    for (i = 0; i < numOfTrees ;i ++) 
    {
    
      tree = trees[i];

      if (windSpeed >= 20) 
      {
        rotation = Math.floor(Math.random() *  (windSpeed* -2)) /*- 10*/;
        rotation += 10;

       positiveRotation = Math.floor(Math.random() * 10)

      }
      else if (windSpeed < 20 && windSpeed >= 10) 
      {
        rotation = Math.floor(Math.random() *  (windSpeed* -2));
        rotation += 8;

       positiveRotation = Math.floor(Math.random() * 4)

      }
      else
      {
        rotation = Math.floor(Math.random() *  (windSpeed * - 1));
        rotation += 1;
        console.log("haha");
        positiveRotation = Math.floor(Math.random() * 0)

      }
     

        tree.animate([
          // keyframes
         { transform: 'rotate(' +rotation +'deg)' },
         { transform: 'rotate('+ positiveRotation +'deg)' },
         { transform: 'rotate(' +rotation +'deg)' }
    
        ], { 
          // timing options
          duration: Math.floor(Math.random() * 2400) + 1500,// Math.floor(Math.random() * 2000) + 1400,
          iterations: Infinity  ,
        
        });

   


    

    }     
  }  
   
}



var cityInput = document.getElementsByClassName('searchBar')[0]; // get the input element
cityInput.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(cityInput); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}