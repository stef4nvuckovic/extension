let inputBox = document.getElementById('inputBox');
let listContainer = document.getElementById('listContainer');

function addTask(){
  if(inputBox.value === ''){
    alert("Your task can't be empty string");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement('span');
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputBox.value = "";
}

listContainer.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle("checked");
    saveData();
  }else if(e.target.tagName ==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){ //Save the data when new element is created, and when a task is checked off, or when a task is removed
  localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){ //Get the data stored in local storage and display that to screen
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


//__________________________________________________________ Fetching gadget ___________________________________________________________________________________________
// Get the toDoApp element
var toDoApp = document.querySelector('.todo-app');
toDoApp.style.display = 'none';


// Function to toggle the visibility along with the control clearfix
function toggleToDo() {
  var isVisible = getComputedStyle(toDoApp).display === 'block';
  toDoApp.style.display = isVisible ? 'none' : 'block';
}

// Add an event listener to the clock gadget button on the taskbar
var toDoGadget = document.querySelector('.taskbar .todo-gadget');
toDoGadget.addEventListener('click', function() {
  toggleToDo();
});
