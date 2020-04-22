class Game {

  constructor() {
    this.board = {};
    this.addEventHandler();
    this.start();
    this.listener;
  }

  start() {
    this.board = new Board(this);
  }

  tellTurn(player) {
    if (player !== 1 && player2) throw console.error('player must be 1 or 2')
    if (player === 1) { $('.message').innerHTML = 'Röds tur...'; } else $('.message').innerHTML = 'Guls tur...';
  }

  over(won) {
    if (won !== 1 && won !== 2 && won !== 'draw') throw console.error(' won must be "draw", 1 or 2');
    let message = 'Det blev oavgjort!';
    switch (won) {
      case 1: message = "Röd vann!"; break;
      case 2: message = 'Gul vann!'; break;
    }
    //$('.message').innerHTML = message + ' <button type="button" id = "PlayAgainbutton"> Play Again</button>';
    let $button = document.createElement('button');
    $button.className = 'again';
    $button.innerHTML = message + ' Spela igen';
    $('.message').append($button);
  }

  addEventHandler() {
    $('.message').addEventListener('click', event => {
      //if (event.target.closest('again')) {
      // this.start();
      //   }
    });

    this.listener = (event) => {
      let $thing = event.target.closest('.message');
      if ($thing) {
        //console.log(event + ' : Event i game klassen');
        this.start();
      }
    };
    $('.message').addEventListener('click', this.listener);
  }

}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
