
(function(document){
    const button = document.querySelector(".astro-button");
    const astroMusic = document.getElementById('audio');
   
    button.addEventListener('click', function playAudio() {
        astroMusic.play('audio');
    });

 
  })(document);

 