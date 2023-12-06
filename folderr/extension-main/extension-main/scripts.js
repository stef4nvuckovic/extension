


//----------------------------------------------POMODORO JS END --------------------------------------------------------------------------


document.addEventListener("DOMContentLoaded", function() {
  var burghyIcon = document.getElementById("burghy-icon");
  var dropdownContent = document.getElementById("dropdown-content");

  burghyIcon.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent the click event from propagating to the body

      // Toggle the visibility of the dropdown content
      if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
      } else {
          dropdownContent.style.display = "block";
      }
  });

  // Close the dropdown when clicking anywhere outside of it
  document.addEventListener("click", function(event) {
      if (event.target !== burghyIcon) {
          dropdownContent.style.display = "none";
      }
  });
});








document.addEventListener("DOMContentLoaded", function () {
    var musicSlider = document.querySelector(".music-slider");
  
    function toggleMusicSlider() {
      musicSlider.style.display = musicSlider.style.display === "none" ? "block" : "none";
    }
  
    // Add your play, pause, backward, and forward functionality here
  
    // Example:
    var playButton = document.getElementById("play-button");
    var backwardButton = document.getElementById("backward-button");
    var forwardButton = document.getElementById("forward-button");
  
    playButton.addEventListener("click", function () {
      // Add your play/pause functionality here
      // For example: togglePlayPause();
    });
  
    backwardButton.addEventListener("click", function () {
      // Add your backward functionality here
      // For example: playPreviousTrack();
    });
  
    forwardButton.addEventListener("click", function () {
      // Add your forward functionality here
      // For example: playNextTrack();
    });
  });