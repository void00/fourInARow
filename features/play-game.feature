Feature: Play Connect 4
  As a Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  # Some random scenarios (out of the many needed)
  # (these have no When - but there will be plenty that have)


  Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board
    Then game should be of an instance of Game
    Then it should create a matrix 7 x 6 with 0 in all cells
    Examples:
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
      | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
    Then currentPlayers should be 1
    Then playInProgres should be false



  Scenario: The game can only accept 2 players
    Given that the board game only accepts 1 or 2 players
    And if there is not 1 or 2 players
    Then it should return player must be 1 or 2

  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element

  Scenario: A game should have two players
    Given that one player have used its turn
    Then it should be second players trun

  Scenario: A game should end
    Given that game not ended with 1,2 or draw
    Then it should return won must be draw, 1 or 2

  Scenario: A winner adds winner or draw to the .message element
    Given that wincheck has value true
    Then it should render “Röd vann!” if won is 1 as innerHTML of .message
    Then it should render “Gul vann!” if won is 2 as innerHTML of .message
    Then it should render “Det blev oavgjort!” if won is “draw” as innerHTML of .message
    And it should render a button with the text ”Spela igen” and css-class ”again”


