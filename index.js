//Grab audio and video elements
let savasanaAudioEl = document.getElementById("savasana-file")
let hitMeAudioEl = document.getElementById("hit-me-audio")
let lazyRiverAudioEl = document.getElementById("lazy-river-audio")
let originAudioEl = document.getElementById("origin-audio")

let savasanaVizEl = document.getElementById("savasana-viz")
let hitMeVizEl = document.getElementById("hit-me-viz")
let lazyRiverVizEl = document.getElementById("lazy-river-viz")
let originVizEl = document.getElementById("origin-viz")

// Creat arrays of audio and vizual elements
let audioElArray =[savasanaAudioEl, hitMeAudioEl, lazyRiverAudioEl, originAudioEl]
let vizElArray = [savasanaVizEl, hitMeVizEl, lazyRiverVizEl, originVizEl]

let buttonEl = document.querySelectorAll("button")
//console.log(isPlaying(savasanaAudioEl))

//play savasana 
function playSavasana(){
    if (savasanaAudioEl.paused){
        
        hitMeVizEl.style.visibility = "hidden";
        //lazyRiverVizEl.style.visibility = "hidden";
        //originVizEl.style.visibility = "hidden";
        savasanaVizEl.style.visibility = "visible";

        savasanaAudioEl.play()
        savasanaVizEl.play()

        toggleBtnToPause(0)

        if (isPlaying(hitMeAudioEl)){
            hitMeAudioEl.pause()
            hitMeVizEl.pause()
            toggleBtnToPlay(1)
        } else if (isPlaying(lazyRiverAudioEl)){
            lazyRiverAudioEl.pause()
            lazyRiverVizEl.pause()
            toggleBtnToPlay(2)
        } else if (isPlaying(originAudioEl)){
            originAudioEl.pause()
            originVizEl.pause()
            toggleBtnToPlay(3)
        }
    } else {
        savasanaAudioEl.pause()
        savasanaVizEl.pause()
        toggleBtnToPlay(0)

        toggleBtnToPause(1)
        toggleBtnToPause(2)
        toggleBtnToPause(3)
    }
}

//play Hit Me With Your Love
function playHitMe(){
    if(hitMeAudioEl.paused){

        savasanaVizEl.style.visibility = "hidden";
        //lazyRiverVizEl.style.visibility = "hidden";
        //originVizEl.style.visibility = "hidden";
        hitMeVizEl.style.visibility = "visible";

        
        toggleBtnToPause(1)

        hitMeAudioEl.play()
        hitMeVizEl.play()
        if (isPlaying(savasanaAudioEl)){
            savasanaAudioEl.pause()
            savasanaVizEl.pause()
            toggleBtnToPlay(0)
        } else if (isPlaying(lazyRiverAudioEl)){
            lazyRiverAudioEl.pause()
            lazyRiverVizEl.Play()
            toggleBtnToPlay(2)
        } else if (isPlaying(originAudioEl)){
            originAudioEl.pause()
            originVizEl.pause()
            toggleBtnToPlay(3)
        }
    } else {
        hitMeAudioEl.pause()
        hitMeVizEl.pause()
        toggleBtnToPlay(1)

       
        
        
    }
}

//check if song is playing
function isPlaying(audioEl){
    return !audioEl.paused
}

//toggle button to pause
function toggleBtnToPause(buttonIndex){
    buttonEl[buttonIndex].style.background = "url('pause-btn.png')";
    buttonEl[buttonIndex].style.backgroundSize = "100%";
}

//toggle button to play
function toggleBtnToPlay(buttonIndex){
    buttonEl[buttonIndex].style.background = "url('play-btn2.png')";
    buttonEl[buttonIndex].style.backgroundSize = "100%";
}