   
//possible holidays

let emojiNames = [
    {
        name: 'smile',
        length: 5,
        pic: '../images/smile.png'
    },
    {
        name: 'heart',
        length: 5,
        pic: '../images/heart.png'
    },
    {
        name: 'fire',
        length: 4,
        pic: '../images/fire.png'
    },
    {
        name: 'dog',
        length: 3,
        pic: '../images/dog.png'
    },
    {
        name: 'flag',
        length: 4,
        pic: '../images/flag.png'
    },
    {
        name: 'clap',
        length: 4,
        pic: '../images/clap.png'
    },
    {
        name: 'cat',
        length: 3,
        pic: '../images/cat.png'
    }
        
]
   
        // set variables for wins, losses and guesses 
        let wins = 0;
        let losses = 0;
        
        // variable for dashes
        let dashGuess = [];

        // set variables to get elements from HTML 
        let idComputer = document.getElementById("computer");
        let idUser = document.getElementById("user");
        let idWins = document.getElementById("wins");
        let idLosses = document.getElementById("losses");
        let idGuesses = document.getElementById("guesses");

        //computer choose name holiday 
        let computerGuess = emojiNames[Math.floor(Math.random() * emojiNames.length)].name;
            console.log(computerGuess);
        
        let counter = computerGuess.length -1;

        let guessesLeft = computerGuess.length +3;

        //computer outputs _ _ _ length of holiday it chose
        for (let i = 0; i < computerGuess.length; i++) {
            //this is outputting as a number, not with underscores...
            idComputer.innerHTML = dashGuess.push("_")
        }

        //output _ _ _ to HTML 

        idComputer.innerHTML = dashGuess.join(" ")
        
        //user can press any key to start

        document.onkeyup = function userTry (event) {

            // to determine which key was pressed.
            let userGuess = event.key.toLowerCase();
            guessesLeft--;
            console.log(guessesLeft) 
            idGuesses.innerHTML = guessesLeft

            //outputs to site
            document.getElementById("user").innerHTML = userGuess;

            if (computerGuess.indexOf(userGuess) > -1) {
                console.log("correct guess")
                //change dash guess to show to correct letter in the correct position
                let correctIndex = computerGuess.indexOf(userGuess);
                dashGuess[correctIndex] = userGuess;
                console.log(dashGuess)
                counter--;
                console.log(counter)
                //forWins ();
                idComputer.innerHTML = dashGuess.join(" ")
            } else {
                console.log("incorrect")
            }
        }

//once the word has 0 letters left, then wins and losses can go up / down accordingly
//need to get losses to update in console after guesses run out
//need to get wins to update in console after counter runs out
        function countDown () {
            if (guessesLeft = 0) {
            console.log("losses" + losses++)
            idLosses.innerHTML = losses++
            } 
        }
        countDown ();


        // function forWins (){
        //     if (counter <= 0) {
        //     console.log("wins " + wins++)
        //     idWins.innerHTML = wins++
        //     }
        // }




//  let leftOvers = computerGuess.length

// while (leftOvers > 0) {
//   idComputer = dashGuess.join(" ");

//     for (let i = 0; i < computerGuess.length; i++) {
//     if (computerGuess[i] === userTry){
//     dashGuess[i] = userTry;
//     leftOvers--;
//     console.log("wins " + wins++)
//      }
//     }
// }
    

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
// var dashGuessStr = dashGuess.join(" ");