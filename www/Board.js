class Board {
  constructor(game) {
    if (!game instanceof Game) throw console.error(' Game must be instance of game');
    this.game = game;
    this.matrix = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ];
    this.playInProgress;
    this.currentPlayer = 1;
    this.playInProgress = false;
    this.winner;
    this.listener;
    this.addBoardToDOM();
    this.addRestartButton();
    this.addEventHandlers();
  }
  async makeMove(column) { }

  winCheck() {
    let combo = [
      ['', ''],
      ['', ''],
      ['', ''],
      ['', '']
    ];

    //if ();
    /* Random game with player 2 winner diagonal down from row2,col1 to row5,col4
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
  render() { }

  markWin(combo) { }

  //addEventListener() { }




  addBoardToDOM() {
    let $div = document.createElement('div');
    $div.className = "board";
    let html = '<h4>Board</h4>'
    //for (let u = 0; u < 5; u++)
    //for (let position in this.matrix)
    for (let position of this.matrix) {//Does this loop work?? No, have to loop next array
      {
        //for (let i = 0; i < 6; i++) 
        for (let position in this.matrix[0]) {
          html += `<div class="matrix">${position}</div>`;
        }
        //html += '<br>';
      }
      $div.innerHTML = html;
      $('.board').append($div);
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
      let $thing = event.target.closest('.matrix');
      // something is not right 
      console.log('Testing listner matrix: ', event.target.closest('.matrix'));
      if ($thing) {
        $('.test-class').append($thing);
        event.target.className = 'green';// just for fun, should be currentPlayer
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
  //addBoardToDOM();
  //tellTurn(currentPlayer);



};

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

