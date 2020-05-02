Feature:The game should swtich between two players
      So one player can be a winner and the other a loser
      """
      tellTurn(player)
      Metoden ska ta emot inargumentet player som ska vara ett heltal (1 eller 2).
      Om så inte är fallet ska felet “player must be 1 or 2” kastas.

      Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess
      innehåll till texten “Röds tur…”
      om player har värdet 1 och till texten “Guls tur…” om player har värdet 2.
      """

  Scenario: The Game class should have a method tellTurn that takes a player with value 1 or 2 if not error should be thrown
    Given player have value not equal to 1 or 2
    Then if that player is passed to tellTurn should throw “player must be 1 or 2”

  Scenario: When player has used it's turn second player should be reminded about it's turn
    Given player 1 have made its draw and no winner or draw is announced
    Then message element in the DOM should get the text “Guls tur…”