class Board {

  constructor(game) {
    if (!game instanceof Game) { throw (new Error(' Game must be instance of game')); }
    this.game = game;
    this.matrix = Array(6).fill().map(() => Array(7).fill(0));
    /*this.matrix = [
      [0, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];*/
    this.currentPlayer = 1;
    this.playInProgress = false;
    this.winner;
    this.listener;
    this.addEventListener();
    this.winCheck();
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
      if (!this.markWin(this.winCheck().winner) === 'draw') {
        this.markWin(this.winCheck().combo);
      }
      this.game.over(this.winCheck().winner);
      return true;
    }
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // switch player
    this.game.tellTurn(this.currentPlayer);
    this.playInProgress = false;
    return true;
  }

  /*Metoden ska ta emot inargumentet combo - en array 
  skapad enligt specifikationerna som finns angivna för metoden winCheck.

  Metoden ska hitta de fyra div-element som 
  motsvarar positionerna angivna i combo och lägga 
  till css-klassen win till vart och ett av dessa div-element.

  Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.*/

  markWin(combo) {
    //if (!combo === 'draw') {
    let i, u;
    for (let i of combo) {
      u = i[0] * 7 + i[1];
      let $children = [...$('.board').children];//[...$$('.board > div')];//
      for (let c = 0; c < $children.length; c++) {
        if (c === u)
          $children[c].className = 'win';
      }
      //   }
    }

    /*
  for (let row = 0; row <= 3; row++) {// Write this as "for of" instead of ordinary for.
    for (let cell = 0; cell <= 1; cell++) {
      i = combo[row];
      u = i[0] * 7 + i[1];
      let $children = [...$$('.board > div')];
      for (let c = 0; c < $children.length; c++) {
        if (c === u)
          $children[c].className = 'win';
      }
    }
  }*/

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
        if (marker === 0) {// Hoppa över nollor och sätt draw till false
          draw = false;
          continue;
        }
        if (cell + 3 < width &&//Kolla horisontellt
          marker === this.matrix[row][cell + 1] &&
          marker === this.matrix[row][cell + 2] &&
          marker === this.matrix[row][cell + 3]) {
          for (let i = 0; i < 4; i++) {
            combo[i] = new Array(row, cell + i);
          }
          winningPlayer.combo = combo;
          return winningPlayer;
        }
        if (row + 3 < height) {//Kolla vertikalt
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
          if (cell + 3 < width &&//Kolla diagonalt höger
            marker === this.matrix[row + 1][cell + 1] &&
            marker === this.matrix[row + 2][cell + 2] &&
            marker === this.matrix[row + 3][cell + 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell + i);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          if (cell - 3 >= 0 &&//Kolla diagonalt vänster
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
      if (draw === true) {
        winningPlayer.winner = 'draw';
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

  removeEventHandlers() {
    $('body').removeEventListener('click', this.listener);
  }

};

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

