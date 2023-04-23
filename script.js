let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWhetherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const Full_Url = `${URL}?q=${city}&appid=${API_KEY}&units=fehrenheit`
  console.log(Full_Url);
  const weatherPromise = fetch(Full_Url);
  return weatherPromise.then((response) => {
    return response.json();
  })
}
console.log(getWhetherData("landon"));

searchCity = () => {
  const city = document.getElementById('city-input').value;
  getWhetherData(city)
    .then((response) => {
      showWeatherData(response)
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    })
}

showWeatherData = (WeatherData) => {
  document.getElementById("city-name").innerText = WeatherData.name;
  document.getElementById("weather-type").innerText = WeatherData.weather[0].main;
  document.getElementById("temp").innerText = (WeatherData.main.temp - 273.15).toFixed(2);
  document.getElementById("min-temp").innerText = (WeatherData.main.humidity);
  document.getElementById("max-temp").innerText = (WeatherData.wind.speed);
  if (WeatherData.weather[0].main == "Clear") {
    weather_type_img.src = "clear.png"
  } else if (WeatherData.weather[0].main == "Clouds") {
    weather_type_img.src = "clouds.png"
  }
  else if (WeatherData.weather[0].main == "Drizzle") {
    weather_type_img.src = "drizzle.png"
  }
  else if (WeatherData.weather[0].main == "Mist") {
    weather_type_img.src = "mist.png"
  }
  else if (WeatherData.weather[0].main == "Rain") {
    weather_type_img.src = "rain.png"
  }
  else {
    weather_type_img.src = "snow.png"
  }

}