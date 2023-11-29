const timeElement = document.getElementById('time');
const dateElement = document.getElementById('time');
const locationElement = document.getElementById('time');


//_______________________ geolocation api____________________________________________________________________________
function callApi(){
  if(navigator.geolocation){
    //api利用可能の処理
    console.log("Geolocation available");
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback,{});//use of getCurrentPosition() from HTML5 Geolocation API
  }
  else{
    console.log("Geolocation is not supported on this browser");
  }
};

//out put the coordinates object 
var latitude;
var longitude;
function successCallback(pos){
  latitude = pos.coords.latitude
  longitude = pos.coords.longitude
  console.log("Latitude: " + latitude, "Longitude: " + longitude);
}

function errorCallback(err){
  console.log(err.message);
}
//___________________________________________________________________________________________________________________________

//_______________________ weather api____________________________________________________________________________
//api key  a74f7a8919839ec9c2f144b5cfcddca0


//http://api.openweathermap.org/data/2.5/weather?lat=44.6963303&lon=-73.4623454&APPID=216a92274ae99ff3563ede25851a3c6f
//Latitude:44.6963303  Longitude: -73.4623454


//___________________________________________________________________________________________________________________________




callApi();