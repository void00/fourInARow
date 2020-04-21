class Board {
  constructor(game) {
    if (!game instanceof Game) throw console.error(' Game must be instance of game');
    this.game = game;
    this.matrix = [
      [0, 2, 2, 2, 2, 0, 0],
      [2, 2, 2, 0, 0, 0, 0],
      [2, 2, 1, 0, 0, 0, 0],
      [1, 1, 1, 2, 2, 0, 0],
      [1, 1, 1, 2, 0, 0, 0],
      [2, 2, 1, 1, 2, 1, 2]
    ];
    this.playInProgress;
    this.currentPlayer = 1;
    this.playInProgress = false;
    this.winner;
    this.listener;
    this.addRestartButton();
    this.addEventHandlers();
    //this.winCheck();
    this.combo;
    this.render();

  }
  async makeMove(column) { }


  winCheck() {
    let draw = true;
    let currentPlayer = 1;
    let winningPlayer = new Object();
    winningPlayer.winner = currentPlayer;
    let combo = new Array(4);
    let width = this.matrix[0].length;
    let height = this.matrix.length;
    for (let row = 0; row < height; row++) {
      for (let cell = 0; cell < width; cell++) {
        let marker = this.matrix[row][cell];
        if (marker === 0) {// Hoppa över nollor och sätt draw till false
          continue;
          draw = false;
        }
        //Kolla horisontellt
        if (cell + 3 < width &&
          marker === this.matrix[row][cell + 1] &&
          marker === this.matrix[row][cell + 2] &&
          marker === this.matrix[row][cell + 3]) {
          for (let i = 0; i < 4; i++) {
            combo[i] = new Array(row, cell + i);
          }
          winningPlayer.combo = combo;
          return winningPlayer;
        }
        //Kolla vertikalt
        if (row + 3 < height) {
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
          //Kolla diagonalt höger
          if (cell + 3 < width &&
            marker === this.matrix[row + 1][cell + 1] &&
            marker === this.matrix[row + 2][cell + 2] &&
            marker === this.matrix[row + 3][cell + 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell + i);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          //Kolla diagonalt vänster
          if (cell - 3 >= 0 &&
            marker === this.matrix[row + 1][cell - 1] &&
            marker === this.matrix[row + 2][cell - 2] &&
            marker === this.matrix[row + 3][cell - 3]) {
            for (let i = 0; i < 4; i++) {
              combo[i] = new Array(row + i, cell - i);
            }
            winningPlayer.combo = combo;
            return winningPlayer;
          }
          else if (zeros === true) {
            return winningPlayer.winner = 'draw';
          }
        }
      }

      return false; // No winner.
    }


    /*let playerLastPosition = 0;
    //Testing big time...
   
   
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
            Diagonal loop start from active players position
        */
  }

  /*
  render()
      // Done
      Om spelare 1 har en bricka på en position ska det div-element som
      motsvarar positionen få css-klassen red. Om spelare 2 har en bricka på en
      position ska det div-element som motsvarar positionen få css-klassen yellow.
   
      // Done
      Metoden ska hitta elementet med css-klassen board i
      DOM:en och byta innehållet i detta element till en html-struktur med
      42 stycken div-element i rad. Dessa motsvarar de olika positionerna
      på brädet från det övre vänstra hörnet till det nedre högre hörnet.
   
      // Done
      Vart och ett av de 42 div-element som beskrivs ovan ska i sin tur
      innehålla ett div-element. Detta ska vara tomt.
      
      // Done
      Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.
  */
  render() {
    let $container = $(".board");
    let $blockDiv, $playerDiv;

    for (let row of this.matrix) {
      for (let cell of row) {
        $blockDiv = document.createElement("div");
        $playerDiv = document.createElement("div");
        //console.log(cell);
        //await sleep(16);// Just for fun, and test sleep.
        if (cell === 1) {
          $blockDiv.className = "yellow";
        }
        else if (cell === 2) {
          $blockDiv.className = "red";
        }
        $blockDiv.append($playerDiv);
        $container.append($blockDiv);
      }
    }
    this.winCheck();
  }

  markWin(combo) { }

  //addEventListener() { }



  addEventHandlers() {
    $('body').addEventListener('click', (event) => {
      console.log(event);
    });

    //
    this.listener = (event) => {
      let $thing = event.target.closest('div');//div
      if ($thing) {
        event.target.parentNode.className = 'yellow';// just for fun, test
      }

    };
    $('body').addEventListener('click', this.listener);


    // testing
    this.resetButtonListener = (event) => {
      this.removeEventHandlers();
    };
    $('.restart-button').addEventListener('click', this.resetButtonListener);

  }

  removeEventHandlers() {
    console.log('Testing: ', this.listener)
    $('body').removeEventListener('click', this.listener);
  }

  addRestartButton() {
    let $button = document.createElement('button');
    $button.className = 'restart-button';
    $button.innerHTML = 'Restart game';
    $('body').append($button);
  }


  //addEventListener();
  //render();
  //tellTurn(currentPlayer);



};

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

