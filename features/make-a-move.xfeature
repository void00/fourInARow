

Feature: The async method that makes player moves
  The async method accepts an column with an integer value of 0 to 6

  Scenario: An player clicks a column to drop his/her marker
    When a player drops a marker in a column
    Given game is in play and column have space for a marker
    Then set playInProgress to true
    And the marker should fall down to the last empty space
    And stop there


  Scenario: When player clicks on an column that is full
    When Player clicks on a column without empty space
    Then Method should return false

  Scenario: If player clicks when game is in play
    Then Method should return null

  Scenario: If makeMove get an column with value over 6 or under 0
    Then an error should be throw with message "column must be an integer between 0 and 6"



      Feature Description
      """
      async makeMove(column)
      Metoden ska vara async.

      Metoden ska ta emot inargumentet column som ska vara ett heltal mellan 0 och 6.
      Om detta inte är fallet ska felmeddelandet
      “column must be an integer between 0 and 6” kastas.

      Metoden ska returnera null om egenskapen playInProgress är true.

      Metoden ska returnera false om draget inte går att göra p.g.a. att vald kolumn är full.

      Om draget går att göra ska metoden genomföra dessa steg i ordning:

      Sätta egenskapen playInProgress till true.

      Sätta ut brickan tillfälligt högst upp i kolumnen.
      Anropa metoden render
      Ta bort brickan om den kan falla längre ner.
      Anropa den asynkrona hjälpmetoden sleep för att pausa i 50 ms.
      Om det går: flytta brickan ett steg ner i kolumnen och upprepa från steg 3.
      Anropa metoden winCheck och om den returnerar något som är truthy:

      a) Anropa metoden removeEventListener

      b) Om winCheck har returnerat ett objekt med egenskapen combo så ska
      metoden markWin med combo-egenskapen från winCheck som inargument.

      c) Anropa egenskapen game:s metod over med egenskapen winner från
      winChecks returvärde som inargument.

      d) Returnera true

      Sätta egenskapen currentPlayer till 2 om den är 1 och till 1 om den är 2.
      Anropa egenskapen game:s metod tellTurn med currentPlayer-egenskapen som inargument.
      Sätta egenskapen playInProgress till false.
      Returnera true.
      """