document.addEventListener('DOMContentLoaded', function() {
    fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
        .then(response => response.json())
        .then(data => displayCharacters(data.data))
        .catch(error => console.error('Error fetching data:', error));
});

function displayCharacters(characters) {
    const container = document.getElementById('characters');
    characters.forEach(character => {
        if (character.isPlayableCharacter) {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${character.displayIcon}" alt="${character.displayName}">
                <h3>${character.displayName}</h3>
                <p>${character.description}</p>
                <button onclick="location.href='details.html?id=${character.uuid}'">Ver información detallada</button>
            `;
            container.appendChild(card);
        }
    });
}
