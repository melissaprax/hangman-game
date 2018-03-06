   
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

   
    // set variables for wins, losses and guesses 

        let wins = 0;
        let losses = 0;
        let guessesLeft = 20;


    // for dashes

        let dashGuess = [];


         //computer choose name holiday 

    let computerGuess = holidayNames[Math.floor(Math.random() * holidayNames.length)].name;
    console.log(computerGuess);

    //computer outputs _ _ _ length of holiday it chose

        for (let i = 0; i < computerGuess.length; i++) {
            //dashGuess.push("_"); THIS WORKS
            document.getElementById("computer").innerHMTL = dashGuess.push("_");
        }

          var dashGuessStr = dashGuess.join(" ");
        
 //user can press any key to start

 document.onkeyup = function(event) {
    // to determine which key was pressed.

   let userGuess = event.key.toLowerCase();

    //outputs to site
   document.getElementById("user").innerHTML = userGuess;

   console.log(computerGuess)

    if (computerGuess.indexOf(userGuess) > -1) {
        console.log("correct guess")
        //change dash guess to show to correct letter in the correct position
        let correctIndex = computerGuess.indexOf(userGuess);
        dashGuess[correctIndex] = userGuess;
        console.log(dashGuess)
    }
    else {
        console.log("incorrect")
    }
    if (computerGuess.indexOf(userGuess) === true) {
        console.log(wins++)
    }
    else {
        console.log(losses++)
    }
 }

 
    

//     //computer outputs _ _ _ length of holiday it chose

//     for (let i = 0; i < computerGuess.length; i++) {
//         console.log(dashGuess += '_ '); //THIS WORKS!
//         document.getElementById("computer").innerHTML = dashGuess += '_ ';
//       }
   

//    //fill in user's guess to  _ _ _ specific position 
//    //records Letters Already Guessed:
   
// let leftOvers = computerGuess.name

// while (leftOvers > 0) {
//     let attempt = document.getElementById("computer");
//     attempt.innerHTML = dashGuess.join(" ");

//     for (let j = 0; j < computerGuess.name; j++) {
//         if (computerGuess(j) === userGuess){
//             dashGuess[j] = userGuess;
//             leftOvers--;
//         }
//     }
// }

//    //if (computerGuess.indexOf(userGuess) > -1) {
//   //  guessIndex = computerGuess.indexOf(userGuess);
//  // }
  
// //console.log(guessIndex);

// //dashGuess[guessIndex] = userKey;

// //dashGuessStr = dashGuess.join(" ");

// //console.log(dashGuess);


//    //makings wins and losses go up
//     if (userGuess === computerGuess) {
//     document.getElementById("wins").HTML = wins++;
//     }
//     else {
//      losses++;
//     }


//  }
