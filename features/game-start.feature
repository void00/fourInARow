Feature: A game should be started with a board
  So we can play

  Scenario:The start method should create a board
    Given a game is created and start is called
    Then an instance of a board should be created
    And it should have an property of the game instance


# Metoden ska skapa ett ny instans av Board och skicka nuvarande instans av
# Game till dess konstruktor. Instansen ska lagras i egenskapen board.