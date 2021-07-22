setTimeout(() => {
    weather.search();
}, 200);


let selectedCity = "tokyo";
let htmlElements = 
{
    HTMLcity        : document.querySelector(".city"),
    HTMLtemp        : document.querySelector(".temp"),
    HTMLdescription : document.querySelector(".description"),
    HTMLwind        : document.querySelector(".wind")
}

//import { cloudBrightness } from "cloud.js"

let weather = 
{
    apiKey: "acf1f121eb3178a30502a63a68f67a3c", 

    fetchWeather : function () 
    {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            +selectedCity
            +"&units=metric&appid="
            + this.apiKey
            )

            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },

    displayWeather : function (data) 
    {
        const { name , timezone }  = data; 
        const { temp }  = data.main;
        const { description }   = data.weather[0];
        const { speed } = data.wind;
        const { sunrise , sunset} = data.sys;
        const { id } = data.weather[0];
        const { all } = data.clouds;

        window.ID = id;
        window.Description = description;
        window.Name = name;
        window.Clouds = all;
        window.windSpeed = speed * 3.6; // to convert to km/h
        console.log(timezone  +"   " + timezone / 3600);
        window.timezoneInHours = (timezone /3600) ;  // get timezone of api (in seconds) and make it in hours

       // 
        console.log
        (
            "city name : " + name 
            +" temp : " + temp  , description  
            + " windspeed : " + speed * 3.6  
            + " current hour is  : " 
            + currentHour
            + "  converted hours :" + window.currentHourConverted            
        );
            
        //display stuff inside the html
        
        htmlElements.HTMLcity.innerText        = name;
        htmlElements.HTMLtemp.innerText        = temp + " °C";
        htmlElements.HTMLdescription.innerText = description;
        htmlElements.HTMLwind.innerText        = "wind : " + Math.round(speed * 3.6) + " km/h";

    },

    search : function () 
    {
        selectedCity = document.querySelector(".searchBar").value; 
        update(); 
        deleteClouds();

        //console.clear();
        setTimeout(() => {
            animateTrees_();

            setSky();
            console.log("seacheingg");
        
        }, 1000);  

        

    }

}


const interval = setInterval(function() 
{
    update();
}, 3000);

function update() 
{
    weather.fetchWeather(selectedCity);
    RiseSet();
   
    ConvertTime();
  //  console.log(cloudBrightness);
}


//just clearing the console
setInterval( function()
{
    console.clear();    
}, 5000);


/*
|￣￣￣￣￣￣￣￣ |
|here wher whoud|
| the other     |
|script go      |
|＿＿＿＿＿＿＿＿|
(\__/) ||
(•ㅅ•) ||
/ 　 づ*/

function ConvertTime()
{
    currentHour = new Date().getHours() + (new Date().getMinutes() / 60);                                   //get hours of the pc
    window.currentHourConverted = currentHour + (window.timezoneInHours - 1) + (new Date().getMinutes() / 60) ;    // calculate converted hours by getting current hours and adding the timezone diffrence 
    if (currentHourConverted >= 24)    {currentHourConverted -= 24;}
    else if (currentHourConverted < 0) {currentHourConverted += 24;}
    console.log("converted tiem " + window.currentHourConverted);

 
}

let sunrise = 5;
let sunset = 18;
let currentHour;
let toFullRise_Set;
let sky = document.getElementById("body");

function setSky() 
{   
    console.log(cloudBrightness);
    ConvertTime();
    console.log("set sky fucntion is called");

    if 
    (5< currentHour && currentHour <= 8 || 18 < currentHour && currentHour <= 21) 
    {         
        darkenClouds(70);
        darkenTreesAndLnad(70)
        console.log(cloudBrightness);

        sky.classList.add('notransition'); // Disable transitions
        sky.style.backgroundColor = "#5486BD"; // dusk

        sky.offsetHeight; // Trigger a reflow, flushing the CSS changes
        sky.classList.remove('notransition'); // Re-enable transitions
        canvas.style.display = 'block';
        star.style.display = "none";
        console.log("dusk");


    }

    else if ( 8 < currentHour  && currentHour <= 18) 
    {   

    darkenClouds(100);
    darkenTreesAndLnad(100);
    console.log(cloudBrightness );

     sky.classList.add('notransition'); // Disable transitions
     sky.style.backgroundColor = "#97D3FF"; // mid day

    sky.offsetHeight; // Trigger a reflow, flushing the CSS changes
    sky.classList.remove('notransition'); // Re-enable transitions
    canvas.style.display = 'none';
    star.style.display = 'none';
        console.log("midday");

    }       

    else if
    ( currentHour > 21 || currentHour < 5) 
    {
        darkenClouds(20);
        darkenTreesAndLnad(40);
        console.log(cloudBrightness );
    
    sky.classList.add('notransition'); // Disable transitions
    sky.style.backgroundColor = "#0F1017"; // night 

    sky.offsetHeight; // Trigger a reflow, flushing the CSS changes
    sky.classList.remove('notransition'); // Re-enable transitions
    canvas.style.display = 'block';
    star.style.display = "block";
        console.log("night");


    }
    

}

