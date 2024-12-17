const board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

let currentPlayer = "X";

function printBoard() {
  console.clear();
  console.log("   |   |   ");
  console.log(` ${board[0][0]} | ${board[0][1]} | ${board[0][2]} `);
  console.log("___|___|___");
  console.log(` ${board[1][0]} | ${board[1][1]} | ${board[1][2]} `);
  console.log("___|___|___");
  console.log(` ${board[2][0]} | ${board[2][1]} | ${board[2][2]} `);
  console.log("   |   |   ");
}

function makeMove() {
  const rowCol = prompt("Enter the rowCol: ").split("");
  const row = parseInt(rowCol[0]);
  const col = parseInt(parseInt(rowCol[1]));

  if (board[row][col] === " ") {
    board[row][col] = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  } else {
    console.log("Invalid move. Try again.");
    makeMove();
  }
  printBoard();
}

function checkWin() {
  for (let i = 0; i < 3; i++) {
    if (
      (board[i][0] == board[i][1] &&
        board[i][1] == board[i][2] &&
        board[i][0] != " ") ||
      (board[0][i] == board[1][i] &&
        board[1][i] == board[2][i] &&
        board[0][i] != " ")
    ) {
      return true;
    }
    if (
      (board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] &&
        board[0][0] != " ") ||
      (board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[0][2] != " ")
    ) {
      return true;
    }

    return false;
  }
}

function checkDraw() {
  const isFull = board.every((arrays) => arrays.every((arr) => arr !== " "));
  const matchWon = checkWin();
  if (isFull && !matchWon) {
    return true;
  }

  return false;
}

function playGame() {
  while (true) {
    const isSpaceAvailable = board.some((arrays) =>
      arrays.some((arr) => arr === " ")
    );
    const previousPlayer = currentPlayer == "X" ? "Player O" : "Player X";

    if (checkWin()) {
      console.log("GAME OVER!");
      console.log(previousPlayer + " Won!!!");
    } else if (checkDraw()) {
      console.log("GAME OVER!");
      console.log("IT'S DRAW!");
    }

    if (isSpaceAvailable) {
      makeMove();
    } else {
      return;
    }
  }
}

playGame();
