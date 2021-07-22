/*function getSpawnLocation() 
{

  spawnLocations = [];
  spawnLocations.push()
  
}
*/

 window.trees = [];

function plant(numOfTrees)
{
    let SAs = [];
    
   SAs.push(document.querySelector("#_1")); 
   SAs.push(document.querySelector("#_2")); 
   SAs.push(document.querySelector("#_3")); 
   SAs.push(document.querySelector("#_4")); 
   SAs.push(document.querySelector("#_5")); 

   SAs.push(document.querySelector("#_6")); 
   SAs.push(document.querySelector("#_7")); 
   SAs.push(document.querySelector("#_8")); 
   SAs.push(document.querySelector("#_8")); 
   SAs.push(document.querySelector("#_8")); 
   SAs.push(document.querySelector("#_8")); 

   SAs.push(document.querySelector("#_9")); 
   SAs.push(document.querySelector("#_10")); 
   SAs.push(document.querySelector("#_11")); 
   SAs.push(document.querySelector("#_12")); 

   SAs.push(document.querySelector("#_13")); 
   SAs.push(document.querySelector("#_13")); 

   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 
   SAs.push(document.querySelector("#_14")); 


   SAs.push(document.querySelector("#_15")); 
   SAs.push(document.querySelector("#_15")); 

   SAs.push(document.querySelector("#_16")); 

 // SAs.push(document.querySelector("#_8_2")); 
 // SAs.push(document.querySelector("#_8_2")); 
  SAs.push(document.querySelector("#_8_2")); 
  SAs.push(document.querySelector("#_8_2")); 

  


  // now i need to make it execiute once for every spawn loacation(multiple areas )
   
    for (numOfTrees; numOfTrees > 0; numOfTrees--) 
    {

        //choose a random spawn area from the array
        let arrayNum = Math.floor(Math.random() * SAs.length);


        //create a div (will be the tree ) and give it a class 
        let palm = document.createElement("div");
        palm.className = "tree";

        //add new tree to array
        window.trees.push(palm);

        //randomize the lacation of tree withing the spwn area 
        let leftPos = Math.floor(Math.random() * 100) - 5;
        let bottomPos = Math.floor(Math.random() *  + 90) -20;  
        palm.style.left = String(leftPos) + "%";
        palm.style.bottom =  String(bottomPos) + "%";


        //randomise tree size 
        palm.style.borderBottomWidth = Math.floor(Math.random() * 50 + 70) + "px";
        let treeWidth = Math.floor(Math.random() * 25 + 20);
        palm.style.borderLeftWidth = treeWidth + "px";
        palm.style.borderRightWidth = treeWidth + "px";

       //change tree color a bit randomy so it looks better 
       let colorOffset = Math.floor(Math.random() * 60 ) + 25;
       palm.style.webkitFilter = "brightness(" + colorOffset + "%)"; 


       //assing the tree the the picked spawn area from the array 
        SAs[arrayNum].appendChild(palm);

   
        

        //create a var that will house the bottom values as integers
       let treesBottomInt = parseInt(palm.style.bottom.slice(0, -1)); 
       let treesBottomIntInverted = treesBottomInt * -1 + 1000;
        

        switch (arrayNum) {
 
      case 0:  treesBottomIntInverted += 400;  break;
      case 1:  treesBottomIntInverted += 350;  break;
      case 2:  treesBottomIntInverted += 300;  break;
      case 3:  treesBottomIntInverted += 350;  break;
      case 4:  treesBottomIntInverted += 400;  break;
      case 5:  treesBottomIntInverted += 200;  break;
      case 6:  treesBottomIntInverted += 100;  break;

      case 7:  treesBottomIntInverted -= 200;  break;
      case 8:  treesBottomIntInverted -= 200;  break;
      case 9:  treesBottomIntInverted -= 200;  break;
      case 10: treesBottomIntInverted -= 200;  break;

      case 11: treesBottomIntInverted += 200;  break;
      case 12: treesBottomIntInverted += 200;  break;
      case 13: treesBottomIntInverted += 300;  break;
      case 14: treesBottomIntInverted += 400;  break;
      case 15: treesBottomIntInverted += 300;  break;
      case 16: treesBottomIntInverted += 300;  break;
      case 17: treesBottomIntInverted += 200;  break;
      case 18: treesBottomIntInverted += 200;  break;
      case 19: treesBottomIntInverted += 200;  break;
      case 20: treesBottomIntInverted += 200;  break;
      case 21: treesBottomIntInverted += 200;  break;
      case 22: treesBottomIntInverted += 200;  break;
      case 23: treesBottomIntInverted += 200;  break;
      case 24: treesBottomIntInverted += 300;  break;
      case 25: treesBottomIntInverted += 300;  break;
      case 26: treesBottomIntInverted += 400;  break;
      case 27: treesBottomIntInverted += 900;  break;
      case 28: treesBottomIntInverted += 900;  break;
      case 29: treesBottomIntInverted += 900;  break;
     // case 23: treesBottomIntInverted += 300;  break;





        }

        //and assing the z value the lower the tree the higher(to appear closer)
        palm.style.zIndex = String(treesBottomIntInverted);  

    }
}

function whatSpeed() 
{
 // console.log(window.windSpeed);  
}

// set brightness of the trees and tha land  and mountain so it wont get darker with each search
let treeBrightnesses = [];
setTimeout(() => {
  trees = document.querySelectorAll(".tree");
  for (i = 0;i < trees.length; i++) 
  {
    let tree = trees[i]; 
    filterArray = tree.style.filter.split(/([0-9]+)/);
    treeBrightnesses.push(filterArray[1]);
  }
}, 200);

function darkenTreesAndLnad(treeBrightness) 
{
  
  //treeBrightness(also land brightness) will be a percantage of orginal brightness 
  trees = document.querySelectorAll(".tree");

  for (i = 0;i < trees.length; i++) 
  {
    let tree = trees[i];
    filterArray = tree.style.filter.split(/([0-9]+)/)
   // console.log(tree.style.filter);
   // console.log(parseInt(filterArray[1]));

 
    
    tree.style.filter = "brightness(" + String((treeBrightness * treeBrightnesses[i]) / 100) +"%)"
  }
  lands = document.querySelectorAll(".spawnLocation");
  for (let i = 0; i < lands.length; i++) 
  {
    lands[i].style.filter = "brightness("+ treeBrightness +"%)"  
  }

  document.querySelector(".mountain").style.filter = "brightness("+ (treeBrightness - (treeBrightness/2)) + "%)";

}
//plant(200);
/*
￣￣￣￣￣￣ |
|  IS THE   |
|   BUNNY   | 
| A PROTEST |
|   SYMBOL  | 
| ＿＿＿＿___| 
(\__/) || 
(•ㅅ•) || 
/ 　 づ
*/