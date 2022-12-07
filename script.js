var buttonMooi = document.getElementById('button_mooi');
var buttonMatig = document.getElementById('button_matig');
var buttonSlecht = document.getElementById('button_slecht');
var video = document.getElementById('video');


buttonMooi.addEventListener('click', speelMooi);
buttonMatig.addEventListener('click', speelMatig);
buttonSlecht.addEventListener('click', speelSlecht);

function speelMooi() {
    video.src = "assets/animationSleep.mp4";
    console.log('Slapen');
}

function speelMatig() {
    video.src = "assets/animationBlush.mp4";
    console.log('Zweten');
}

function speelSlecht() {
    video.src = "assets/animationLove.mp4";
    console.log('Liefde');
}