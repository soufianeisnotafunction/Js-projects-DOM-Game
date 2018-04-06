const playerOneScore = document.getElementById('player-one-score')
const playerOneCurrentScore = document.getElementById('player-one-current-score')
const playerTwoScore = document.getElementById('player-two-score')
const playerTwoCurrentScore = document.getElementById('player-two-current-score')
const newGameButton = document.getElementById('new-game')
const rollDiceButton = document.getElementById('roll-dice')
const holdButton = document.getElementById('hold')

function randomNumber(){
	return Math.floor(Math.random()*6 +1)
}

module.exports = randomNumber