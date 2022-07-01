let density = window.Clouds;
let cloudsArray = [];
let cloudSpeeds = [];
function deleteClouds() 
{
    let clouds = document.querySelectorAll(".cloud");
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].remove();
        
    }
}

function clouds() 
{
    
    let cloudArea = document.querySelector("#scene");
    
    cloudNum = window.Clouds / 4; //make this a input
    //document.getElementById("scene").appendChild(cloudArea)
    if (cloudsEnabled) 
    {
        for (cloudNum; cloudNum > 0; cloudNum--) 
        {   
        
            
            let cloud = document.createElement("div");
            cloudArea.appendChild(cloud);

            
            cloudsArray.push(cloud);

            //console.log("cloudsArray: " + cloudsArray);
            
            cloud.className = "cloud";
            cloud.style.zIndex = "1000"
            
            let leftPos = Math.floor(Math.random() * 100) + 105;
            let topPos = Math.floor(Math.random() * 30); 
        
            let cloudWidth = Math.floor(Math.random() * 100) + 20;
            let cloudHeight = Math.floor(Math.random() * 25) + 5;
    
            cloud.style.left = String(leftPos) + "%";
            cloud.style.top =  String(topPos) + "%";
        
            cloud.style.width = String(cloudWidth) + "px";
            cloud.style.height = String(cloudHeight) + "px";
        
        
            
            //random cloud speed which is transition time 
            let cloudSpeed = (150 + (Math.floor(Math.random() * windSpeed)) * -5);
            //let cloudSpeed =  Math.floor(Math.random() * 200) + 10;
            cloudSpeeds.push(cloudSpeed);
           // console.log("cloudSpeed: " + cloudSpeed);
            
            
          
        
            
        } 
    

        
    }

    setTimeout(() => {
        pushClouds();
        vanishClouds()
    }, 100);

}


function vanishClouds() {
    window.cloudss = document.querySelectorAll(".cloud");
    for (let i = 0; i < cloudss.length; i++) 
    {

        var rect = cloudss[i].getBoundingClientRect();
        if (rect.left <= 0) 
        {
            cloudss[i].remove();    
        }
    }

}




function pushClouds() 
{
   // console.log(cloudSpeeds);
   for (let i = 0; i < cloudsArray.length; i++) 
   {
       cloudsArray[i].style.transition = "transform " + String(cloudSpeeds[i]) + "s linear"; 
       cloudsArray[i].style.transform = "translate("+ String((window.screen.width)* -10) +"px)";
   }
}


let cloudsEnabled = true;



function callClouds() {
    let interval = (window.windSpeed / 2) * 1000;
    console.log("interval: " + interval);


    setTimeout(function () {
        clouds();
        callClouds();
    }, interval);

};
callClouds();


let enableInput = document.querySelector("#enableCloudsInput");

function enableClouds()
{

    if (cloudsEnabled == false) 
    {
        cloudsEnabled = true;

        clouds();
        setTimeout(() => {
            pushClouds();
        }, 100);
    }
    else
    {
        cloudsEnabled = false;

        deleteClouds();
    }
}