const apiKey = "08f95c094c31922182995a9ceb36ffb5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox= document.querySelector(".search input");
const searchbtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")



async function checkweather(city){
const response = await fetch(apiurl + city + `&appid=${apiKey}`);
if(response.status==404){
    document.querySelector(".error").style.display="block"
    document.querySelector(".weather").style.display="none"
}
else{
    var data = await response.json();

 

document.querySelector(".city").innerHTML= data.name;
document.querySelector(".temp").innerHTML= Math.round(data.main.temp)+ "°c";
document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";



if(data.weather[0].main=="Clouds"){
    weatherIcon.src="images/clouds.png";
}

else if(data.weather[0].main=="Clear"){
    weatherIcon.src="images/clear.png"
}

else if (data.weather[0].main=="rain"){
    weatherIcon.src="images/rain.png"
}
else if (data.weather[0].main=="mist"){
    weatherIcon.src="images/mist.png"
}
else if (data.weather[0].main=="wind"){
    weatherIcon.src="images/wind.png"
}


document.querySelector(".weather").style.display   ="block"
document.querySelector(".error").style.display="none"
}



}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})
