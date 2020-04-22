class Board {
  constructor(game) {
    if (!game instanceof Game) throw console.error(' Game must be instance of game');
    this.game = game;
    this.matrix = [
      [2, 1, 2, 2, 0, 2, 2],
      [1, 1, 2, 0, 0, 0, 0],
      [2, 2, 1, 2, 0, 0, 0],
      [0, 1, 0, 0, 2, 0, 0],
      [2, 1, 1, 2, 2, 0, 0],
      [2, 2, 1, 0, 1, 1, 2]
    ];
    this.playInProgress;
    this.currentPlayer;
    this.playInProgress = false;
    this.winner;
    this.listener;
    this.combo;
    this.addEventHandlers();
    this.render();
    //this.removeEventHandlers();
    //this.winCheck();

  }
  async makeMove(column) { }

  // winCheck fungerar inte 100% tror ja, mer testning krävs nog
  winCheck() {
    let currentPlayer = 2;// Temporary player holder

    let winningPlayer = new Object();
    winningPlayer.winner = currentPlayer;
    let combo = new Array(4);// Winning positions

    let draw = true;

    let width = this.matrix[0].length;
    let height = this.matrix.length;
    //let counter = 0;

    for (let row = 0; row < height; row++) {
      //console.log('Check row: ' + row);
      //counter++;
      for (let cell = 0; cell < width; cell++) {
        let marker = this.matrix[row][cell];//Check from this cell positon 
        //console.log('Check cell: ' + cell + ' row: ' + row + ' round: ' + counter + ' marker: ' + marker);
        //counter++;
        if (marker === 0) {// Hoppa över nollor och sätt draw till false
          draw = false;
          continue;
        }
        //Kolla horisontellt
        //console.log('Kolla horisontellt ' + cell, +' : ' + row + ' draw: ' + draw);
        if (cell + 3 < width &&
          marker === this.matrix[row][cell + 1] &&
          marker === this.matrix[row][cell + 2] &&
          marker === this.matrix[row][cell + 3]) {
          for (let i = 0; i < 4; i++) {// Det är nog en bugg här
            combo[i] = new Array(row, cell + i);
          }
          //console.log(combo[0], combo[1], combo[2], combo[3]);
          winningPlayer.combo = combo;
          return winningPlayer;
        }
        //Kolla vertikalt
        if (row + 3 < height) {
          //console.log('Kolla vertikalt ' + cell, +' : ' + row);
          if (
            marker === this.matrix[row + 1][cell] &&
            marker === this.matrix[row + 2][cell] &&
            marker === this.matrix[row + 3][cell]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell);
            }
            //console.log(combo[0], combo[1], combo[2], combo[3]);
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
            //console.log(combo[0], combo[1], combo[2], combo[3]);
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          //Kolla diagonalt vänster
          //console.log('Kolla diagonalt vänster ' + cell, +' : ' + row);
          if (cell - 3 >= 0 &&
            marker === this.matrix[row + 1][cell - 1] &&
            marker === this.matrix[row + 2][cell - 2] &&
            marker === this.matrix[row + 3][cell - 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell - i);
            }
            //console.log(combo[0], combo[1], combo[2], combo[3]);
            winningPlayer.combo = combo;
            return winningPlayer;
          }
        }
      }
      if (draw === true) {
        return winningPlayer.winner = 'draw';
      }
      return false; // No winner, no draw keep going.
    }


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
    let $container = $(".board");// Copy board to local
    $(".board").innerHTML = "";// Remove old board
    let $blockDiv, $playerDiv;


    for (let row of this.matrix) {
      for (let cell of row) {
        $blockDiv = document.createElement("div");
        $playerDiv = document.createElement("div");
        //await sleep(16);// Just for async fun, and test sleep.
        if (cell === 1) {
          $blockDiv.className = "yellow";
        }
        else if (cell === 2) {
          $blockDiv.className = "red";
        }
        $blockDiv.append($playerDiv);
        $container.append($blockDiv);// Building new board from matrix
      }
    }
    this.winCheck();// Move this call to makeMove() 
  }

  markWin(combo) { }

  //addEventListener() { }



  addEventHandlers() {
    $('body').addEventListener('click', (event) => {
      //console.log(event);
    });

    //
    this.listener = (event) => {
      let $thing = event.target.closest('div');//div
      if ($thing) {
        event.target.parentNode.className = 'yellow';// just for fun, test
        // add current player draw to matrix
      }

    };
    $('body').addEventListener('click', this.listener);


    // testing
    /* this.resetButtonListener = (event) => {
       this.removeEventHandlers();
     };
     $('.restart-button').addEventListener('click', this.resetButtonListener);*/

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

