var APIKey = "756f16a5bbf9deca83d34cadd9032b16";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

document.addEventListener("DOMContentLoaded",() => {
    var cityInput = document.getElementById("cityInput");
    var searchButton = document.getElementById("searchButton");
    var weatherImage = document.getElementById("weatherImage");
    var weatherInfo = document.getElementById("weatherInfo")
    var forecast = document.getElementById("forecast");


    // Event listener for the search button
searchButton.addEventListener("click", () => {
  var cityName = cityInput.value;
  
  // Make API request to OpenWeather API
  var openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherApiKey}`;
  fetch(openWeatherUrl)
      .then(response => response.json())
      .then(weatherData => {
          // Process and display weatherData
          // Update weatherInfo and weatherImage elements
      })
      .catch(error => console.error(error));