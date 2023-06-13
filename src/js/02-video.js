import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
var throttle = require('lodash.throttle');

//on

const onPlay = function (data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
  // data is an object containing properties specific to that event
};
//addeventlistene

console.log(player);

player.on('timeupdate', throttle(onPlay, 1000));

let time = localStorage.getItem('videoplayer-current-time');
if (time !== undefined) {
  player.setCurrentTime(Number(time));
}
