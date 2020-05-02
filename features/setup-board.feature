<<<<<<< HEAD
Feature: Beginning of a new game
Testing things when a new game is getting started.

=======
<<<<<<< HEAD:features/boardfeature
Klassen Board
=======
Feature: There is an start
  start board
  >>>>>>> 96b968307b0419101f7df68fc4d3079a68b9b7ba

  Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board
    <<<<<<< HEAD
    Then game should be of an instance of Game
    And it should create a matrix 6 x 7 with 0 in all cells
    And currentPlayer should be 1
    And playInProgress should be false

  Scenario: A board is renderd on screen
    Given  that a new board is created
    Then addEventListener should be called
    And render should be called
    And currentPlayer should be passed to tellTurn as an argument


    And game should be of an instance of Game
    And it should create a matrix 7 x 6 with 0 in all cells
    And currentPlayers should be 1
    And playInProgress should be false

  Scenario: A board is renderd on screen
    Given that a new board is created with playInProgress set to false
    Then addEventListener should be called
    And then render should be called
    And currentPlayers should be passed to tellTurn as an argument




      """
      Klassen Board
      >>>>>>> 96b968307b0419101f7df68fc4d3079a68b9b7ba:features/setup-board.feature
      Klassen Board ska innehålla följande metoder.
      (Vilka egenskaper som ska finnas anges i de metoder som sätter dessa.).

      Obs! Egenskapen matrix, se nedan, ska representera ett spelbräde
      där alla positioner från början har värdet 0 och en position får
      värdet 1 om spelare 1 har en bricka där, samt värdet 2 om spelare 2 har en bricka där.

      constructor(game)
      Metoden ska ta emot inargumentet game som ska vara en instans av klassen Game.
      Om så inte är fallet ska felmeddelandet “game must be an instance of Game” kastas.

      Metoden ska sätta följande egenskaper till följande värden:

      game till värdet från inargumentet game.
      matrix till en array med 6 element. Varje element ska i sin tur vara en array
      med 7 element, där varje element har värdet 0.
      currentPlayer till värdet 1.
      playInProgress till värdet false.
      Metoden ska anropa metoderna addEventListener och render (i denna ordning).
      Därefter ska den anropa egenskapen game:s metod tellTurn med
      currentPlayer-egenskapen som inargument.
      """


      <<<<<<< HEAD:features/boardfeature
      # Dela upp i 2. game är start, board är logiken, flytta game till start-game.feature
      """Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board
    Then game should be of an instance of Game
    #And set Board property
    And it should create a matrix 7 x 6 with 0 in all cells
    And currentPlayers should be 1
    And playInProgres should be false
=======
>>>>>>> 96b968307b0419101f7df68fc4d3079a68b9b7ba:features/setup-board.feature
>>>>>>> 96b968307b0419101f7df68fc4d3079a68b9b7ba

