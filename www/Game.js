class Game {

  constructor() {
    this.playerNames = ["Röd", "Gul"];
    this.start();
    this.addEventHandler();
    this.listener;
  }

  start() {
    /*if ($('.redPlayer').value !== "Röd" || $('.yellowPlayer').value !== "Gul") {
      if ($('.redPlayer').value !== "Röd" && $('.redPlayer').value !== "")
        this.playerNames[0] = $('.redPlayer').value;
      if ($('.yellowPlayer').value !== "Gul" && $('.yellowPlayer').value !== "")
        this.playerNames[1] = $('.yellowPlayer').value;
    }*/
    this.board = new Board(this);
    //this.board = new BoardWithAI(this, 2); // välj spelare 1 eller 2 för AI:n Obs! AIt väljer inte eget namn
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

    let $playAgainButton = document.createElement('button');
    $playAgainButton.setAttribute('type', 'button');
    $playAgainButton.className = 'again';
    $playAgainButton.innerHTML = 'Spela igen';
    $(".message").append($playAgainButton);
  }

  addEventHandler() {
    this.listener = (event) => {
      let $addNamesButton = event.target.closest('.nameButton');
      let $playAgainButton = event.target.closest('.again');
      if ($playAgainButton) {
        $('.name').style.display = "block";
        this.start();
      }
      else if ($addNamesButton) {
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
