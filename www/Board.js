class Board {
  constructor(game) {
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
    this.currentPlayer;
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

  removeEventListener() {
    $('.matrix').removeEventListener('click', this.listener);
  }


  addBoardToDOM() {
    let $div = document.createElement('div');
    $div.className = "board";
    let html = '<h4>Board</h4>'
    for (let position of this.matrix) {// ?? Does this loop work??
      html += `<div class="matrix"><h4>${position}<h4></div>`;
    }
    $div.innerHTML = html;
    $('body').append($div);
  }

  //console.log(event.target);
  //console.log(event.target.closest('.matrix'));
  //

  addEventHandlers() {// testing
    $('body').addEventListener('click', (event) => {
      console.log(event);
    });

    //console.log('Testing: ', event.target.closest('.matrix'));
    this.listener = (event) => {
      let $thing = event.target.closest('.matrix');
      if ($thing) {
        $('.test-class').append($thing);// don't forget to make this class before testing
      }

    };
    $('body').addEventListener('click', this.listener);




    //$('.restar-button').addEventListener('click'), (event) => {
    //  this.removeEventHandlers();
    //}
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

