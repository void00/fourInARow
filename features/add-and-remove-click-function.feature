addEventListener()
Metoden ska addera en händelselyssnare/funktion för click-händelser till elementet med css-klassen board i DOM:en.

Händelselyssnare ska detektera vilken kolumn användaren har klickat på och anropa metoden makeMove med denna kolumn som inargument.

Händelselyssnaren ska sparas som en egenskap med namnet listener, så att den kan tas bort vid ett senare tillfälle.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.

removeEventListener()
Metoden ska ta bort händelselyssnaren lagrad i egenskapen listener från elementet med css-klassen board i DOM:en.

Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.