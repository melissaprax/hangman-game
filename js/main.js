   
    //possible holidays

    let holidayNames = [
        {
            name: 'christmas',
            length: 9,
        },
        {
            name: 'st patricks',
            length: 11,
        },
        {
            name: 'halloween',
            length: 9,
        },
        {
            name: 'thanksgiving',
            length: 12,
        }
    ]

    for (let i = 0; i < holidayNames.length; i++) {
            console.log(holidayNames[i]);
          }
        
    // set variables for wins, losses and guesses 

        let wins = 0;
        let losses = 0;
        let guessesLeft = 20;

    // for dashes

        let dashGuess = [];
          
    
    //computer choose name holiday 

    let computerGuess = holidayNames[Math.floor(Math.random() * holidayNames.length)];
    console.log(computerGuess);

    //computer outputs _ _ _ length of holiday it chose

    for (let i = 0; i < computerGuess.length; i++) {
        console.log(dashGuess += '_ '); //THIS WORKS!
        document.getElementById("computer").innerHTML = dashGuess += '_ ';
      }
    

    //let computerWord = computerGuess.name
    
    //user can press any key to start
    document.onkeyup = function(event) {
        // to determine which key was pressed.
       let userGuess = event.key.toLowerCase();
        //outputs to site
       document.getElementById("user").innerHTML = userGuess;
    
        if (computerGuess.name.indexOf(userGuess) != -1) {
          document.getElementById("computer").innerHTML = userGuess;
        }
    else {
      console.log(false);
   }

   //fill in user's guess to  _ _ _ in specific index position 
   //records Letters Already Guessed:

   if (computerChoice.indexOf(userGuess) > -1) {
    guessIndex = computerChoice.indexOf(userGuess);
  }
  
console.log(guessIndex);

dashGuess[guessIndex] = userKey;

dashGuessStr = dashGuess.join(" ");

console.log(dashGuess);


   //makings wins and losses go up
    if (userGuess === computerGuess) {
    document.getElementById("wins").HTML = wins++;
    }
    else {
     losses++;
    }



} //to end event DON'T DELETE 

    //if else Christmas 

    // if (computerGuess === 'Christmas' && userGuess === 'c', 'h', 'r', 'i', 's', 't', 'm', 'a', 's') {
    //     document.getElementById("wins").innerHTML = wins + 1;
    // }
    // else {
    //     document.getElementById('loses').innerHTML = loses - 1;
    // }
    // //St Patricks
    // if (computerGuess === 'St Patricks' && userGuess === 's', 't', 'p', 'a', 't', 'r', 'i', 'c', 'k', 's') {
    //     document.getElementById("wins").innerHTML = wins + 1;
    // }
    // else {
    //     document.getElementById('loses').innerHTML = loses - 1;
    // }
    //if user guesses a letter correctly guesses go unchanged

    //if not guesses goes down by 1

    //if guesses go down by 10, loses go up by 1

    //if user guesses all letters correctly, wins go up by one

    //display _ _ _ with number of letters in holiday
    

    


    
    //if user guesses correctly fill in display _ _ _ 
    //else Number of Guesses Remaining:10, counting down
    
    //if user guesses correctly, count up wins


    //else count up loses