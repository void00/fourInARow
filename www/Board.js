class Board {
  constructor(game) {
    this.game = game;
    this.matrix = [
      [1, 1, 1, 1, 0, 2, 1],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.playInProgress;
    this.currentPlayer;
    this.winner;
    this.listener;
    this.addBoardToDooM();
    this.addRestartButton();
    this.addEventHandlers();
    this.winCheck();
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
      Metoden ska hitta elementet med css-klassen board i
      DOM:en och byta innehållet i detta element till en html-struktur med
      42 stycken div-element i rad. Dessa motsvarar de olika positionerna
      på brädet från det övre vänstra hörnet till det nedre högre hörnet.

      Om spelare 1 har en bricka på en position ska det div-element som
      motsvarar positionen få css-klassen red. Om spelare 2 har en bricka på en
      position ska det div-element som motsvarar positionen få css-klassen yellow.

      Vart och ett av de 42 div-element som beskrivs ovan ska i sin tur
      innehålla ett div-element. Detta ska vara tomt.

      Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.
  */
  render() {
    /*for (let position of this.matrix) {

      //for (let i = 0; i < 6; i++) 
      for (let position in this.matrix[0]) {
        html += `<div>${position}<div></div></div>`;
      }
      //html += '<br>';
    }
    $div.innerHTML = html;
    $('.board').append($div);
    */
  }

  markWin(combo) { }

  //addEventListener() { }

  addBoardToDooM() {// test
    let $div1 = document.createElement('div');
    let $div2 = document.createElement('div');
    //$div.className = "board";
    let html = '';
    let html2 = '';
    //for (let u = 0; u < 5; u++)
    //for (let position in this.matrix)
    for (let position of this.matrix) {
      {
        //for (let i = 0; i < 6; i++) 
        for (let position in this.matrix[0]) {
          $div2.append($div1);
          //html2 += `<div></div>`;
          //html += document.createElement('div');
        }
        //html += '<br>';
      }
      $div2.innerHTML += html;
      $('.board').append($div2);
      //$('.board').append($div2);
      //$('body').append($div);
    }

  }

  //console.log(event.target);
  //console.log(event.target.closest('.matrix'));
  //

  addEventHandlers() {
    $('body').addEventListener('click', (event) => {
      console.log(event);
    });

    //
    this.listener = (event) => {
      let $thing = event.target.closest('.matrix');//div
      // something is not right 
      console.log('Testing listner matrix: ', event.target.closest('.matrix'));
      if ($thing) {
        $('.test-class').append($thing);//div
        event.target.className = 'green';// just for fun, test
      }

    };
    $('body').addEventListener('click', this.listener);


    // testing, semi working, dosen't reset but removes listener from body.
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

