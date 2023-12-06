function changeBackground() {
    var images = ['bg1.jpg', 'bg2.jpg', 'bg3.jpg', 'bg4.jpg', 'bg5.jpg', 'bg6.jpg', 'bg7.jpg', 'bg8.jpg'];
    var randomIndex = Math.floor(Math.random() * images.length);
    var imagePath = 'resources/images/' + images[randomIndex]; 
    document.body.style.backgroundImage = "url('" + imagePath + "')";
}
