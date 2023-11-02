let continueButton = document.getElementById("action-message");
let coinSound = document.getElementById("coin-sound");
let mainSound = document.getElementById("main-menu-sound");



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

function mainMenuSound() {
    document.addEventListener('click', function() {
        mainSound.play();
      });
  }

chargeMainWiev()
mainMenuSound()


