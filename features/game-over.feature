Feature:The game should beable to have a winner
  So we can have a looser


  Scenario: Check to see if there is a argument won
    Given over won is called
    Then check to see if wons value is draw, either 1 or 2. If not then expected error won must be draw, 1 or 2

  Scenario:If we have a winner
    Given we have a winner
    Then if won is 1 message element in DOM should read “Röd vann!”
    And if won is 2 message element in DOM should read “Gul vann!”

  Scenario:If game is over without winner
    Given the board is full and no winner is found
    Then if won is 'draw' message element in DOM should read “Det blev oavgjort!”
    And there should be an button with the text “Spela igen” and class again added to the message element.