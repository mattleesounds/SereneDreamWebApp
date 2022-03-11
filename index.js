let savasanaAudioEl = document.getElementById("savasana-file")
let savasanaVizEl = document.getElementById("savasana-viz")

function playSavasana(){
    if (savasanaAudioEl.paused){
        savasanaAudioEl.play()
        savasanaVizEl.play()
    } else {
        savasanaAudioEl.pause()
        savasanaVizEl.pause()
    }
}