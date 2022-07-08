let mySong = document.getElementById("mySong");
let icon = document.getElementById("icon");

icon. addEventListener("click", function(){
    if(mySong.paused){
        mySong.play();
        icon.src="play.png";
    }
    else{
        mySong.pause();
        icon.src="pause.png";
    }
});
