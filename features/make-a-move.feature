Feature: Make a move in the game
  Enable player to make a move in the game

  Scenario: Player makes a move
    Given that method returns null when PlayInProgress is set to true
    And method returns false when column is full

