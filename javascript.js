// Listen For Button
for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll('.drum')[index].addEventListener('click', function () {
        playSound(this.innerText);
    })
}

// Listen For KeyBoard
document.addEventListener('keypress', function () {
    playSound(event.key)
})

// Play Sound
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
