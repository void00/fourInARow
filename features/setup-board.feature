Feature: Beginning of a new game
  Testing things when a new game is getting started.


  Scenario: A new Game creates a new board
    Then game should be of an instance of Game
    And it should create a matrix 6 x 7 with 0 in all cells
    And currentPlayer should be 1
    And playInProgress should be false

  Scenario: A board is renderd on screen
    Given  that a new board is created
    Then addEventListener should be called
    And render should be called
    And currentPlayer should be passed to tellTurn as an argument

    And game should be of an instance of Game
    And it should create a matrix 7 x 6 with 0 in all cells
    And currentPlayers should be 1
    And playInProgress should be false

  Scenario: A board is renderd on screen
    Given that a new board is created with playInProgress set to false
    Then addEventListener should be called
    And then render should be called
    And currentPlayers should be passed to tellTurn as an argument