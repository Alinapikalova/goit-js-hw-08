import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

//on

player.on('eventName', function (data) {
  // data is an object containing properties specific to that event
});
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};
//addeventlistener

player.on('play', onPlay);


//currentTime
{
  duration: 61.857;
  percent: 0.049;
  seconds: 3.034;
}

