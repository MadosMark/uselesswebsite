
(function(document){
    const button = document.querySelector(".astro-button");
    let astroworldLogo = document.getElementById('astroworld-logo');
    
    button.addEventListener('click', function() {
        astroworldLogo.className = 'astroworld-logo spin';
        console.log(astroworldLogo);
    });

 
  })(document);


(function(document){
    const button = document.querySelector(".astro-button");
    let astroworldBackground = document.getElementById('astro-universe-image');
    
    button.addEventListener('click', function() {
        astroworldBackground.className = 'astro-universe-image perspective';
        
    });

 
  })(document);