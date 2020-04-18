Klassen Game
Klassen Game ska innehålla följande metoder. (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

constructor()
Metoden ska anropa metoderna addEventListener och start (i denna ordning).

start()
Metoden ska skapa ett ny instans av Board och skicka nuvarande instans av Game till dess konstruktor. Instansen ska lagras i egenskapen board.

tellTurn(player)
Metoden ska ta emot inargumentet player som ska vara ett heltal (1 eller 2). Om så inte är fallet ska felet “player must be 1 or 2” kastas.

Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten “Röds tur…” om player har värdet 1 och till texten “Guls tur…” om player har värdet 2.

over(won)
Metoden ska ta emot inargumentet won som ska ha värdet “draw”, 1 eller 2 . Om så inte är fallet ska felet ‘won must be “draw”, 1 or 2’ kastas.

Metoden ska ta tag i DOM-elementet med css-klassen message och byta dess innehåll till texten

“Det blev oavgjort!” om won är “draw”.
“Röd vann!” om won är 1.
“Gul vann!” om won är 2.
Dessutom ska en knapp (button-element) läggas till i DOM-elementet med css-klassen message. Knappen ska ha css-klassen again och texten “Spela igen”.

addEventListener()
Metoden ska addera en händelselyssnare/funktion för click-händelser till elementet med css-klassen message i DOM:en.

Händelselyssnaren ska detektera om man har klickat på knappen med css-klassen again och i så fall anropa metoden start.