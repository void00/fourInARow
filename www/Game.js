class Game {

  constructor() {
    this.start();
    this.addEventHandler();
    this.listener;
  }

  start() {
    this.board = new Board(this);
  }

  tellTurn(player) {
    if (player !== 1 && player !== 2)
      throw (new Error('player must be 1 or 2'));
    else if (player === 1)
      $('.message').innerHTML = 'Röds tur...';
    else
      $('.message').innerHTML = 'Guls tur...';
  }

  /*Metoden ska ta emot inargumentet won som ska ha värdet “draw”, 
  1 eller 2 . Om så inte är fallet ska felet ‘won must be “draw”, 1 or 2’ kastas.
  
  Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten
  
  “Det blev oavgjort!” om won är “draw”.
  “Röd vann!” om won är 1.
  “Gul vann!” om won är 2.
  Dessutom ska en knapp (button-element) läggas till i DOM-elementet med 
  css-klassen message. Knappen ska ha css-klassen again och texten “Spela igen”.
  */
  over(won) {
    let $button = document.createElement('button');
    $button.className = 'again';
    $button.innerHTML = ' Spela igen';
    $('body').append($button);
    console.log(won);
    if (won !== 1 && won !== 2 && won !== 'draw')
      throw (new Error(' won must be "draw", 1 or 2'));
    else if (won === 1)
      $('.message').innerHTML = 'Röd vann!';
    else if (won === 2)
      $('.message').innerHTML = 'Guls vann!';
    else
      $('.message').innerHTML = 'Det blev oavgjort';
  }


  /*
  switch (won) {
    case 1:
      $('.message').innerHTML = "Röd vann!";
      break;
    case 2:
      $('.message').innerHTML = 'Gul vann!';
      break;
  }
  //$('.message').innerHTML = message + ' <button type="button" id = "PlayAgainbutton"> Play Again</button>';
 
}*/

  addEventHandler() {
    $('body').addEventListener('click', event => {
      if (event.target.closest('.again')) {
        //this.start();
      }
    });

    this.listener = (event) => {
      let $thing = event.target.closest('.again');
      if ($thing) {
        //console.log(event + ' : Event i game klassen' + $thing);
        window.location.reload();//Kanske inte det bästa sättet men det funkar för nu.
        //this.start();
      }
    };
    $('body').addEventListener('click', this.listener);
  }

}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
