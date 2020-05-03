Feature: Make a move in the game
  Enable player to make a move in the game

  Scenario: Player makes a move
    Given that MakeMove returns null when PlayInProgress is set to true
    And MakeMove returns false when column is full
    And PlayInProgress is set to true
    And it will call render
    And call async helpers sleep for pause 50 ms
    And method winCheck should be called to look for winner (for in a row)
    And the property currentPlayer is set in type "number" of the
    value 1 or 2 whoever is the next player in turn
    And the game Tellturn method is called with board currentplayer as an argument
    And PlayInProgress property is set to false
    And the method MakeMove should return true


