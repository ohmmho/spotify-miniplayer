console.log("heyyy")
  
var xhr = new XMLHttpRequest();

 
  
function searchSong() {

  xhr.open("GET", "https://api.spotify.com/v1/search/?type=track&q=" + "Kashimir");
  xhr.send();
  xhr.onload = function(event) {
    var response = JSON.parse(event.target.response);
    console.log(response);
  };
};

searchSong();