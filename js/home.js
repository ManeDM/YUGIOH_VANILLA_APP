let continueButton = document.getElementById("action-message");
let coinSound = document.getElementById("coin-sound");

function chargeMainWiev (){
    continueButton.addEventListener('click', ()=>{
        soundCoin();
        setTimeout(()=>{
            location.href= "/mainView.html" 
        },1000)
    });
}

function soundCoin(){
    coinSound.play()
}

chargeMainWiev()