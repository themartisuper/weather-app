//your API key from 'OpenWeather', also: const apiKey = "your API key from 'OpenWeather'"
let apiKey;

try {
  const module = await import("../../API_keys/openWeather.js");
  apiKey = module.apiKey;
} catch (err) {
  console.warn("⚠️ API key module not found:", err);
  apiKey = null;
};

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  // check apiKey
  if (!apiKey || apiKey.includes("your API key")) {
    alert("⚠️ API key is not connected. Add your key to the file before using the application.");
    return;
  }

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name + " in " +data.sys.country;
    document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  };
};

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});