// Initialize the current player to 'X'
let currentPlayer = 'X';

// Initialize the game board with empty strings, representing empty cells
let board = ['', '', '', '', '', '', '', '', ''];

// Set the game state to active
let gameActive = true;

// Function to check if there's a winner or a draw
const checkWin = () => {
  // Define all possible winning conditions
  const winConditions = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];

  // Iterate through each winning condition
  for (let condition of winConditions) {
    const [a, b, c] = condition;
    // Check if the cells in the current winning condition are all filled with the same player's symbol
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // If there's a winner, set the game state to inactive and return the winner's symbol
      gameActive = false;
      return board[a];
    }
  }

  // Check for a draw (no empty cells left and no winner)
  if (!board.includes('')) {
    // If it's a draw, set the game state to inactive and return 'draw'
    gameActive = false;
    return 'draw';
  }

  // If no winner and no draw, return null to continue the game
  return null;
};

// Function to handle the result of the game (win or draw)
const handleResult = (result) => {
  let resultDiv = document.querySelector("#main");
  if (result === 'draw') {
    // Display a draw message
    resultDiv.innerHTML = 'It is a Draw';
    resultDiv.className = 'alert alert-info';
  } else {
    // Display the winning player's message
    setStatus(`Player <span class="highlight">${result}</span> wins!`);
  }
};

// Function to update the game status message
const setStatus = (message) => {
  document.getElementById('status').innerHTML = message;
};

// Function to handle a player's move
const makeMove = (index) => {
  // Check if the game is active and the selected cell is empty
  if (gameActive && !board[index]) {
    // Update the board with the current player's symbol
    board[index] = currentPlayer;
    // Update the display of the selected cell
    document.getElementsByClassName('square')[index].innerText = currentPlayer;
    
    // Check if the move resulted in a win or draw
    const winner = checkWin();
    if (winner) {
      // Handle the result if there's a winner or a draw
      handleResult(winner);
    } else {
      // Switch the current player
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      // Update the status message for the next player's turn
      setStatus(`Player ${currentPlayer}'s turn`);
    }
  }
};

// Function to reset the game to its initial state
const resetGame = () => {
  // Reset the current player to 'X'
  currentPlayer = 'X';
  // Clear the game board
  board = ['', '', '', '', '', '', '', '', ''];
  // Set the game state to active
  gameActive = true;
  // Update the status message for the new game
  setStatus(`Player ${currentPlayer}'s turn`);
  // Clear the display of all cells
  document.querySelectorAll('.square').forEach(square => square.innerText = '');
};

// Set the initial status message for the game
setStatus(`Player ${currentPlayer}'s turn`);
