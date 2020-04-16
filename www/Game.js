class Game {

  constructor(addEventListener, Start)

  start()

  tellTurn()

}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };