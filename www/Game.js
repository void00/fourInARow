class Game {

  constructor() {
    this.start();
    this.addEventHandler();
    this.listener;
  }

  start() {
    this.redPlayer = 'Röd';
    this.yellowPlayer = 'Gul';
    // this.board = new Board(this);
    this.board = new BoardWithAI(this, 2); // välj spelare 1 eller 2 för AI:n
  }

  tellTurn(player) {
    if (player !== 1 && player !== 2)
      throw (new Error('player must be 1 or 2'));
    else if (player === 1)
      $('.message').innerHTML = this.redPlayer + 's tur...';
    else
      $('.message').innerHTML = this.yellowPlayer + 's tur...';
  }


  over(won) {
    let $button = document.createElement('button');
    $button.setAttribute('type', 'button');
    $button.className = 'again';
    $button.innerHTML = 'Spela igen';

    if (won !== 1 && won !== 2 && won !== 'draw')
      throw (new Error('won must be "draw", 1 or 2'));
    else if (won === 1)
      $('.message').innerHTML = this.redPlayer + ' vann!';
    else if (won === 2)
      $('.message').innerHTML = this.yellowPlayer + ' vann!';
    else
      $('.message').innerHTML = 'Det blev oavgjort!';

    $(".message").append($button);
  }
  /*
  Metoden ska ta emot inargumentet won som ska ha värdet “draw”, 
  1 eller 2 . Om så inte är fallet ska felet ‘won must be “draw”, 1 or 2’ kastas.
  
  Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten
  
  “Det blev oavgjort!” om won är “draw”.
  “Röd vann!” om won är 1.
  “Gul vann!” om won är 2.
  Dessutom ska en knapp (button-element) läggas till i DOM-elementet med 
  css-klassen message. Knappen ska ha css-klassen again och texten “Spela igen”.

    if (won !== 1 && won !== 2 && won !== 'draw') { throw (new Error(' won must be "draw", 1 or 2')) };
    let message = 'Det blev oavgjort';
    switch (won) {
      case 1: message = "Röd vann!"; break;
      case 2: message = 'Gul vann!'; break;
    }
    $('.message').innerHTML = message + ' <button type="button" id = "PlayAgainbutton"> Play Again</button>';
}
*/

  addEventHandler() {
    $('body').addEventListener('click', event => {
      if (event.target.closest('.again')) {
      }
    });

    this.listener = (event) => {
      let $thing = event.target.closest('.again');
      if ($thing) {
        //this.removeEventHandlers();
        this.start();
        //console.log(event + ' : Event i game klassen' + $thing);
        //window.location.reload();//Kanske inte det bästa sättet men det funkar innan remove är klar.   
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
