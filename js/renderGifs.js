const gifs = [
    {id: '1', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '2', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '3', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '4', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '5', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '6', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '7', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
    {id: '8', url: 'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/source.gif'},
  ]

const gifId = document.getElementById('gifId')

gifId.innerHTML = gifs.map((gif, index) => 
    `<img class="gif" src="${gif.url}" alt="michaelscott">`
).join('')