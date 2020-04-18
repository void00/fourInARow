      """
      async makeMove(column)
      Metoden ska vara async.

      Metoden ska ta emot inargumentet column som ska vara ett heltal mellan 0 och 6. Om detta inte är fallet ska felmeddelandet “column must be an integer between 0 and 6” kastas.

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
      b) Om winCheck har returnerat ett objekt med egenskapen combo så ska metoden markWin med combo-egenskapen från winCheck som inargument.
      c) Anropa egenskapen game:s metod over med egenskapen winner från winChecks returvärde som inargument.
      d) Returnera true
      Sätta egenskapen currentPlayer till 2 om den är 1 och till 1 om den är 2.
      Anropa egenskapen game:s metod tellTurn med currentPlayer-egenskapen som inargument.
      Sätta egenskapen playInProgress till false.
      Returnera true.
      """