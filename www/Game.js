class Game {

  constructor() {
    this.playerNames = ["Röd", "Gul"];
    this.nameButton();
    this.start();
    this.addEventHandler();
    this.listener;


  }

  start() {
    //$('.playerName').style.display = 'block';//Show name changer
    this.board = new Board(this);
    //this.board = new BoardWithAI( this, 2); /// välj spelare 1 eller 2 för AI:n Obs! AIt väljer inte eget name
  }

  nameButton() {//Change name button added
    let $addNamesButton = document.createElement('button');
    $addNamesButton.setAttribute('type', 'button');
    $addNamesButton.className = 'nameButton';
    $addNamesButton.innerHTML = 'Byt namn!';
    $(".playerName").append($addNamesButton);
  }

  tellTurn(player) {
    if ($('.redPlayer') !== null || $('.yellowPlayer') !== null) {
      if ($('.redPlayer').value !== "Röd" || $('.yellowPlayer').value !== "Gul") {
        if ($('.redPlayer').value !== "Röd" && $('.redPlayer').value !== "")
          this.playerNames[0] = $('.redPlayer').value;
        if ($('.yellowPlayer').value !== "Gul" && $('.yellowPlayer').value !== "")
          this.playerNames[1] = $('.yellowPlayer').value;
      }
    }
    if (player !== 1 && player !== 2)
      throw (new Error('player must be 1 or 2'));
    else if (player === 1) {
      let forbiddenS = this.playerNames[1].charAt(this.playerNames[0].length - 1);
      if (forbiddenS === 's' || 'S')
        $('.message').innerHTML.slice(0, -1);
      $('.message').innerHTML = this.playerNames[0] + 's tur...';
    }
    else {
      let forbiddenS = this.playerNames[1].charAt(this.playerNames[0].length - 1);
      if (forbiddenS === 's' || 'S')
        $('.message').innerHTML.slice(0, -1);
      $('.message').innerHTML = this.playerNames[1] + 's tur...';
    }
  }

  over(won) {
    if (won !== 1 && won !== 2 && won !== 'draw')
      throw (new Error('won must be "draw", 1 or 2'));
    else if (won === 1) {
      let forbiddenS = this.playerNames[0].charAt(this.playerNames[0].length - 1);
      //console.log(forbiddenS);
      if (forbiddenS === 's' || 'S')
        $('.message').innerHTML.slice(0, -1);
      $('.message').innerHTML = this.playerNames[0] + ' vann!';
    }
    else if (won === 2) {
      let forbiddenS = this.playerNames[1].charAt(this.playerNames[0].length - 1);
      if (forbiddenS === 's' || 'S')
        $('.message').innerHTML.slice(0, -1);
      $('.message').innerHTML = this.playerNames[1] + ' vann!';
    }
    else
      $('.message').innerHTML = 'Det blev oavgjort!';

    //$('.playerName').style.display = 'block';

    let $playAgainButton = document.createElement('button');
    $playAgainButton.setAttribute('type', 'button');
    $playAgainButton.className = 'again';
    $playAgainButton.innerHTML = 'Spela igen';
    $(".message").append($playAgainButton);
  }



  addEventHandler() {
    this.listener = (event) => {
      if (event.target.className === 'again') { this.start(); }
      else if (event.target.className === 'nameButton') { this.start(); }
    }
    $('.nameButton').addEventListener('click', this.listener);
    $('.message').addEventListener('click', this.listener);
  }

}
// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };
