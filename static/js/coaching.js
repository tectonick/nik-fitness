
var options = {
    url: "https://player.vimeo.com/video/749910680?h=da0cb51709",
    responsive: true,
    controls: false,
    title: false,
    portrait: false
  };

var playerdiv = document.getElementById('main-vimeo');
var player = new Vimeo.Player(playerdiv, options);
var playimage = document.getElementById("main-play-image");
var titletext = document.getElementById("title-text");
var mainplaydiv = document.getElementById('main-play');
var playMainVimeoBtn = document.getElementById('play-main-vimeo-btn');

playMainVimeoBtn.addEventListener("click", () => {
    mainplaydiv.classList.add('transparent');
    player.setCurrentTime(103);
    player.play();
})

player.on('timeupdate', data=>{
    if (data.percent>=0.985){
        mainplaydiv.classList.remove('transparent');
    }
})
