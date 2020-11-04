import { artists } from './artist.js'

const contentContainer = document.querySelector('#card-container')

const createCard = (artist) => {
    const card = document.createElement('div')

    card.innerHTML = `
    <div class="card">
    <div class="card-body">
    <h5 class="card-title"> ${artist.name}</h5>
    <p class="card-text">
      <strong>Country:</strong> ${artist.country}
    </p>
    <p class="card-text">
      <strong>Genre:</strong> ${artist.genre}
    </p>
    <p class="card-text">
        Lyrics:"${artist.perform()}"
    </p>
    </div>
    `

    return card;
}

const cards = artists.map(artist => {
    return createCard(artist);
})

const randomIndexNbr = Math.floor(Math.random() * artists.length);
const featuredCard = createCard(artists[randomIndexNbr]);

document.querySelector('#artistFeatured').appendChild(featuredCard)

cards.forEach(card => contentContainer.appendChild(card));