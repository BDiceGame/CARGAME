document.addEventListener('DOMContentLoaded', function () {
    const images = [
        'car1.jpg',
        'car2.jpg',
        'car3.jpg',
        'car4.jpg',
        'car5.jpg',
        'car6.jpg',
        'car7.jpg',
        'car8.jpg',
        'car9.jpeg',
        'images/car10.jpeg',
        'images/car11.jpeg',
        'images/car12.jpeg',
        'images/car13.jpeg',
        'images/car14.jpeg',
        'images/car15.jpeg',
        'images/car16.jpeg',
        'images/car17.jpeg',
        'images/car18.jpeg',
        'images/car19.jpeg',
        'images/car20.jpeg',
        // Add more images as needed
    ];

    let playerTurn = 1;
    let player1Score = 0;
    let player2Score = 0;
    const cards = document.querySelectorAll('.card');
    const playerTurnElement = document.getElementById('player-turn');
    const player1ScoreElement = document.getElementById('player1-score');
    const player2ScoreElement = document.getElementById('player2-score');

    cards.forEach(card => {
        card.addEventListener('click', function () {
            if (card.classList.contains('flipped')) return;

            const randomImage = images[Math.floor(Math.random() * images.length)];
            const points = Math.floor(Math.random() * 100) + 1;
            card.querySelector('.card-back').style.backgroundImage = `url(${randomImage})`;
            card.querySelector('.card-back').style.backgroundSize = 'cover';
            card.querySelector('.card-back').textContent = points;
            card.classList.add('flipped');

            if (playerTurn === 1) {
                player1Score += points;
                player1ScoreElement.textContent = player1Score;
                playerTurn = 2;
                playerTurnElement.textContent = "Player 2's Turn";
            } else {
                player2Score += points;
                player2ScoreElement.textContent = player2Score;
                playerTurn = 1;
                playerTurnElement.textContent = "Player 1's Turn";
            }

            setTimeout(() => {
                card.classList.remove('flipped');
                card.querySelector('.card-back').textContent = '';
                card.querySelector('.card-back').style.backgroundImage = '';
            }, 2000);
        });
    });
});
