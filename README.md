## Tests 
```
Describe: PigDice(player, score); 

Test: "Creates a player object with assigned values to keys.";  
Code: let player1 = new PigDice("Player1", 0);  
Expected: _PigDice_ {_player_: "Player1", _score_: 0}; 

Describe: PigDice.prototype.getRound(num); 

Test: "Stores all numbers except for 1 to an array and returns the sum of all elements within the array.";  
Code: playerLandon.getRound(2);  
Expected: 2; 

Test: "If parameter value is 1, it won't be added to the array.";  
Code: playerLandon.getRound(1);  
Expected: 0;  

Describe: PigDice.prototype.getTotal(num); 

Test: "Stores all numbers from getRound function to an array and returns the sum of all elements within the array.";  
Code: playerLandon.getTotal(3);  
Expected: 3; 

Describe: getRandomNum(); 

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 1;  

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 2;  

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 3;  

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 4;  

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 5;  

Test: "Will return random number between 1 to 6."
Code: getRandomNum();  
Expected: 6;  
```
