Feature: Start the game
  start game
  # Jag vet inte vart denna fil hör hemma?
  Scenario: The game can only accept 2 players
    Given that the board game only accepts 1 or 2 players
    And if there is not 1 or 2 players
    Then it should return "player must be 1 or 2"

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

  Scenario: The game can only accept 2 players
    Given that the board game only accepts 1 or 2 players
    And if there is not 1 or 2 players
    Then it should return "player must be 1 or 2"

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

