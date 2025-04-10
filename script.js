// add this code to the <script> section after the .sevenDay element
var API_KEY = "66868932947df5276f496a5f46201995";
var city = "New York"; // replace with the desired city name
var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + API_KEY;

$.getJSON(url, function(data) {
  var temperature = Math.round(data.main.temp - 273.15);
  var weatherIcon = data.weather[0].icon;
  var weatherDescription = data.weather[0].description;
  var weatherInfo = "<h1>Weather in " + city + "</h1>";
  weatherInfo += "<h1><img src='https://openweathermap.org/img/w/" + weatherIcon + ".png'>" + temperature + "&deg;C</h1>";
  weatherInfo += "<h3>" + weatherDescription + "</h3>";
  $(".title").html(weatherInfo);
});


// add this code after the .sevenDay element
var API_KEY = "66868932947df5276f496a5f46201995";
var city = "New York"; // replace with the desired city name
var url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + API_KEY;

$.getJSON(url, function(data) {
  var forecast = data.list.slice(0, 7);
  var forecastHTML = "";
  $.each(forecast, function(index, forecastItem) {
    var forecastDate = new Date(forecastItem.dt * 1000);
    var forecastDay = forecastDate.toLocaleDateString("en-US", { weekday: "long" });
    var forecastTemperature = Math.round(forecastItem.main.temp - 273.15);
    var forecastIcon = forecastItem.weather[0].icon;
    forecastHTML += "<li>";
    forecastHTML += "<div class='day'>" + forecastDay + "</div>";
    forecastHTML += "<div class='temp'><img src='https://openweathermap.org/img/w/" + forecastIcon + ".png'>" + forecastTemperature + "&deg;C</div>";
    forecastHTML += "</li>";
  });
  $(".sevenDay ul").html(forecastHTML);
});


