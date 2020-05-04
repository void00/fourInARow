Feature: The game should be able to start and be clickable
  So we can start playing the game

  Scenario: The game should be playable
    Given that a new game is started
    Then start should be called
    And addEventHandler should be called

