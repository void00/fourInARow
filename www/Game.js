class Game {

  constructor() {
    this.playerNames = ["Röd", "Gul"];
    this.start();
    this.addEventHandler();
    this.listener;
  }

  start() {
    if ($('.redPlayer').value !== "Röd" || $('.yellowPlayer').value !== "Gul") {
      if ($('.redPlayer').value !== "Röd" && $('.redPlayer').value !== "")
        this.playerNames[0] = $('.redPlayer').value;
      if ($('.yellowPlayer').value !== "Gul" && $('.yellowPlayer').value !== "")
        this.playerNames[1] = $('.yellowPlayer').value;
    }
    this.board = new Board(this);
    //this.board = new BoardWithAI(this, 1); // välj spelare 1 eller 2 för AI:n
  }

  tellTurn(player) {
    if (player !== 1 && player !== 2)
      throw (new Error('player must be 1 or 2'));
    else if (player === 1)
      $('.message').innerHTML = this.playerNames[0] + 's tur...';
    else
      $('.message').innerHTML = this.playerNames[1] + 's tur...';
  }


  over(won) {
    if (won !== 1 && won !== 2 && won !== 'draw')
      throw (new Error('won must be "draw", 1 or 2'));
    else if (won === 1)
      $('.message').innerHTML = this.playerNames[0] + ' vann!';
    else if (won === 2)
      $('.message').innerHTML = this.playerNames[1] + ' vann!';
    else
      $('.message').innerHTML = 'Det blev oavgjort!';

    let $button = document.createElement('button');
    $button.setAttribute('type', 'button');
    $button.className = 'again';
    $button.innerHTML = 'Spela igen';
    $(".message").append($button);
  }

  addEventHandler() {
    $('body').addEventListener('click', event => {
      if (event.target.closest('.again')) {
      }
      if (event.target.closest('.nameButton')) {
        this.start();
      }
    });

    this.listener = (event) => {
      let $thing = event.target.closest('.again');
      if ($thing) {
        $('.name').style.display = "block";
        this.start();
      }
    };
    $('body').addEventListener('click', this.listener);
  }

  removeEventHandlers() {
    $('body').removeEventListener('click', this.listener);
  }

}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
