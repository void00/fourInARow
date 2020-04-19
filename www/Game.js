class Game {

  constructor() {
    this.board = {};
    this.addEventListener();
    this.start();
  }

  start() {
    this.board = new Board(this);
  }
  addEventListener() { }

  tellTurn(player) { }

  over(won) {
    // if ! won === draw,1,2 throw error and add button
  }

}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
