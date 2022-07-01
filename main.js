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
            + " windspeed : " + speed * 3.6   + " clouds : " + all
            ,
            "timzone :" + timezone
            
        );

      //sooo this shi fixes date stuff
      d = new Date()
     
      localTime = d.getTime()
      localOffset = d.getTimezoneOffset() * 60000
      utc = localTime + localOffset
      var cityTimezone = utc + (1000 * timezone)
      nd = new Date(cityTimezone)
      hour = nd.getHours()
      console.log("***** hour :" + hour);
      brightnessIndex = hour - 12
      //if brightnessindex is negative, make it positive
      if (brightnessIndex < 0) brightnessIndex = brightnessIndex*-1
      console.log("brightnessIndex :" + brightnessIndex);


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
       /* deleteClouds();*/

        //console.clear();
        setTimeout(() => {
            animateTrees_();

            console.log("seacheingg");
        
        }, 1000);  

        
        setTimeout(() => {
            setbrightness() ;
        }, 100);
    }

}


const interval = setInterval(function() 
{
    update();
}, 30000);

function update() 
{
    weather.fetchWeather(selectedCity);
   

  //  console.log(cloudBrightness);
}


//just clearing the console
setInterval( function()
{
    console.clear();    
}, 50000);


/*
|￣￣￣￣￣￣￣￣ |
|here wher whoud|
| the other     |
|script go      |
|＿＿＿＿＿＿＿＿|
(\__/) ||
(•ㅅ•) ||
/ 　 づ*/




function setbrightness() 
{
    // add style to css instead of js
    let darkness = document.querySelector(".darkness");
    darkness.style.width = "500px";
    darkness.style.height = "500px";
    darkness.style.position = "absolute";
  //  darkness.style.top = "500px";
  //  darkness.style.left = "180px";
    darkness.style.backgroundColor =  "rgba(0,0,0," + brightnessIndex / 10;
    //give darkness big zindex value
    darkness.style.zIndex = "100";
    document.getElementById("scene").appendChild(darkness);
    
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

