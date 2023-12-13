
const monthNames = ['januar', 'februar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december'];

function checkMonth() {
    const userInput = document.getElementById('monthInput').value.toLowerCase();
    const messageElement = document.getElementById('message');
    if (monthNames.includes(userInput)) {
        if (userInput === 'december') {
            messageElement.innerHTML = 'Glædelig jul';
            playChristmasMusic();
        } else {
            messageElement.innerHTML = 'Bare det snart var jul';
        }
    } else {
        messageElement.innerHTML = 'Navn eksisterer ikke';
    }
}

function playChristmasMusic() {
    var audio = document.getElementById('myAudio'); // Assuming 'myAudio' is the ID of your audio element
    audio.play();
}
