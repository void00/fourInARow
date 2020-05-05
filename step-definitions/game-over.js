require('./_include-all')();

module.exports = function () {


  let game = new Game;




  //Given over(won is called)

  this.Given(/^over won is called$/, function () {
    game.over(2);
  });

  //Then check to see if wons value is draw, either 1 or 2, 
  //If not then error "won must be "draw, 1 or 2" - 



  this.Then(/^check to see if wons value is draw, either (\d+) or (\d+), If not then error "([^"]*)"draw, (\d+) or (\d+)"$/, function () {
    expect(() => game.over(draw)).to.not.throw(Error,
      "Sending won as 'draw' should not throw any error"
    );
  });




}
