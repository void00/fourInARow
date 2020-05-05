Feature: Make a move in the game
  Enable player to make a move in the game

  Scenario: Player makes a move
    Given That a player have made a move
    Then makeMove returns null when PlayInProgress is set to true
    And makeMove should return false when column is full
    And makeMove should throw "column must be an integer between 0 and 6" if marker placed out of column
    And PlayInProgress is set to true

  Scenario:Player is droping marker in board
    Given Player is making a valid move
    And drops the marker in column
    And check if column added a marker
    And call render
    And call sleep for pause 50 ms
    And check if column looks right
    And method winCheck should be called to look for winner (for in a row) or a draw

  Scenario:Winner or draw is announced
    Given The last draw is made
    Then removeEventListener should be called
    And winCheck is returning an object with property combo markWin should be called with winCheck as an argument
    And game over method should get winChecks winner property value as an argument
    And makeMove should return true

  Scenario:When player made a move
    Given no winner nor draw
    Then the property currentPlayer are switched
    And the game tellTurn method is called with board currentPlayer as an argument
    And playInProgress property should be set to false
    And the method makeMove should return true


