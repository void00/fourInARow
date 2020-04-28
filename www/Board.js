class Board {

  constructor(game) {
    if (!game instanceof Game) { throw (new Error(' Game must be instance of game')); }
    this.game = game;
    this.matrix = Array(6).fill().map(() => Array(7).fill(0));
    /*this.matrix = [
      [0, 0, 0, 1, 2, 1, 2],
      [0, 0, 0, 1, 2, 1, 2],
      [0, 0, 0, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];*/
    this.currentPlayer = 1;
    this.playInProgress = false;
    //this.winner;
    //this.listener;
    this.addEventListener();
    this.game.tellTurn(this.currentPlayer);
    //this.winCheck();
    this.render();
  }

  async makeMove(column) {
    if (!Number.isInteger(column) || column > 6 || column < 0) {
      throw (new Error('column must be an integer between 0 and 6'))
    }
    if (this.playInProgress) { return null; }
    if (this.matrix[0][column] !== 0) { return false; } // the column is full
    this.playInProgress = true;
    let row = 0;
    while (true) {
      this.matrix[row][column] = this.currentPlayer;
      this.render();
      await sleep(50);
      if (row + 1 < 6 && this.matrix[row + 1][column] === 0) { // the slot has room to fall down
        this.matrix[row][column] = 0; // remove the slot
        row++; // go to next row
      }
      else { // the slot can't fall any further
        break; // exit the loop
      }
    }
    if (this.winCheck()) {
      this.markWin(this.winCheck().combo);
      this.game.over(this.winCheck().winner);
      return true;
    }
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // switch player
    this.game.tellTurn(this.currentPlayer);
    this.playInProgress = false;
    return true;
  }

  markWin(combo) {
    let position;
    for (let match of combo) {
      position = match[0] * 7 + match[1];//Make winning position flat
      let $children = [...$('.board').children];
      //for (let child of $children)
      for (let child = 0; child < $children.length; child++) {
        if (position === child)//Check if div child is a winner
          $children[child].className = 'win';//Set winning div to winner
      }
    }
  }

  winCheck() {
    let winningPlayer = {};
    winningPlayer.winner = this.currentPlayer;
    let combo = new Array(4);// Winning positions
    let draw = true;
    let width = this.matrix[0].length;
    let height = this.matrix.length;

    for (let row = 0; row < height; row++) {
      for (let cell = 0; cell < width; cell++) {
        let marker = this.matrix[row][cell];//Check from this cell positon 
        if (marker === 0) {// Find empty space and set draw to false
          draw = false;
          continue;
        }
        else if (cell + 3 < width &&//Check horizontal
          marker === this.matrix[row][cell + 1] &&
          marker === this.matrix[row][cell + 2] &&
          marker === this.matrix[row][cell + 3]) {
          for (let i = 0; i < 4; i++) {
            combo[i] = new Array(row, cell + i);
          }
          winningPlayer.combo = combo;
          return winningPlayer;
        }
        else if (row + 3 < height) {//Check vertical
          if (
            marker === this.matrix[row + 1][cell] &&
            marker === this.matrix[row + 2][cell] &&
            marker === this.matrix[row + 3][cell]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          else if (cell + 3 < width &&//Check diagonal right
            marker === this.matrix[row + 1][cell + 1] &&
            marker === this.matrix[row + 2][cell + 2] &&
            marker === this.matrix[row + 3][cell + 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell + i);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          else if (cell - 3 >= 0 &&//Check diagonal left
            marker === this.matrix[row + 1][cell - 1] &&
            marker === this.matrix[row + 2][cell - 2] &&
            marker === this.matrix[row + 3][cell - 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell - i);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
        }
      }
      if (draw === true) {//Check if it's a draw
        winningPlayer.winner = 'draw';
        winningPlayer.combo = 'draw';
        return winningPlayer;
      }
    }
    return false;// No winner, no draw keep going.
  }

  render() {
    let $container = $(".board");// Copy board to local
    $(".board").innerHTML = "";// Remove old board
    let $blockDiv, $playerDiv;
    for (let row of this.matrix) {
      for (let cell of row) {
        $blockDiv = document.createElement("div");
        $playerDiv = document.createElement("div");
        if (cell === 1) {
          $blockDiv.className = "red";
        }
        else if (cell === 2) {
          $blockDiv.className = "yellow";
        }
        $blockDiv.append($playerDiv);
        $container.append($blockDiv);// Building new board from matrix
      }
    }
  }

  addEventListener() {
    this.listener = (event) => {
      let $slot = event.target.closest('.board > div');
      let $allSlots = [...$$('.board > div')];
      let whichColumn = $allSlots.indexOf($slot) % 7;
      this.makeMove(whichColumn);
    }
    $('.board').addEventListener('click', this.listener);
  }

};

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

