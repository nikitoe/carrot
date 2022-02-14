'use strict';
import PopUp from './popup.js';
import GameBuilder from './game.js';

const gameFinishBanner = new PopUp();
const game = new GameBuilder()
.withGameDuration(20)
.withCarrotCount(10)
.withBugCount(10)
.build();

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

