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

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();



/* Fetching gadget
// Get the toDoApp element
var toDoApp = document.querySelector('todo-app');

// Function to toggle the Pomodoro timer's visibility along with the control clearfix
function toggleToDo() {
  var isVisible = getComputedStyle(toDoApp).display === 'block';
  toDoApp.style.display = isVisible ? 'none' : 'block';
}

// Add an event listener to the clock gadget button on the taskbar
var toDoGadget = document.querySelector('todo-app');
toDoGadget.addEventListener('click', function() {
  toggleToDo();
});
*/