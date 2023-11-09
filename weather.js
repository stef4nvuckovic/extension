//use of getCurrentPosition() from HTML5 Geolocation API


//Check if Geolocation is supported on the browser
if(navigator.geolocation){
  //api利用可能の処理
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
}

//if supported, run getCurrentPosition() method and return the latitude and longitude 

//if not, 
else{
  alert("Geolocation is not supported on this browser")
}

//out put the coordinates object 

function successCallback(){

}

function errorCallback(){

}