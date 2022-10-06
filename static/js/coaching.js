var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);
var playimage = document.getElementById("main-play-image");
var titletext = document.getElementById("title-text");

iframe.addEventListener("click", () => {
    playimage.style.display = 'none'
    player.play();
})

player.on('timeupdate', data=>{
    if (data.percent>=0.99){
        console.log("hide");
        playimage.style.opacity = 1;    
        titletext.style.opacity = 1;  
        iframe.style.opacity = 0;
    }
})

player.on("ended", (data) => {
    iframe.style.display = 'none';
});