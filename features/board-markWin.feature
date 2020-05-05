Feature:The game should mark winning players markers
  So it will obvius to all we have a winner
  Scenario:When we have a winner
    Given Winning move is made
    Then markwin should get combo as an Array from winCheck
    And find the winning position from combo in the div board with helpermethod $
    And add the class win to them

