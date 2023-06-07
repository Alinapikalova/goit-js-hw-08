!function(){var e=document.querySelector("iframe"),n=new Vimeo.Player(e);n.on("play",(function(){console.log("played the video!")})),n.getVideoTitle().then((function(e){console.log("title:",e)})),n.on("eventName",(function(e){}));n.on("play",(function(e){}))}();
//# sourceMappingURL=02-video.e9607b36.js.map
