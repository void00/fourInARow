Feature: The game should beable to start and be clickeble
  So we can start playing the game

  Scenario: The game should be playeble
    Given that a new game is started
    Then start should be called
    And addEventHandler should be called