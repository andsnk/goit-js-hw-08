// import throttle from 'lodash.throttle';
// import Player from '@vimeo/player';

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const saveCurrentTime = () => {
  player
    .getCurrentTime()
    .then(time => {
      localStorage.setItem('videoplayer-current-time', time);
    })
    .catch(error => {
      console.log('Помилка при отриманні часу відтворення: ', error);
    });
};

const seekToSavedTime = () => {
  const savedTime = localStorage.getItem('videoplayer-current-time');
  if (savedTime) {
    player.setCurrentTime(savedTime).catch(error => {
      console.log('Помилка при встановленні часу відтворення: ', error);
    });
  }
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

window.addEventListener('load', seekToSavedTime);
