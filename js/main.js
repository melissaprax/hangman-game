//possible holidays

var holidayNames = ['Valentines Day', 'Halloween', 'July 4', 'Christmas', 'Thanksgiving', 'St Patricks Day'];

//possible SVGS (make objects)

var valentinesDay = {
    'image': img.src = './images/heart.svg',
}

document.onkeyup = function(event) {
    // Determines which key was pressed.
    var userGuess = event.key;
}
//computer choose SVG and name holiday -- outputs to user

var computerGuess = holidayNames[Math.floor(Math.random() * holidayNames.length)];

//display _ _ _ with number of letters in holiday

//user can press any key to start
//records Letters Already Guessed:

//if user guesses correctly fill in display _ _ _ 
//else Number of Guesses Remaining:10, counting down

//if user guesses correctly, count up wins
//else count up loses