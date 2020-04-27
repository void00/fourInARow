class Board {

  constructor(game) {
    if (!game instanceof Game) { throw (new Error(' Game must be instance of game')); }
    this.game = game;
    this.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.playInProgress = 1;
    this.currentPlayer;
    this.playInProgress = false;
    this.winner;
    this.listener;
    //this.addRestartButton();
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
      // things left to write here when we have
      // written winCheck
    }
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1; // switch player
    this.game.tellTurn(this.currentPlayer);
    this.playInProgress = false;
    return true;
  }

  // winCheck fungerar inte 100%, mer testning krävs. 
  winCheck() {
    //let currentPlayer = 1;// Temporary player holder

    let winningPlayer = {};
    winningPlayer.winner = this.currentPlayer;
    let combo = new Array(4);// Winning positions

    let draw = true;

    let width = this.matrix[0].length;
    let height = this.matrix.length;
    // let row = 0, cell = 0;
    let counter = 0;

    for (let row = 0; row < height; row++) {
      console.log('Check row: ' + row);
      //counter++;
      for (let cell = 0; cell < width; cell++) {
        console.log('Check cell: ' + cell);
        let marker = this.matrix[row][cell];//Check from this cell positon 
        //console.log('Check cell: ' + cell + ' row: ' + row + ' round: ' + counter + ' marker: ' + marker);
        //counter++;
        if (marker === 0) {// Hoppa över nollor och sätt draw till false
          draw = false;
          continue;
        }
        console.log('Marker: ' + marker);
        //Kolla horisontellt
        //console.log('Kolla horisontellt ' + cell +' : ' + row + ' draw: ' + draw);
        if (cell + 3 < width &&
          marker === this.matrix[row][cell + 1] &&
          marker === this.matrix[row][cell + 2] &&
          marker === this.matrix[row][cell + 3]) {
          for (let i = 0; i < 4; i++) {// Det är nog en bugg här
            combo[i] = new Array(row, cell + i);
          }
          console.log(combo[0], combo[1], combo[2], combo[3]);
          winningPlayer.combo = combo;
          return winningPlayer;
        }
        //console.log(this.matrix[row][cell]);
        //Kolla vertikalt
        if (row + 3 < height) {
          console.log('Kolla vertikalt ' + cell + ': ' + row + ': ' + this.matrix[row][cell] + 'height:' + height);
          if (
            marker === this.matrix[row + 1][cell] &&
            marker === this.matrix[row + 2][cell] &&
            marker === this.matrix[row + 3][cell]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell);
            }
            console.log(combo[0], combo[1], combo[2], combo[3]);
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          //Kolla diagonalt höger
          //console.log('Kolla diagonalt höger ' + cell, +' : ' + row);
          if (cell + 3 < width &&
            marker === this.matrix[row + 1][cell + 1] &&
            marker === this.matrix[row + 2][cell + 2] &&
            marker === this.matrix[row + 3][cell + 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell + i);
            }
            console.log(combo[0], combo[1], combo[2], combo[3]);
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          //Kolla diagonalt vänster
          //console.log('Kolla diagonalt vänster ' + cell +' : ' + row);
          if (cell - 3 >= 0 &&
            marker === this.matrix[row + 1][cell - 1] &&
            marker === this.matrix[row + 2][cell - 2] &&
            marker === this.matrix[row + 3][cell - 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell - i);
            }
            console.log(combo[0], combo[1], combo[2], combo[3]);
            winningPlayer.combo = combo;
            return winningPlayer;
          }
        }
      }
      if (draw === true) {
        console.log('DRAW!');
        return winningPlayer.winner = 'draw';
      }
    }
    return false;// No winner, no draw keep going.


    /*
    //Thinking big time... remove this when 100% check in winCheck() is done.
         Random game with player 2 winner diagonal down from row2,col1 to row5,col4
            __1_2_3_4_5_6_7
            0  
            1       1
            2 2 2   1   
            3 1 2 2 2
            4 1 1 2 1 2
            5 1 1 1 2 2 1 2
        
            Check diagonalt upp (--) om över eller = 3. neråt (++) om den är under eller = 3 samt baklänges.
            (1,2) if 1 or 2 v do (1++,2++), (2,3)v (2++,3++) (3,4)v (3++,4++) (4,5)v   Winner
            Diagonal loop start from 0,0 etc...
        */
  }


  render() {
    /*
    Om spelare 1 har en bricka på en position ska det div-element som
  motsvarar positionen få css - klassen red.Om spelare 2 har en bricka på en
  position ska det div - element som motsvarar positionen få css - klassen yellow.

  // Done
  Metoden ska hitta elementet med css - klassen board i
  DOM: en och byta innehållet i detta element till en html - struktur med
  42 stycken div - element i rad.Dessa motsvarar de olika positionerna
  på brädet från det övre vänstra hörnet till det nedre högre hörnet.

  // Done
  Vart och ett av de 42 div - element som beskrivs ovan ska i sin tur
  innehålla ett div - element.Detta ska vara tomt.

  // Done
  Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM: en.
  */
    let markers = this.matrix;
    let $container = $(".board");
    let $blockDiv, $playerDiv, u = 0, i = 0;
    $('.board').innerHTML = ''; // empty the board before draing new slots
    for (let position of this.matrix) {
      for (let i = 0; i < 6; i++) {
        for (let position in this.matrix[i]) {
          $blockDiv = document.createElement("div");
          $playerDiv = document.createElement("div");
          if (markers[u][i] == 1) {
            //$playerDiv.innerHTML = markers[u][i];
            $blockDiv.className = "red";
          }
          else if (markers[u][i] === 2) {
            //$playerDiv.innerHTML = markers[u][i];
            $blockDiv.className = "yellow";
          }

          $blockDiv.append($playerDiv);
          $container.append($blockDiv);
          i++;
        }
        /*if (cell === 2) {
          $blockDiv.className = "red";
        }/*/
        $blockDiv.append($playerDiv);
        $container.append($blockDiv);// Building new board from matrix
      }



      /*for (let i = 0; i < markers; i++) {
        $blockDiv = document.createElement("div");
        //$blockDiv.className = "block";
        $playerDiv = document.createElement("div");
        //$playerDiv.className = "player";
        $blockDiv.append($playerDiv);
        $container.append($blockDiv);

      }*/
    }
  }

  markWin(combo) { }

  //addEventListener() { }



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
    //console.log('Testing: ', this.listener)
    $('body').removeEventListener('click', this.listener);
  }

  /*addRestartButton() {// Flyttad till Game won()
    let $button = document.createElement('button');
    $button.className = 'restart-button';
    $button.innerHTML = 'Restart game';
    $('body').append($button);
  }*/


  //addEventListener();
  //render();
  //tellTurn(currentPlayer);

};

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

