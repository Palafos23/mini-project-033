var options= ["R", "P", "S"]
    console.log(options);

    var wins = 0;
    var ties = 0;
    var losses = 0;

    var playGame = function () {
        //ask user for their choice
        var userChoice = window.prompt("Enter R, P, or S:");

        //if user presses cancel, immediately end function

        if (!userChoice) {
            return;
         }

         userChoice = userChoice.toUpperCase();

         //get random set of options

         var index = Math.floor(Math.random() * options.length);
         var computerChoice = options[index];

         window.alert("The computer chose " + computerChoice);

         if (userChoice===computerChoice) {
            ties++;
            window.alert("Its a Tie!");
        //check every win condition for the 
         } else if (
         (userChoice=== "R" && computerChoice === "S")||
         (userChoice=== "P" && computerChoice === "R")||
         (userChoice=== "S" && computerChoice === "P") 
         ) {
            wins++;
            window.alert("you win!");
        }

        else {
            losses++;
            window.alert("you lost!");
        }
        //add stats

        window.alert(
            "stats:\nwins: " + wins + "\nties: " + ties + "\nlosses: " + losses
        );

        //ad play again
        var playAgain = window.confirm("Would you like to play again?");

    if (playAgain) {
            playGame();
        }
    };

    playGame();
