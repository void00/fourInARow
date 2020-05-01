class SimpleAI {

  constructor(board, me) {
    this.board = board;
    this.me = me;
    this.allCombos = this.calcAllCombos();
  }

  calcAllCombos() {
    let combos = [], a = [
      [[0, 0], [0, 1], [0, 2], [0, 3]],
      [[0, 0], [1, 0], [2, 0], [3, 0]],
      [[0, 0], [1, 1], [2, 2], [3, 3]],
      [[0, 0], [-1, 1], [-2, 2], [-3, 3]]
    ];
    for (let row = 0; row < 6; row++) {
      for (let column = 0; column < 7; column++) {
        for (let check of a) {
          combos.push(check.map(([r, c]) => [row + r, column + c]));
        }
      }
    }
    return combos.filter(co => co.every(([r, c]) =>
      r >= 0 && r <= 5 && c >= 0 && c <= 6)
    );
  }

  possibleMoves(matrix) {
    let moves = [];
    for (let c = 0; c <= 6; c++) {
      let p;
      for (let r = 0; r <= 5; r++) {
        !matrix[r][c] && (p = [r, c]);
      }
      p && moves.push(p);
    }
    return moves;
  }

  countColors(matrix, combo, color) {
    return combo.map(([r, c]) =>
      matrix[r][c]).filter(x => x === color).length;
  }

  async makeMove(me = this.me, matrix = this.board.matrix) {
    let op = 3 - me;
    let pm = this.possibleMoves(matrix);
    let l = this.allCombos.length;
    for (let move of pm) {
      let [r, c] = move;
      let matrixAfterMove = JSON.parse(JSON.stringify(matrix));
      matrixAfterMove[r][c] = me;
      move.score = 0;
      for (let combo of this.allCombos) {
        let b = { // before
          me: this.countColors(matrix, combo, me),
          op: this.countColors(matrix, combo, op)
        };
        let a = { // after
          me: this.countColors(matrixAfterMove, combo, me)
        };
        // the weights started out as Infinity, 6, 5, 4, 3, 2, 1
        // but have been tweaked during meeting a
        // perfect player AI (https://connect4.gamesolver.org/)
        // this AI can now win aginst the perfect AI if starting
        // (but does not always win when starting)
        move.score +=
          (a.me === 4 && Infinity) ||
          (b.op === 3 && b.me === 0 && a.me === 1 && l ** 6) ||
          (b.op === 2 && b.me === 0 && a.me === 1 && l ** 5) ||
          (b.op === 1 && b.me === 0 && a.me === 1 && l ** 3.05) ||
          (a.me === 3 && b.me === 2 && b.op === 0 && l ** 3) ||
          (a.me === 2 && b.me === 1 && b.op === 0 && l ** 3) ||
          (a.me === 1 && b.me === 0 && b.op === 0 && l ** 3) || 0;
      }
      if (this.me === me && move.score !== Infinity) {
        // adjust based on opponents best move after my move
        // for now only adjust if the opponent can win in next move
        let opscore = await this.makeMove(3 - me, matrixAfterMove);
        move.score -= opscore === Infinity ? opscore : 0;
      }
    }
    pm.sort((x, y) => {
      if (x.score === y.score) {
        if (x[0] > y[0]) { return -1; } // higher row prio
        return [-1, 1][Math.floor(Math.random() * 2)];
      }
      return x.score > y.score ? -1 : 1;
    });
    if (this.me !== me || this.me !== this.board.currentPlayer) {
      return (pm[0] || { score: 0 }).score;
    }
    console.log(pm)
    console.log('I rate my moves', pm.map(([_, c]) => c));
    await sleep(500); // pretend to think slow ;)
    await this.board.makeMove(pm[0][1], true);
  }

}