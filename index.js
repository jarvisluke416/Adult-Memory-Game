function shuffleCards() {
    const cardsArray = Array.from(document.querySelectorAll('.card')); 
    const shuffledCards = cardsArray.sort(() => Math.random() - 0.5); 

    const gameContainer = document.querySelector('.game-container');
    shuffledCards.forEach(card => {
        gameContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', shuffleCards);


let flippedCards = [];
let matchedPairs = 0;
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {

        if (!card.classList.contains('flipped') && flippedCards.length < 2) {
            card.classList.add('flipped');
            flippedCards.push(card);
        }

        if (flippedCards.length === 2) {
            const [firstCard, secondCard] = flippedCards;

            if (firstCard.getAttribute('data-card') === secondCard.getAttribute('data-card')) {
                matchedPairs++;
                flippedCards = [];
                if (matchedPairs === cards.length / 2) {
                    alert('You won!');
                }
            } else {

                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }
    });
});

card.addEventListener('click', flipCard); 
card.addEventListener('touchstart', flipCard);
