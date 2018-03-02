   
    //possible holidays

    let holidayNames = [
        {
            name: 'Christmas',
            length: 9,
        },
        {
            name: 'St Patricks',
            length: 11,
        },
        {
            name: 'Halloween',
            length: 9,
        },
        {
            name: 'Thanksgiving',
            length: 12,
        }
    ]

    for (let i = 0; i < holidayNames.length; i++) {
            console.log(holidayNames[i]);
          }
        
    // set variables for wins

        let wins = 0;
        let losses = 0;
        let guessesLeft = 10;

    // for dashes

        let dashGuess = [];
          
    
    //computer choose SVG and name holiday -- outputs to user


    //let pickHoliday = function() {
    let computerGuess = holidayNames[Math.floor(Math.random() * holidayNames.length)];
    console.log(computerGuess);
    //document.getElementById("computer").innerHTML = computerGuess;
    //}
    

    //display _ _ _ with number of letters in holiday
    
    //user can press any key to start

    document.onkeyup = function(event) {
        // to determine which key was pressed.
        let userGuess = event.key;
        //outputs to site
        document.getElementById("user").innerHTML = userGuess;
    }  
    //records Letters Already Guessed:

    


    
    //if user guesses correctly fill in display _ _ _ 
    //else Number of Guesses Remaining:10, counting down
    
    //if user guesses correctly, count up wins


    //else count up loses