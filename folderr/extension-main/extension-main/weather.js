let locationElm = document.getElementById('location');
let temperatureElm = document.getElementById('temperature');
let weatherElm = document.getElementById('weather');

function callApi(){
  if(navigator.geolocation){
    //chack availability of geolocation
    console.log("Geolocation available");
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback,{});//use of getCurrentPosition() from HTML5 Geolocation API
  }
  else{
    console.log("Geolocation is not supported on this browser");
  }
};

//out put the coordinates object 

function successCallback(pos){
  var latitude = pos.coords.latitude
  var longitude = pos.coords.longitude
  //console.log("Latitude: " + latitude, "Longitude: " + longitude);
  // Call getWeatherInfo with the obtained latitude and longitude
  getWeatherInfo(latitude,longitude);
}

function errorCallback(err){
  console.log(err.message);
}

//_______________________ weather api____________________________________________________________________________
  

function getWeatherInfo(latitude, longitude) {
  var api_key = 'a74f7a8919839ec9c2f144b5cfcddca0'
  var url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${api_key}`;

//Latitude:44.6963303  Longitude: -73.4623454
//https://api.openweathermap.org/data/2.5/weather?lat=44.6963303&lon=-73.4623454&APPID=a74f7a8919839ec9c2f144b5cfcddca0

  fetch(url)
  .then(response => {
    if(!response.ok){
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data =>{
    console.log(data);
      //update the UI elements 
    locationElm.innerHTML = data.name;
    temperatureElm.innerHTML = data.main.temp + "℉";
    var weatherDescription = data.weather.length > 0 ? data.weather[0].description : "";
    //checks if the length of the weather array in the data object is greater than 0. In other words, it checks if there is at least one weather description in the array.
      weatherElm.innerHTML = weatherDescription;
    })
  .catch(error=>{
    console.error("Error fetching weather data:", error);
  });
}
//___________________________________________________________________________________________________________________________
callApi();
 
// Get the toDoApp element
var weatherContainer = document.querySelector('.wContainer');
weatherContainer.style.display = 'none';


// Function to toggle the visibility 
function toggleWeather() {
  var isVisible = getComputedStyle(weatherContainer).display === 'block';
  weatherContainer.style.display = isVisible ? 'none' : 'block';
}

// Add an event listener to the clock gadget button on the taskbar
var weatherGadget = document.querySelector('.taskbar .weather-gadget');
weatherGadget.addEventListener('click', function() {
  toggleWeather();
});
