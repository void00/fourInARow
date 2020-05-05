Feature:The board should have a render method
        So it can update the screen with proper graphics

        Scenario:When a player makes a move
                Given a player made a move
                Then the render should be called
                And render should find board element with help function $
                And render should make 42 div element in the board element containing a empty child div
                And if the position in the matrix has a value of 1 "red" the representative div in board should be set to class red
                And if the position in the matrix has a value of 2 "yellow" the representative div in board should be set to class yellow
