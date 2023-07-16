import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentSeconds = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currentSeconds || 0);
player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(evt) {
  const curentTime = evt.seconds;
  localStorage.setItem('videoplayer-current-time', curentTime);
}
