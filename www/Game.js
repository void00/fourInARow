class Game {

  constructor() {
    this.board;
    //this.addEventListener();
    this.start();
  }

  start() {
    this.board = new Board(this);
  }

  tellTurn(player) {
    if (player !== 1 && player2) throw console.error('player must be 1 or 2')
    if (player === 1) { $('message').innerHTML = 'Röds tur...'; } else $('message').innerHTML = 'Guls tur...';
  }

  over(won) {
    if (won !== 1 && won !== 2 && won !== 'draw') throw console.error(' won must be "draw", 1 or 2');
    let message = 'Det blev oavgjort';
    switch (won) {
      case 1: message = "Röd vann!"; break;
      case 2: message = 'Gul vann!'; break;
    }
    $('.message').innerHTML = message + ' <button type="button" id = "PlayAgainbutton"> Play Again</button>';
  }


}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
