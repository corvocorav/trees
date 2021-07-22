let density = window.Clouds;
let cloudsArray = [];
let cloudSpeeds = [];
let cloudBrightness = 100;

function deleteClouds() 
{
    let clouds = document.querySelectorAll(".cloud");
    for (let i = 0; i < clouds.length; i++) {
        clouds[i].remove();
        
    }
}

function clouds() 
{
    console.trace();
   
    if (cloudsEnabled) 
    {
    
        for (window.Clouds; window.Clouds > 0; window.Clouds--) 
        {   
        
            let cloudArea = document.querySelector(".cloudArea");
            let cloud = document.createElement("div");
        
            cloudsArray.push(cloud);
        
            cloud.className = "cloud";
        
            
            let leftPos = Math.floor(Math.random() * 100) + 120;
            let topPos = Math.floor(Math.random() * 100); 
        
            let cloudWidth = Math.floor(Math.random() * 300) + 80;
            let cloudHeight = Math.floor(Math.random() * 75) + 30;
        
            cloud.style.left = String(leftPos) + "%";
            cloud.style.top =  String(topPos) + "%";
        
            cloud.style.width = String(cloudWidth) + "px";
            cloud.style.height = String(cloudHeight) + "px";
        
        
            cloudArea.appendChild(cloud);
        
            //random cloud speed which is transition time 
            let cloudSpeed =  Math.floor(Math.random() * 200) + 10;
            cloudSpeeds.push(cloudSpeed);
            // set brightness of cloud
            cloud.style.filter = "blur(12px) brightness(" +cloudBrightness+"%)";
        
            
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



setInterval(() => 
{
    clouds();
    setTimeout(() => 
    {
        pushClouds();
    }, 100);

}, 18000);

function searchClouds() 
{
    clouds();
    setTimeout(() => 
    {
        pushClouds();
    }, 100);

}


function darkenClouds(_brightness) 
{
    cloudBrightness = _brightness;

  //  searchClouds();

    
}

let enableInput = document.querySelector("#enableCloudsInput");
let cloudsEnabled = true;

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