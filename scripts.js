


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

