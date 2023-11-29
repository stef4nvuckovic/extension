function updateTime() {
    const currentTimeElement = document.getElementById('currentTime');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    const currentTimeString = `${hours}:${minutes}:${seconds}`;
    
    currentTimeElement.textContent = currentTimeString;
}

// Call updateTime every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Call updateTime once when the page loads to initialize the time
updateTime();
