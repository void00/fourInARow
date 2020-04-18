      """
      winCheck()
      Ska titta på hela brädet och kontrollera om någon har vunnit
      eller om det har blivit oavgjort.

      Om någon har vunnit ska metoden returnera ett objekt.
      Objektet ska ha egenskaperna winner satt till
      vinnaren (1 eller 2), samt combo - en array av 4 arrayer,
      där varje inre array är en position på brädet [radnummer, kolumnnummer].

      Om det har blivit oavgjort ska metoden returnera ett objekt
      med egenskapen winner satt till strängen “draw”.

      Om ingen har vunnit och det inte har blivit oavgjort ska metoden
      returnera värdet false.
      """

  Scenario: Player has won
    Given that a player has won
    Then winCheck should return an object with property winner with value 1 or 2 and an array with the winning positions

  Scenario: Board is full and nowinner
    Given that the board has no value of 0
    And no player has won
    Then it should return an object with property winnes as “draw”

  Scenario: Game is in play
    Given that there is no winner and board contains value 0
    Then it should return false







#--------------if winner-----------------


markWin(combo)
Metoden ska ta emot inargumentet combo - en array skapad enligt specifikationerna som finns angivna för metoden winCheck.

Metoden ska hitta de fyra div-element som motsvarar positionerna angivna i combo och lägga till css-klassen win till vart och ett av dessa div-element.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.