//import { ethers } from "ethers";

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
//let audioElArray =[savasanaAudioEl, hitMeAudioEl, lazyRiverAudioEl, originAudioEl]
//let vizElArray = [savasanaVizEl, hitMeVizEl, lazyRiverVizEl, originVizEl]

let buttonEl = document.querySelectorAll("button")
//console.log(isPlaying(savasanaAudioEl))

//play savasana 
function playSavasana(){
    if (savasanaAudioEl.paused){
        
        // If Savasana is paused...
        // Hide all other vizualizers
        hitMeVizEl.style.visibility = "hidden";
        //lazyRiverVizEl.style.visibility = "hidden";
        originVizEl.style.visibility = "hidden";
        savasanaVizEl.style.visibility = "visible";

        // Play desired song and viz
        savasanaAudioEl.play()
        savasanaVizEl.play()

        // Change play button to pause
        toggleBtnToPause(0)

        // pause all other songs
        if(isPlaying(originAudioEl)){
            originAudioEl.pause()
            originVizEl.pause()
            toggleBtnToPlay(3)
        }
        if (isPlaying(hitMeAudioEl)){
            hitMeAudioEl.pause()
            hitMeVizEl.pause()
            toggleBtnToPlay(1)
        }//else 
        if(isPlaying(lazyRiverAudioEl)){
            lazyRiverAudioEl.pause()
            lazyRiverVizEl.pause()
            toggleBtnToPlay(2)
        }//else
        
    } else {
        // If Savasana is playing...
        // pause audio and video and change pause button to play
        savasanaAudioEl.pause()
        savasanaVizEl.pause()
        toggleBtnToPlay(0)      
    }
}

//play Hit Me With Your Love
function playHitMe(){
    if(hitMeAudioEl.paused){

        savasanaVizEl.style.visibility = "hidden";
        //lazyRiverVizEl.style.visibility = "hidden";
        originVizEl.style.visibility = "hidden";
        hitMeVizEl.style.visibility = "visible";

        
        toggleBtnToPause(1)

        hitMeAudioEl.play()
        hitMeVizEl.play()
        if(isPlaying(originAudioEl)){
            originAudioEl.pause()
            originVizEl.pause()
            toggleBtnToPlay(3)
        }
        if (isPlaying(savasanaAudioEl)){
            savasanaAudioEl.pause()
            savasanaVizEl.pause()
            toggleBtnToPlay(0)
        } else if (isPlaying(lazyRiverAudioEl)){
            lazyRiverAudioEl.pause()
            lazyRiverVizEl.pause()
            toggleBtnToPlay(2)
        } 
    } else {
        hitMeAudioEl.pause()
        hitMeVizEl.pause()
        toggleBtnToPlay(1)

       
        
        
    }
}

function playOrigin() {
    if (originAudioEl.paused){
        
        // If chosen song is paused...
        // Hide all other vizualizers and make choice's video visible
        hitMeVizEl.style.visibility = "hidden";
        //lazyRiverVizEl.style.visibility = "hidden";
        originVizEl.style.visibility = "visible";
        savasanaVizEl.style.visibility = "hidden";

        // Play desired song and viz
        originAudioEl.play()
        originVizEl.play()

        // Change play button to pause
        toggleBtnToPause(3)

        // pause all other songs
        if(isPlaying(savasanaAudioEl)){
            savasanaAudioEl.pause()
            savasanaVizEl.pause()
            toggleBtnToPlay(0)
        }else if(isPlaying(hitMeAudioEl)){
            hitMeAudioEl.pause()
            hitMeVizEl.pause()
            toggleBtnToPlay(1)
        }else if(isPlaying(lazyRiverAudioEl)){
            lazyRiverAudioEl.pause()
            lazyRiverVizEl.pause()
            toggleBtnToPlay(2)
        } 
    } else {
        // If chosen song is playing...
        // pause audio and video and change pause button to play
        originAudioEl.pause()
        originVizEl.pause()
        toggleBtnToPlay(3)      
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

/*
//------------------------------------------------------------------------
//Sign Message
function signMessage(){
    // A Web3Provider wraps a standard Web3 provider, which is
    // what MetaMask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    // MetaMask requires requesting permission to connect users accounts
    await provider.send("eth_requestAccounts", []);

    // The MetaMask plugin also allows signing transactions to
    // send ether and pay to change state within the blockchain.
    // For this, you need the account signer...
    const signer = provider.getSigner()
}

function a() {
    console.log(aaaaaaaaaaaaaa)
}
*/