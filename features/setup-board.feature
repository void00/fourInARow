Klassen Board
Klassen Board ska innehålla följande metoder. (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

Obs! Egenskapen matrix, se nedan, ska representera ett spelbräde där alla positioner från början har värdet 0 och en position får värdet 1 om spelare 1 har en bricka där, samt värdet 2 om spelare 2 har en bricka där.

constructor(game)
Metoden ska ta emot inargumentet game som ska vara en instans av klassen Game. Om så inte är fallet ska felmeddelandet “game must be an instance of Game” kastas.

Metoden ska sätta följande egenskaper till följande värden:

game till värdet från inargumentet game.
matrix till en array med 6 element. Varje element ska i sin tur vara en array med 7 element, där varje element har värdet 0.
currentPlayer till värdet 1.
playInProgress till värdet false.
Metoden ska anropa metoderna addEventListener och render (i denna ordning). Därefter ska den anropa egenskapen game:s metod tellTurn med currentPlayer-egenskapen som inargument.