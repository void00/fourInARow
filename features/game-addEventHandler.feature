Feature:The game should have a button for play again
  So we can restart

  Scenario:The game should add a reset button when won or draw is made
    When the game is over
    Then there should be a button added in the message div
    And button should have the class again
    And the button should have the text "Spela igen"

