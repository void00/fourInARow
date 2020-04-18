winCheck()
Ska titta på hela brädet och kontrollera om någon har vunnit eller om det har blivit oavgjort.

Om någon har vunnit ska metoden returnera ett objekt. Objektet ska ha egenskaperna winner satt till vinnaren (1 eller 2), samt combo - en array av 4 arrayer, där varje inre array är en position på brädet [radnummer, kolumnnummer].

Om det har blivit oavgjort ska metoden returnera ett objekt med egenskapen winner satt till strängen “draw”.

Om ingen har vunnit och det inte har blivit oavgjort ska metoden returnera värdet false.


#--------------if winner-----------------


markWin(combo)
Metoden ska ta emot inargumentet combo - en array skapad enligt specifikationerna som finns angivna för metoden winCheck.

Metoden ska hitta de fyra div-element som motsvarar positionerna angivna i combo och lägga till css-klassen win till vart och ett av dessa div-element.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.