require('./_include-all')();

module.exports = function () {

  class TestGame extends Game { }

  let game;
  let board;

  game = new TestGame();
  board = game.board;


  // over won is called 
  this.Given(/^over won is called$/, function () {
    game.over(2);
  });
  //should give error 
  this.Then(/^check to see if wons value is draw, either (\d+) or (\d+)\. If not then expected error won must be draw, (\d+) or (\d+)$/, function (arg1, arg2, arg3, arg4) {
    expect(() => game.over()).to.throw(Error, 'won must be "draw", 1 or 2');
  });
  // we have a winner 
  this.Given(/^we have a winner$/, function () {
  });
  // player1 won 
  this.Then(/^if won is (\d+) message element in DOM should read 'Röd vann!'$/, function (player1) {
    let $divs = $$('.board > div');
  });
  //player2 won  
  this.Then(/^if won is (\d+) message element in DOM should read 'Gul vann!'$/, function (player2) {
    expect($('div.message').innerHTML).to.equal('Gul vann!');
  });
  //Board full no winner found 
  this.Given(/^the board is full and no winner is found$/, function () {
    game = new Game();
    board.matrix = [
      [1, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [2, 1, 2, 1, 2, 1, 2],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1],
      [1, 2, 1, 2, 1, 2, 1]
    ];
  });

  this.Then(/^if won is 'draw' message element in DOM should read “Det blev oavgjort!”$/, function () {
    expect($('.message').innerHTML = 'Det blev oavgjort!');
  });

  this.Then(/^there should be an button with the text “Spela igen” and class again added to the message element.$/, function () {
    let str = '<button type="button" class="again">Spela igen</button>';
  });
}
