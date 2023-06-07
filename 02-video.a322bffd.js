const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("eventName",(function(e){}));o.on("play",(function(e){}));
//# sourceMappingURL=02-video.a322bffd.js.map
