document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('diceCanvas');
    const ctx = canvas.getContext('2d');

    function drawDice(number) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '100px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(number, canvas.width / 2, canvas.height / 2);
    }

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        drawDice(randomNumber);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            rollDice();
        }
    });

    drawDice(1);
});