Feature: Make a move in the game
  Enable player to make a move in the game

  Scenario: Player makes a move
    Given that async returns null when PlayInProgress is set to true
    And async returns false when column is full
    Then PlayInProgress is set to true
    And it will call render
    Then
