Feature: Make a move in the game
  Enable player to make a move in the game

  Scenario: Player makes a move
    Given That a player have made a move
    Then makeMove returns null when PlayInProgress is set to true
    And makeMove should return false when column is full
    And PlayInProgress is set to true
    And call render
    And call sleep for pause 50 ms
    And method winCheck should be called to look for winner (for in a row)
    And the property currentPlayer is set in type number of the value 1 or 2 whoever is the next player in turn
    And the game tellTurn method is called with board currentPlayer as an argument
    And playInProgress property should be set to false
    And the method makeMove should return true


