// Simple tic tac toe game using good practice (e.g., closures, private methods etc)

// Set up player names
const setUp = (() => {
	
	const setplayers = (name) => {
		document.getElementsByClassName("player-form")[0].style.display = "none";
		document.getElementsByClassName("name")[0].textContent = name.length > 0? name : Players.player1.getName();
	}

	submit = document.getElementsByClassName("submit-button")[0]
	submit.addEventListener('click', () => {
		let name = document.getElementsByTagName("input")[0].value;
		setplayers(name)
		document.getElementsByClassName("board-container")[0].style.visibility = "visible"
		document.getElementsByClassName("player")[0].style.visibility = "visible"
		document.getElementsByClassName("form-container")[0].style.display = "none"
	})
})()

// Returns array of empty space: true == empty
const emptySpace = (board) =>{
	return board.map((a) => a.map((b) => b === 0));
}

// Basic AI - random computer move
const computerMove = () => {
	turn = emptySpace(gameBoard.getBoard())	
	takeTurn = true;
	while (takeTurn) {
		let row = parseInt(Math.random() * 3)
		let col = parseInt(Math.random() * 3)
		if (turn[col][row] === true) {
			takeTurn = false;
			return [col, row];
		}
	}
}

// Gameboard - main play function
const gameBoard = ((turn) => {

	// Define board array
	var board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
	var currentPlayer = undefined

	const checkWin = (score) => {
		stat = checkPlay()
		if (stat.score().includes(score)) 
		{
		  declareWinner(score)
			return true
		}
		return false
	}

	const declareWinner = (score) => {
		let userName = document.getElementsByClassName("name")[0].textContent;
		score === 3 ? setTimeout(() => alert(`${userName} Wins`), 100) : setTimeout(() => alert(`${Players.player2.getName()} Wins`), 100) 
	}
	
	// Checks for game over, and sets alerts
	const gameOver = (win) => {
		if (win === 'win') {
			setTimeout(() => location.reload(), 1000)
		} else {
			setTimeout(() => alert("Draw"), 100)
			setTimeout(() => location.reload(), 1000)
		}
	}
	
	// Returns event target
	const getTarget = (target) => {
		if (target.childNodes.length !== 0) {
			return target.firstChild;
		} else {
			return target
		}		
	}

	// addLister adds the piece to the board
	const addListener = (piece) => {
		piece.addEventListener('click', (event) => {

			// Make sure target is p element
			target = getTarget(event.target)

			// Get location
			var [col, row] = target.parentElement['id']
			
			// Only add mark if piece is empty
			if (target.textContent.length === 0 && currentPlayer !== Players.player2) {
				
				// User turn
				target.textContent = Players.player1.getMarker();  // Set marker on board
				board[parseInt(col)][parseInt(row)] = Players.player1.getValue();  // Add marker value to board array for calculating winner
				
				// Check for winner else check for draw
				if (checkWin(3)) { 
					gameOver('win');
					return
				}
				
				// Set current player
				currentPlayer = Players.player2

				// Computer turn
				setTimeout(() => {
					let move = computerMove()
					let compSquare = document.getElementById(move.join(''))
					compSquare.firstChild.textContent = Players.player2.getMarker()
					board[move[0]][move[1]] = Players.player2.getValue()
					currentPlayer = Players.player1
					// Check for winner else check for draw
					if (checkWin(-3)) { 
						gameOver('win');
						return
					}
				}, 1500)

				if (checkDraw(gameBoard.getBoard())) {
					gameOver('draw')
					return
				}
				
				
			}
		})
	}

	// Add listener to each piece to set play behaviour
	const boardPieces = document.getElementsByClassName("board-piece")
	for (i = 0; i < boardPieces.length; i++) {
		addListener(boardPieces[i]);
	}
	
	const getBoard = () => {return board}	
	return {getBoard}

})();

// Check for draw - returns true if draw
const checkDraw = (board) => {
	return (!(board.flat().includes(0))) 
}

// Sums each win dimension and returns array. +3 = User win. -3 Computer win.
const checkPlay = (board=undefined) => {
	
	t1 = board === undefined ? gameBoard.getBoard() : board
	
	col1 = t1[0].reduce((a,b) => a+b)
	col2 = t1[1].reduce((a,b) => a+b)
	col3 = t1[2].reduce((a,b) => a+b)
	row1 = t1[0][0] + t1[1][0] + t1[2][0]
	row2 = t1[0][1] + t1[1][1] + t1[2][1]
	row3 = t1[0][2] + t1[1][2] + t1[2][2]
	diagonalLR = t1[0][0] + t1[1][1] + t1[2][2]
	diagonalRL = t1[0][2] + t1[1][1] + t1[2][0]
	
	summedScores = [col1, col2, col3, row1, row2, row3, diagonalLR, diagonalRL]
	const score = () => {return summedScores}

	return {score}
}

// Player prototype object
const Player = (name, marker) => {
	const getName = () => {return name};
	const value = marker === "X" ? 1 : -1;
	const getMarker = () => {return marker}
	const getValue = () => {return value}

	return {getName, getMarker, getValue}
}

// Player object
const Player_X = (name, marker) => {
	const prototype = Player(name, marker);
	return Object.assign({}, prototype);
}

// Contains players
const Players = (() => {
	const player1 = Player_X("Player 1", 'X');
	const player2 = Player_X("Computer", 'O');
	return {player1, player2}
})()



