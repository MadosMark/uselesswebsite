
(function(document){
    const button = document.querySelector(".astro-button");
    let astroworldLogo = document.getElementById('astroworld-logo');
    
    button.addEventListener('click', function() {
        astroworldLogo.className = 'astroworld-logo spin';
        console.log(astroworldLogo);
    });

 
  })(document);

 