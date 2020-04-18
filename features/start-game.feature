      """
      Klassen Game
      Klassen Game ska innehålla följande metoder.
      (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

      constructor()
      Metoden ska anropa metoderna addEventListener och start (i denna ordning).

      start()
      Metoden ska skapa ett ny instans av Board och skicka nuvarande instans av
      Game till dess konstruktor. Instansen ska lagras i egenskapen board.

      // Done
      tellTurn(player)
      Metoden ska ta emot inargumentet player som ska vara ett heltal (1 eller 2).
      Om så inte är fallet ska felet “player must be 1 or 2” kastas.

      Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll
      till texten “Röds tur…” om player har värdet 1 och
      till texten “Guls tur…” om player har värdet 2.

      // Done
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

      addEventListener()
      Metoden ska addera en händelselyssnare/funktion för click-händelser till
      elementet med css-klassen message i DOM:en.

      Händelselyssnaren ska detektera om man har klickat på knappen med
      css-klassen again och i så fall anropa metoden start.
      """

  Scenario: The game can only accept 2 players
    Given that the board game only accepts 1 or 2 players
    And if there is not 1 or 2 players
    Then it should return player must be 1 or 2

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