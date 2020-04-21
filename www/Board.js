class Board {
  constructor(game) {
    if (!game instanceof Game) throw console.error(' Game must be instance of game');
    this.game = game;
    this.matrix = [
      [1, 1, 1, 1, 0, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.playInProgress;
    this.currentPlayer = 1;
    this.playInProgress = false;
    this.winner;
    this.listener;
    this.addRestartButton();
    this.addEventHandlers();
    this.winCheck();
    this.render();

  }
  async makeMove(column) { }

  winCheck() {
    let combo = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '']
    ];

    console.log(this.matrix[0][1]);
    /*
        let check = playerLastPosition + 4;
        let checkRow = playerLastPosition;
        let checkDia = playerLastPosition;
        //Testing big time...
        for (playerLastPosition; check < playerLastPosition; playerLastPosition++) {
          for (let i = 0; i < 5; i++)
            if (this.matrix[i][playerLastPosition] === 1) {
              console.log('Winner');
            }
        }
        for (playerLastPosition; check < playerLastPosition; playerLastPosition++) {
          for (let i = 0; i < 3; i++)
            if (this.matrix[i][checkDia] === 1) {
              checkDia++;
              if (checkDia === playerLastPosition + 4)
                console.log('Winner');
            }
        }
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
    let $blockDiv, $playerDiv, u = 0;//, i = 0;

    for (let position of this.matrix) {// I think I'm doing this to many times
      for (let i = 0; i < this.matrix.length; i++) {
        for (let position in this.matrix[i]) {
          $blockDiv = document.createElement("div");
          $playerDiv = document.createElement("div");
          if (this.matrix[u][position] === 1) {
            $blockDiv.className = "yellow";
          }
          else if (this.matrix[u][position] === 2) {
            $blockDiv.className = "red";
          }
          $blockDiv.append($playerDiv);
          $container.append($blockDiv);
          i++;
        }
        u++;
      }

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

  markWin(combo) { }

  //addEventListener() { }

  //console.log(event.target);
  //console.log(event.target.closest('.matrix'));


  addEventHandlers() {
    $('body').addEventListener('click', (event) => {
      console.log(event);
    });

    //
    this.listener = (event) => {
      let $thing = event.target.closest('div');//div
      // something is not right, dont fetch board fetch the clicked child
      console.log('Testing listner matrix: ', event.target.closest('div'));
      if ($thing) {
        //$('.test-class').append($thing);//div
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

