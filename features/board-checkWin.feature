Feature: Check for winner or if draw
  As a player I would like to see if I have won.
  So that we can play again.

  Scenario: When a player has won
    Given that a player has won
    Then winCheck should return an object with property winner with value 1 or 2
    And an array with the winning positions

  Scenario: When the board is full and nowinner
    Given that the board has no value of 0
    And no player has won
    Then it should return an object with property winner as “draw”

  Scenario: When game is in play
    Given that there is no winner and board contains value 0
    Then it should return false






