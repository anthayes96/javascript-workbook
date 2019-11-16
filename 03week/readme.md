1.get the current startStack endStack values (either through user input or test values)
- pass those values to isLegal function
- pass those values to movePiece function

2. check that a piece is allowed to move
- use the startStack and endStack values to determine if it would be a legal move based off the rules of the game
    - startStack and endStack should be different letters
    - access the numbers inside the arrays the correspond to the startStack/endStack values ('a', 'b', pr 'c')
    - a bigger number can not be placed on top of a smaller number
        - any number can be placed onto an empty stack (0) (array inside the stacks object)
- nice to have: return an error message (string) telling the user if ther input is invalud (should 'a','b','c')
- nice to have: further input validation like making sure the startStack/endStack values are 1 character long (there are a lot of other cases to think about too :) )

3. move  piece from one stack to another
- update the stacks object inside of the movePiece function using the startStack and endStack values
- take the values from the end of startStack array amd ad to the end of the endStack array
- maybe use .pop?, .shift?, or different array methods

4. check to see if the game is won (chekforWin function)
 - when all the blocks are stacked into column 2 or 1 return otherwise false
 - nice to have: console log a winning message 