import soundBeep from '../../assets/sound/beep-29.mp3'
import soundButton from '../../assets/sound/button-21.mp3'

const playSound = (src) => {
    const sound = new Audio();
    sound.src = src;
    sound.play();
    sound.onended = () => true
}

export const beep = () => {
    playSound(soundBeep);
}

export const clearSound = () => {
    playSound(soundButton);
}