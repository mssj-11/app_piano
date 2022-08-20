const pianoKeys = document.querySelectorAll('.key');

function playSound(newUrl) {    new Audio(newUrl).play();   }

pianoKeys.forEach((pianoKey, k) => {
    const number = k<9 ? '0' + (k + 1) : (k + 1);
    const newUrl = '../24-piano-keys/key' + number + '.mp3';
    console.log(newUrl);
    pianoKey.addEventListener('click', () => playSound(newUrl));
});