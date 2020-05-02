Feature: Render method
                        The method...

                        """
        Scenario: There is a render method with the CSS klass board in DOM etc...

                        Feature Description


                        render()
                        Metoden ska hitta elementet med css-klassen board i
                        DOM:en och byta innehållet i detta element till en html-struktur med
                        42 stycken div-element i rad. Dessa motsvarar de olika positionerna
                        på brädet från det övre vänstra hörnet till det nedre högre hörnet.

                        Om spelare 1 har en bricka på en position ska det div-element som
                        motsvarar positionen få css-klassen red. Om spelare 2 har en bricka på en
                        position ska det div-element som motsvarar positionen få css-klassen yellow.

                        Vart och ett av de 42 div-element som beskrivs ovan ska i sin tur
                        innehålla ett div-element. Detta ska vara tomt.

                        Metoden ska använda hjälpmetoden $ för att ta tag i rätt element i DOM:en.
                        """