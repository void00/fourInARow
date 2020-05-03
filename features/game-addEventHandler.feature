Feature:The game should have a button for play again
  So we can restart

  Scenario:The game should add a reset button when won or draw is made
    Given the game is over
    Then there should be a button with an eventListener added in element message
    And when the button is clicked start should be called
