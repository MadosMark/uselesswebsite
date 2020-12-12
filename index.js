window.addEventListener('load', (event) => {
    console.log(event)
  });

const gifs = [
  {id: '1', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '2', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '3', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '4', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '5', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '6', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
  {id: '7', url: 'https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif'},
]

document.getElementById('gifId').innerHTML = gifs.map((gif, index) => 

`<img class="gif" src="${gif.url}" alt="michaelscott">`
  ).join('')


{/* <img class="video first" src="https://media.giphy.com/media/12XMGIWtrHBl5e/source.gif" alt="michaelscott" width="50" height="50"> */}
