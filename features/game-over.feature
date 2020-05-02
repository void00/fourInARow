Feature:The game should beable to have a winner
  So we can have a looser

  Scenario:The over method should take an argument with 'draw', 1 or 2
    Given this is false
    Then an error should be thrown with ‘won must be “draw”, 1 or 2’

  Scenario:If we have a winner
    Given we have a winner
    Then if won is 1 message element in DOM should read “Röd vann!”
    And if won is 2 message element in DOM should read “Gul vann!”

  Scenario:If game is over without winner
    Given the board is full and no winner is found
    Then if won is 'draw' message element in DOM should read “Det blev oavgjort!”
    And there should be an button with the text “Spela igen” and class again added to the message element

      """
      over(won)
      Metoden ska ta emot inargumentet won som ska ha värdet “draw”, 1 eller 2 .
      Om så inte är fallet ska felet ‘won must be “draw”, 1 or 2’ kastas.

      // Done
      Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten
      “Det blev oavgjort!” om won är “draw”.
      “Röd vann!” om won är 1.
      “Gul vann!” om won är 2.
      Dessutom ska en knapp (button-element) läggas till i DOM-elementet med css-klassen message.
      Knappen ska ha css-klassen again och texten “Spela igen”.
      """