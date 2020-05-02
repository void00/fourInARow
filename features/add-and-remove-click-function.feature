Feature: Clicks on the board should be detected and used.
      The clicks should be saved for later removal and
      also detect what column player has clicked on

      Scenario:Board should be clickeble
            Given that the board has an eventhandler
            Then A click should detect what coulmn has been clicked on
            And call makeMove with the same column
            And the eventlistener should be saved as an property in this.listener
            And the add eventlistener should find that element in DOM with the help fuction $

      Scenario: Board should have an removeEventListeners that removes listeners after game over.
                  """


                  addEventListener()
                  Metoden ska addera en händelselyssnare/funktion för
                  click-händelser till elementet med css-klassen board i DOM:en.

                  Händelselyssnare ska detektera vilken kolumn användaren
                  har klickat på och anropa metoden makeMove med denna kolumn som
                  inargument.

                  Händelselyssnaren ska sparas som en egenskap med namnet listener,
                  så att den kan tas bort vid ett senare tillfälle.

                  Metoden ska använda hjälpmetoden $ för att ta tag i rätt element
                  i DOM:en.

                  removeEventListener()
                  Metoden ska ta bort händelselyssnaren lagrad i egenskapen
                  listener från elementet med css-klassen board i DOM:en.

                  Metoden ska använda hjälpmetoden $ för att ta tag i rätt element
                  i DOM:en.
                  """
