const containerAlbunes = document.querySelector(".container-fluyemusic")

let offset = 1;
let limit = 20;

function fetchAlbunes(id) {
    
    fetch(`https://api.spotify.com/v1/albums/${id}`)  
        .then((res) => res.json())
        .then((data) => {
            createAlbunes(data);
        });
}
function fetchAlbunes(offset, limit) {
    for (let i = offset; i <= offset + limit; i++) {
        fetchAlbunes(i);
    }
}

function createAlbunes(albunes) {
    const card = document.createElement("div");
    card.classList.add("albunes-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement('img');
    sprite.src = albunes.sprites.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement('p');
    number.textContent = `#${albunes.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = albunes.name;

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    containerAlbunes.appendChild(card);
}
fetchAlbunes(offset, limit) 



