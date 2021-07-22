setInterval(() => {

    console.log("ID : " + window.ID);
  //  console.log(window.Description);       
    switch (window.ID) {

        case 701: console.log("fog"); break;
        case 741: console.log("fog"); break;
        case 771: console.log("fog"); break;
        case 781: console.log("fog"); break;
     
        
        case 711: console.log("smoke "); break;
        case 762: console.log("smoke"); break;
    
        case 721: console.log("haze redish"); break;
    
        case 731: console.log("sandy"); break;
        case 751: console.log("sandy"); break;
        case 761: console.log("sandy"); break;
  
        // for clear sky
        case 800: console.log("clear"); break;

    }
    switch (window.Name)
    {
        case "Thunderstorm": 
            window.Clouds = 80;
            console.log("thunder with a bit of rain"); 
        break;

        case "Drizzle":      
            window.Clouds = 80;
            console.log("light rain"); 
        break;

        case "Rain":         
            window.Clouds = 80;
            console.log("heavy rain"); 
        break;

    }

  

    console.log(window.Clouds);
}, 5000);
