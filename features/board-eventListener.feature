Feature: Clicks on the board should be detected and used
      The clicks should be saved for later removal and
      also detect what column player has clicked on

      Scenario:Board should be clickable
            Given that the board has an eventhandler
            Then A click should detect what coulmn has been clicked on
            And call makeMove with the same column
            And the eventlistener should be saved as an property in this.listener
            And the addEventListener should find that element in DOM with the help function $



