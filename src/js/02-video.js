import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
// var throttle = require('lodash.throttle');

//on

const onPlay = function (data) {
  console.log(data);
  // data is an object containing properties specific to that event
};
//addeventlistener

console.log(player);

player.on('timeupdate', onPlay);
