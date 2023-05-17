let weather = {
    apiKey: "08f95c094c31922182995a9ceb36ffb5",

    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&units=metric&appid="
            + this.apiKey

        )
            .then(Response => Response.json())
            .then(data => this.displayWeather(data));
        // .then(data=>console.log(data));
    },
    displayWeather: function (data) {
        const name = data.name;
        const { temp, humidity } = data.main;
        const speed = data.wind.speed;
        const { description, icon } = data.weather[0];
        // console.log(name, speed, temp, humidity, description, icon);
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "humidity : " + humidity + "%";
        document.querySelector(".wind").innerText = "wind speed : " + speed + " km/hr";
        document.querySelector(".description").innerText = description;
        document.querySelector(".weather").classList.remove("loading");

    

        document.body.style.backgroundImage=  "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }

};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();

}
);

 

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
if (event.key=="Enter"){
    weather.search();
}

}
);

 
















