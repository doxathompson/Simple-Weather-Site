const apiKey = "acfc105d02ca1e327a4f2637f9c1bc71";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIconContainer = document.querySelector(".weather_icon");
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data)


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".main").innerHTML = data.weather[0].main;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
    let weatherIcon;

    if (data.weather[0].main == "Clouds") {
        weatherIcon = '<i class="fa-solid fa-cloud-bolt icon"></i>';
    } else if (data.weather[0].main == "Clear") {
        weatherIcon = '<i class="fa-regular fa-sun icon"></i>';
    } else if (data.weather[0].main == "Rain") {
        weatherIcon = '<i class="fa-regular fa-smog icon"></i>';
    } else if (data.weather[0].main == "Mist") {
        weatherIcon = '<i class="fa-regular fa-snowflake icon"></i>';
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon = '<i class="fa-regular fa-smog icon"></i>';
    }

    // Set the HTML content of the weatherIconContainer
    weatherIconContainer.innerHTML = weatherIcon;
}
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather(searchBox.value);
});

checkWeather("Accra"); // Provide a default city here