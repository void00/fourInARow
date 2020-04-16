Feature: Play Connect 4
  As a Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  # Some random scenarios (out of the many needed)
  # (these have no When - but there will be plenty that have)

  Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board


  Scenario: The game can only accept 2 players
    Given that the board game only accepts 1 or 2 players
    And if there is not 1 or 2 players
    Then it should return player must be 1 or 2

  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element