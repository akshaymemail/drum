// Listen For Button Click
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll('.drum')[index].addEventListener('click', function () {
        playSound(this.innerText);
        buttonPressed(this.innerText);
    })
}

// Listen For KeyBoard Click
document.addEventListener('keypress', function () {
    playSound(event.key);
    buttonPressed(event.key);
})

// Play Sound Function
function playSound(key) {
    switch (key) {
        case 'w':
            new Audio('tom-1.mp3').play();
            break
        case 'a':
            new Audio('tom-2.mp3').play();
            break;
        case 's':
            new Audio('tom-3.mp3').play();
            break;
        case 'd':
            new Audio('tom-4.mp3').play();
            break;
        case 'j':
            new Audio('snare.mp3').play();
            break;
        case 'k':
            new Audio('crash.mp3').play();
            break;
        case 'l':
            new Audio('kick-bass.mp3').play();
            break;
        default:
            console.log("Wrong Key Pressed...");
            break;
    }
}
// Add Animation On Click
function buttonPressed(key) {
    document.querySelector('.' + key).classList.add('pressed');
    setTimeout(function () {
        document.querySelector('.' + key).classList.remove('pressed');
    }, 200);
}