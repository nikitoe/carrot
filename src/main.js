'use strict';
import PopUp from './popup.js';
import Game from './game.js';


const CARROT_COUNT = 3;
const BUG_COUNT = 3;
const GAME_DURATION_SEC = 3;

const gameFinishBanner = new PopUp();
const game = new Game(GAME_DURATION_SEC, CARROT_COUNT, BUG_COUNT);
game.setGameStopListener((reason) => {

    let message;
    switch(reason) {
        case 'cancel':
            message = 'Replay 🤞?'
            break;
        case 'win':
            message = 'You win 😎'
            break;
        case 'lose':
            message = 'You lose 💀'
            break;
        default:
            throw new Error('not valid reason');
    }
    gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
    game.start();
});