function RiseSet() 
{
    if (currentHour >= 5 && currentHour <= 8 ) 
    {
      rise()  
    }
    else if (currentHour >= sunset  && currentHour <= 21 )  
    {
      set();
    }
}

function rise() 
{
    darkenClouds(100);
    darkenTreesAndLnad(100);
    console.log("rise");
    sky.style.transition = String( 8 - currentHour ) * 3600 + "s";
    sky.style.backgroundColor = "#97D3FF";
    canvas.style.display = 'none';
}
function set()
{
    darkenClouds(50);
    darkenTreesAndLnad(50);
    sky.style.transition = String( 21 - currentHour ) * 3600 + "s";
    sky.style.backgroundColor = "#0F1017";
    console.log("set");    
    canvas.style.display = 'block';
}

/*
|￣￣￣￣￣￣￣￣|
| now just some |
|               |
| extra stuff   |
|＿＿＿＿＿＿＿＿|
(\__/) ||
(•ㅅ•) ||
/ 　 づ*/


function hideAll()
{   let isHidden = true;
    
    if (    document.querySelector(".card").style.display == "none") 
    {
        isHidden = true
    }
    else
    {
        isHidden = false;
    }

    if (isHidden == true) 
    {
        document.querySelector(".card").style.display = "block"
        document.querySelector(".searchCard").style.display = "block"

    }
    else
    {
        document.querySelector(".card").style.display = "none"
        document.querySelector(".searchCard").style.display = "none"

    }
}
function showInfo()
{
    let isHidden = true;

    if (    document.querySelector(".infoCard").style.display == "none") 
    {
        isHidden = true
    }
    else
    {
        isHidden = false;
    }

    if (isHidden == true) 
    {
        document.querySelector(".infoCard").style.display = "block"

    }
    else
    {
        document.querySelector(".infoCard").style.display = "none"

    }
}

function showComment()
{
    document.querySelector(".hideComment").style.color = "#BEBEBE";    
}

function hideComment()
{
    document.querySelector(".hideComment").style.color = "transparent";    
}

document.querySelector("body").addEventListener("keyup" , function (event) 
{
    let isHidden = true;

    if (event.key == "*") 
    {
    
        if (    document.querySelector(".card").style.display == "none") 
        {
            isHidden = true
        }
        else
        {
            isHidden = false;
        }
    
        if (isHidden == true) 
        {
            document.querySelector(".card").style.display = "block";
            document.querySelector(".searchCard").style.display = "block";
            document.querySelector(".hideComment").style.display = "block";
            document.querySelector(".HIDEandINFO").style.display = "block";
            document.querySelector(".menuCard").style.display = "block";



        }
        else
        {
            document.querySelector(".card").style.display = "none";
            document.querySelector(".searchCard").style.display = "none";
            document.querySelector(".hideComment").style.display = "none";
            document.querySelector(".infoCard").style.display = "none";
            document.querySelector(".HIDEandINFO").style.display = "none";
            document.querySelector(".menuCard").style.display = "none";

        }
    }  
})


// now stars and stuff

var canvas = document.getElementById("starfield"),
context = canvas.getContext("2d");
stars = 200;

for (var i = 0; i < stars; i++) {
    
    x = Math.random() * canvas.offsetWidth;
    y = Math.random() * canvas.offsetHeight;
    context.fillStyle = "white";
    context.fillRect(x,y,1,1);
    
}

function twink()
{
    console.log("twink called");
    let star = document.querySelector(".star");

    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    randomX = Math.floor(Math.random()  * winWidth);
    randomY = Math.floor(Math.random()  * winHeight);
    star.style.top = randomY + "px";
    star.style.left = randomX + "px";
   
    star.style.backgroundColor = "white";
    star.style.filter = "blur(1px)";
    setTimeout(() => {
        star.style.backgroundColor = "transparent";
        star.style.filter = "blur(10px)";


    }, 2000);
}

setInterval(() => {
    twink();
}, 30000);


