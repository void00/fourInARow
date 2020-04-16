class Game {

  constructor() { }

  start() { }

  tellTurn() { }

}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Game = Game };