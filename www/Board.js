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
  }
  async makeMove(column) { }

  winCheck() {
    /* Random game with player 2 winner diagonal down from row2,col1 to row5,col4
        __1_2_3_4_5_6_7
        0  
        1       1
        2 2 2   2   
        3 1 2 2 1
        4 1 1 2 2 2
        5 1 1 1 2 1 1 2
    
        Check diagonalt upp (--) om över eller = 3. neråt (++) om den är under eller = 3 samt baklänges.
        (1,2) if 1 or 2 v do (1++,2++), (2,3)v (2++,3++) (3,4)v (3++,4++) (4,5)v   Winner
        Diagonal loop start from active players position
    */
  }
  render() { }

  markWin(combo) { }

  addEventListener() { }

  removeEventListener() { }

}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };

