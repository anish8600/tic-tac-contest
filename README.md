## Design Process

Below is the design for the Tic-toa-game web application. I am breaking each part of the game in separate components and below is the description-

### `1. App Component-`
   This is the top level component will be injected into the index.html.This component will have no functionality as it is simply the top parent container. I will apply simple css in it to give background color to whole page.

   ### No functions, state, props, inside

### `2. Content Component-`
   This is the first level stateful component will be serve as the container for all other components mentioned below. This component is the base where Base, Turn, Steps component will be intgrated.
   This container will also contain the methd which will give you the solution of the tic-tacs.
 
   ### 4 functions, 1 state, no props will be there.

   a. getSolution() - This function will calculate the winner.This function will be outside the component and will accept baseArray and returns you null when there is no solution for the scenario(no winner) , and return an array when there is a winner.

   b. updateState() - This method will update state whenever player is playing a game. It will be execueted on click.

   c. revertState() - This function will revert the state to specific move.
   d. render()      - It will be render the output of the component.
   e. State         - There will be threee variable in state -
     i.  chances    - This is an array of objects.
     ii. steps      - This is a number used to calculate the number of steps user has played. So                       everytime user click in the game squares, It will be updated by 1.
     iii. nextX     - This is a boolean which is true by default as first player will be 'X', It will                  update to false when 'O' is playing.

### `3. Base Component-` 
   This component is child Stateless Component. This will gorup all the sqaure together and form a matrix so that users can play on the Base. Tic Tac Componet will be used in this.
   
   ### 2 function, no state, 2 props will be used.
   
    a. formMatrix() - This method will form the sqaure and will return Tic Tac component.
    b. render()     - This will be used to render  the output.
    c. Props        - 2 props will be used-
      i. baseArray  - This array will be taken as prop from Contest Component.
      ii.onClick    - This is an event handler which will update state in Contest Component.

### `4. Tic Tac Component-`
   This component is Stateless Component and will be used to make sqaure. This will display 'X' 'O' in the sqaure. It will be accpet two props from the Base Component.
   
   ### No function, no state, 2 props wil be used.
   
    a. Props        - Two props will be used.
      i. value      - This will contain value X O and will receive from Base Component.
      ii.onClick    - This is an event handler which will update state in Contest Component via Base                  Component.   

### `5. Turn Component-` 
   This component is Stateless Component and is simply used to display message - Who is the next player, Who will be the winner and When there is Tie.
   
   ### No function, no state and 3 props.
   
   a. Props         - Three props will be used from Contest Component.
     i.  champion   - This will be used to display winnre message.
     ii. turn       - This will be used to display Next player message.
     iii.steps      - This will be used to display tie message.

### `6. Steps Component-`
   This component is a Stateless Component and used to show the list of moves done so far by the players.
   
   ### No function, no state, 2 props will be used.
   
   a. Props         - Two props will be used from Contest component
     i. chances     - This in an array which contains all the states so far updated
     ii.onClick     - This is an event handler which will revert state in Contest Component.