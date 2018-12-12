// Listen For Button
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll('.drum')[index].addEventListener('click', function () {
        playSound(this.innerText);
        buttonPressed(this.innerText);
    })
}

// Listen For KeyBoard
document.addEventListener('keypress', function () {
    playSound(event.key)
    buttonPressed(event.key);
})

// Play Sound
function playSound(key) {
    switch (key) {
        case 'w':
            new Audio('sounds/tom-1.mp3').play();
            break
        case 'a':
            new Audio('sounds/tom-2.mp3').play();
            break;
        case 's':
            new Audio('sounds/tom-3.mp3').play();
            break;
        case 'd':
            new Audio('sounds/tom-4.mp3').play();
            break;
        case 'j':
            new Audio('sounds/snare.mp3').play();
            break;
        case 'k':
            new Audio('sounds/crash.mp3').play();
            break;
        case 'l':
            new Audio('sounds/kick-bass.mp3').play();
            break;

        default:
            console.log("Wrong Key Pressed...");
            break;
    }
}

function buttonPressed(key) {
    document.querySelector('.' + key).classList.add('pressed');
    setTimeout(function () {
        document.querySelector('.' + key).classList.remove('pressed');
    }, 200);
}