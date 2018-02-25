$(document).ready(function() {
    // temporary holding area for creating variables to be moved later
    var winningNumber, playerTotalScore, crystalOne, crystalTwo, crystalThree, 
    crystalFour, totalWins, totalLosses, aScore, newWinningNumber, wins,
     losses, newLosses, score, currentScore, updatedScore,
     targetScore, newGameCheck, newWins, oldScore, updateScore;

    // winningNumber = Math.floor((Math.random() * 100) + 20);
    // console.log("The current value of winningNumber is: " + winningNumber);

    // playerTotalScore = 0;
    // console.log("The initial value of playerTotalScore is: " + playerTotalScore);

    // crystalOne = Math.floor((Math.random() * 12) + 1);
    // console.log("The current value of crystalOne is: " + crystalOne);

    // crystalTwo = Math.floor((Math.random() * 12) + 1);
    // console.log("The current value of crystalTwo is: " + crystalTwo);

    // crystalThree = Math.floor((Math.random() * 12) + 1);
    // console.log("The current value of crystalThree is: " + crystalThree);

    // crystalFour = Math.floor((Math.random() * 12) + 1);
    // console.log("The current value of crystalFour is: " + crystalFour);

    // totalWins = 0;
    // console.log("The initial value of totalWins is: " + totalWins);

    // totalLosses = 0;
    // console.log("The initial value of totalLosses is: " + totalLosses);

    // var newDiv, targetDiv;
    // newDiv = $("<div></div>");
    // targetDiv = $("body")

    // temporary holding area for function constructors

    function initialValues() {
        winningNumber = 0;
        playerTotalScore = 0;
        crystalOne = 0;
        crystalTwo = 0;
        crystalThree = 0;
        crystalFour = 0;
        totalWins = 0;
        totalLosses = 0;
        oldScore = 0;
        aScore = 0;
        newWinningNumber = 0;
        wins = 0;
        losses = 0;
        newLosses = 0;
        score = 0;
        currentScore = 0;
        updatedScore = 0;
        targetScore = 0;
        newGameCheck = 0;
        newWins = 0;
        updateScore = 0;
    }

        function instructParaOneFun() {
        // var aTargetDiv = $("#.instructionsBody");

        var newDiv;
        
        newDiv = $("<div><br></div>");
        $("#instructionsBody").append(newDiv);
        newDiv = $("<div>empty text One</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaOne");
        newDiv = $(aNewDiv).text("You will be given a randum number at the start of the game.");

        targetDiv = $("#instructionsBody");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaOne")).appendTo(targetDiv);

        targetDiv = $("#instructParaOne");

        $(targetDiv).text("You will be given a randum number at the start of the game.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaOne").append(newDiv);
    }

    function instructParaTwoFun() {
        // var aTargetDiv = $("#.instructParaOne");

        var newDiv;
        
        newDiv = $("<div><br></div>");
        $("#instructParaOne").append(newDiv);
        newDiv = $("<div>empty text two</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaTwo");
        newDiv = $(aNewDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");

        targetDiv = $("#instructionsParaOne");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaTwo")).appendTo(targetDiv);

        targetDiv = $("#instructParaTwo");

        $(targetDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaTwo").append(newDiv);
    }

    function instructParaThreeFun() {
        // var aTargetDiv = $("#.instructParaTwo");
	
        var newDiv;
        
        newDiv = $("<div><br></div>");
        $("#instructParaTwo").append(newDiv);
        newDiv = $("<div>empty text three</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaThree"); //.appendTo(targetDiv);
        newDiv = $(aNewDiv).text("Tou win the game by matching your total score to random numbers. You lose the game if your total score goes above the random number.");

        targetDiv = $("#instructParaTwo"); // Three");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaThree")).appendTo(targetDiv);

        targetDiv = $("#instructParaThree");

        $(targetDiv).text("Tou win the game by matching your total score to random numbers. You lose the game if your total score goes above the random number.");
        $("#instructionsBody /*ParaOne */").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaThree").append(newDiv);
    }

    function instructParaFourFun() {
        // var aTargetDiv = $("#.instructParaOne");

        var newDiv;
        
        newDiv = $("<div><br></div>");
        $("#instructParaThree").append(newDiv);
        newDiv = $("<div>empty text four</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaFour");
        newDiv = $(aNewDiv).text("The value of each crystal is hidden from you until you click on it.");

        targetDiv = $("#instructParaThree");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaFour")).appendTo(targetDiv);

        targetDiv = $("#instructParaFour");

        $(targetDiv).text("The value of each crystal is hidden from you until you click on it.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaFour").append(newDiv);
    }

    function instructParaFiveFun() {
        // var aTargetDiv = $("#.instructParaFour");

        var newDiv;
        
        newDiv = $("<div><br></div>");
        $("#instructParaFour").append(newDiv);
        newDiv = $("<div>empty text five</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaFive");
        newDiv = $(aNewDiv).text("Each time when the game starts, the game will change the values of each crystal.");

        targetDiv = $("#instructParaFive");
        

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaFive")).appendTo(targetDiv);

        targetDiv = $("#instructParaFive");

        $(targetDiv).text("Each time when the game starts, the game will change the values of each crystal.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaFive").append(newDiv);
    }

    function instructionsBodyFun () {
        instructParaOneFun();
        instructParaTwoFun();
        instructParaThreeFun();
        instructParaFourFun();
        instructParaFiveFun();
    }

    function winningNumberFun () {
        // var winningNumber;
        winningNumber = Math.floor((Math.random() * 100) + 20);
        console.log("The current value of winningNumber is: " + winningNumber);
        return winningNumber;
    }

    function initialWinningNumberBodyFun() {
        var newDiv;
        newDiv = $("<div>empty text winning number body</div>");

        newDiv = $(newDiv).attr("id", "winningNumberBody");

        $("#mainBody").append(newDiv);
    }

    function initialWinningNumberSectionFun() {
        var newSection;
        newSection = $("<section>empty text winning number section</section>");

        newSection = $(newSection).attr("id", "winningNumberSection");

        newSection = $(newSection).text(winningNumberFun());

        console.log("The current value of newDiv.text() is: " + newSection.text());

        $("#winningNumberBody").append(newSection);

        newWinningNumberFun();
    }

    function newWinningNumberFun() {
        /*var*/ newWinningNumber = 0;
        newWinningNumber = $("#winningNumberSection");

        newWinningNumber = $(newWinningNumber).text(winningNumberFun());

        console.log("The current value of the new winning number using newWinningNumber is: " + newWinningNumber.text());
    }

    function crystalsOneFun() {
        // var crystalOne = -100000;

        crystalOne = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalOne is: " + crystalOne);

        // return crystalOne;
    }

    function crystalsTwoFun() {
        // var crystalTwo = -20000;

        crystalTwo = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalTwo is: " + crystalTwo);

        // return crystalTwo;
    }

    function crystalsThreeFun() {
        // var crystalThree = -30000;

        crystalThree = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalThree is: " + crystalThree);

        // return crystalThree;
    }

    function crystalsFourFun() {
        // var crystalFour = -40000;

        crystalFour = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalFour is: " + crystalFour);

        // return crystalFour;
    }

    function initialGameRecordBodyFun() {
        var newAside;
        newAside = $("<aside>empty aside text</aside>");

        $("#winningNumberBody").append(newAside);

        var newDiv;
        newDiv = $("<div>empty div text</div>");

        newDiv = $(newDiv).attr("id", "gameRecordBody");

        $("ASIDE").append(newDiv);

        // var totalWins = 0, totalLosses = 0;

        console.log("The initial value of totalWins is: " + totalWins);

        console.log("The initial value of totalLosses is: " + totalLosses);

        var newDiv2;
        newDiv2 = $("<div>wins div and br</div>");

        newDiv2 = $(newDiv2).attr("id", "playerWins").text("Wins: " + totalWins);

        var newDiv3;
        newDiv3 = $("<div>losses div and br</div>");

        newDiv3 = $(newDiv3).attr("id", "playerLosses").text("Losses: " + totalLosses);

        $("#gameRecordBody").append(newDiv2).append(newDiv3);

        // $("playerWins").wrap("<div></div>");

        // $("playerLosses").wrap("<div></div>");

        totalWinsFun(totalWins);

        totalLossesFun(totalLosses);
    }

    function totalWinsFun(gamesWon) { // , gameStarted) {
        // var firstGameStarted = false;
        // firstGameStarted = gameStarted;
        // if (firstGameStarted == false)
        // {
            // var totalWins = 0;
        // }

        // else {
            // var totalWins = gamesWon + 1;
        // }
        // var wins = 0, totalWins;
        if (gamesWon != 'undefined') {
            // /*var*/ wins = 0;
            // wins = gamesWon;
            totalWins = gamesWon;
        }
        // if (wins == 0) {
        //     totalWins = wins;
        // }

        // else {
            // totalWins = wins + 1;
        // }

        $("#playerWins").text("Wins: " + totalWins);

        return totalWins;
    } 

    function totalLossesFun(gamesLost) { // , gameStarted) {
        // var firstGameStarted = false;
        // firstGameStarted = gameStarted;
        // if (firstGameStarted == false)
        // {
        //     var totalLosses = 0;
        // }

        // else {
        //     var totalLosses = gamesLost + 1;
        // }
        if (gamesLost != 'undefined') {
            // /*var*/ losses = 0;
            totalLosses = gamesLost;
        }
        // if (losses == 0) {
        //     totalLosses = losses;
        // }

        // else {
        //     totalLosses = totalLosses + 1;
        // }

        $("#playerLosses").text("Losses: " + totalLosses);

        return totalLosses;
    } 

    // function btnClickedFun() {
    //     var btnClicked = false;

    //     return crystalsClick(btnClicked);
    // }

    // // $("button").click(); //function determine // crystalsClick(true));

    
    // function crystalsClick(buttonClick) {
    //     if (((totalWinsFun() == 0) && (totalLossesFun() == 0))) {
    //         return totalLosses, totalWins;
    //     }
    // }

    // function multipleGames(crystalClicked) {
    //     var secondGame = false;
    // }

    // function initValues() {
    //     var initialValuesAll = 0;
        
    //     return initialValuesAll;
    // }

    // $("#btnCrystalOne").click(updateScore("oneClicked"));
    
    // function totalScore(aScore) {
    //     var new 
    // }
    // function updateScore(aBtnClicked) {
    //     var whichBtnClicked = "";
    //     whichBtnClicked = aBtnClicked;
    //     switch (whichBtnClicked) {
    //         case "oneClicked":
    //             crystalsOneClickFun();
    //     }
    // }

    function initialCrystalsBodyFun() {
        var newDiv;
        newDiv = $("<div>empty crystals body</div>");
        newDiv = $(newDiv).attr("id", "crystalsMainBody");
        $("#mainBody").append(newDiv);
        crystalButtonFun();
    }
    
    function crystalButtonFun() {
        // for (var x = 0; x < 4; x++) {
        //     var aNewDiv = $("<div>empty loop number: " + (x + 1) + " div</div>");
        //     aNewDiv = $(aNewDiv).attr("id", ("crystalNo" + (x + 1)));
        //     var aBtn = $("<button>empty loop number " + (x + 1) + " button</button>");
        //     aBtn = $(aBtn).attr("id", ("crystalButtonNo" + (x + 1)));
        //     $("#crystalsMainBody").append(anewDiv);
        //     $(aBtn).wrap(aNewDiv);
        // };

        // var newDiv = $("#crystalMainBody");
        // for (var x = 0; x < 4; x++) {
            var aNewDiv1;
            aNewDiv1 = $("<div>empty loop number: 1 div</div>");
            aNewDiv1 = $(aNewDiv1).attr("id", "crystalNo1");
            var aBtn1;
            aBtn1 = $("<button>empty loop number 1 button</button>");
            aBtn1 = $(aBtn1).attr("id", "crystalButtonNo1"); // .attr("click", "btnClickedEvent('one')");
            $("#crystalsMainBody").append(aNewDiv1);
            // $(aBtn1).wrap(aNewDiv1);
            $(aNewDiv1).append(aBtn1);
            var aNewDiv2;
            aNewDiv2 = $("<div>empty loop number: 2 div</div>");
            aNewDiv2 = $(aNewDiv2).attr("id", "crystalNo2");
            var aBtn2;
            aBtn2 = $("<button>empty loop number 2 button</button>");
            aBtn2 = $(aBtn2).attr("id", "crystalButtonNo2"); // .attr("click", btnClickedEvent("two"));//(click("one"));
            // aBtn2 = $(aBtn2).click( function () {btnClickedEvent("two")});
            // aBtn2 = $(aBtn2).attr("onclick", btnClickedEvent("two"));
            // aBtn2 = $(aBtn2).attr("click", ""); //, btnClickedEventTwo());
            $("#crystalsMainBody").append(aNewDiv2);
            // $(aBtn2).wrap(aNewDiv2);
            $(aNewDiv2).append(aBtn2);
            var aNewDiv3;
            aNewDiv3 = $("<div>empty loop number: 3 div</div>");
            aNewDiv3 = $(aNewDiv3).attr("id", "crystalNo3");
            var aBtn3;
            aBtn3 = $("<button>empty loop number 3 button</button>");
            aBtn3 = $(aBtn3).attr("id", "crystalButtonNo3");
            $("#crystalsMainBody").append(aNewDiv3);
            // $(aBtn3).wrap(aNewDiv3);
            $(aNewDiv3).append(aBtn3);
            var aNewDiv4;
            aNewDiv4 = $("<div>empty loop number: 4 div</div>");
            aNewDiv4 = $(aNewDiv4).attr("id", "crystalNo4");
            var aBtn4;
            aBtn4 = $("<button>empty loop number 4 button</button>");
            aBtn4 = $(aBtn4).attr("id", "crystalButtonNo4");
            $("#crystalsMainBody").append(aNewDiv4);
            // $(aBtn4).wrap(aNewDiv4);
            $(aNewDiv4).append(aBtn4);
        // }
    }

    $("body").on("click", "button", function () {
    // $("#crystalButtonNo1").on("click", function () {
    //     btnClickedEventOne();
    // });
    // $("#crystalButtonNo2").on("click", function () {
    //     btnClickedEventTwo();
    // });
    // $("#crystalButtonNo3").on("click", function () {
    //     btnClickedEventThree();
    // });
    // $("#crystalButtonNo4").on("click", function () {
    //     btnClickedEventFour();
    // });
    // })
        var btnClick;
        btnClick = event.srcElement.id; // .which;
        switch (btnClick) {
            case "crystalButtonNo1":
                btnClickedEventOne();
                break;
            case "crystalButtonNo2":
                btnClickedEventTwo();
                break;
            case "crystalButtonNo3":
                btnClickedEventThree();
                break;
            case "crystalButtonNo4":
                btnClickedEventFour();
                break;
            default:
                break;
        };

        function btnClickedEventOne() {
            /*var*/ score = 0;
            score = playerTotalScore;
            crystalsOneClickFun(score);
            // return score;
        }
    
        function btnClickedEventTwo() {
            /*var*/ score = 0;
            score = playerTotalScore;
            crystalsTwoClickFun(score);
            // return score;
        }
    
        function btnClickedEventThree() {
            /*var*/ score = 0;
            score = playerTotalScore;
            crystalsThreeClickFun(score);
            // return score;
        }

        function btnClickedEventFour() {
            /*var*/ score = 0;
            score = playerTotalScore;
            crystalsFourClickFun(score);
            // return score;
        }
        
        function crystalsOneClickFun(oldScore) {
            /*var*/ currentScore = 0, updatedScore = 0;
            currentScore = oldScore;
    
            updatedScore = currentScore + crystalOne; // .crystalOne();
    
            // if (updatedScore > parseInt(winningNumberFun.toString())) {
            //     newGame("lost");
            // }
    
            // else if (updatedScore === parseInt(winningNumberFun.toString())) {
            //     newGame("won");
            // }
    
            // else {
                $("#playerScore").text(updatedScore);
                newGameCheck(updatedScore);
                playerTotalScore = updatedScore;
                // return playerTotalScore;
            // }
        }
    
        function crystalsTwoClickFun(oldScore) {
            /*var*/ currentScore = 0, updatedScore = 0;
            currentScore = oldScore;
    
            updatedScore = currentScore + crystalTwo; // .crystalTwo();
    
            // if (updatedScore > parseInt(winningNumberFun.toString())) {
            //     newGame("lost");
            // }
    
            // else if (updatedScore === parseInt(winningNumberFun.toString())) {
            //     newGame("won");
            // }
    
            // else {
                $("#playerScore").text(updatedScore);
                newGameCheck(updatedScore);
                playerTotalScore = updatedScore;
                // return playerTotalScore
            // }
        }
    
        function crystalsThreeClickFun(oldScore) {
            /*var*/ currentScore = 0, updatedScore = 0;
            currentScore = oldScore;
    
            updatedScore = currentScore + crystalThree; // .crystalThree();
    
            // if (updatedScore > parseInt(winningNumberFun.toString())) {
            //     newGame("lost");
            // }
    
            // else if (updatedScore === parseInt(winningNumberFun.toString())) {
            //     newGame("won");
            // }
    
            // else {
                $("#playerScore").text(updatedScore);
                newGameCheck(updatedScore);
                playerTotalScore = updatedScore;
                // return playerTotalScore;
            // }
        }
    
        function crystalsFourClickFun(oldScore) {
            /*var*/ currentScore = 0, updatedScore = 0;
            currentScore = oldScore;
    
            updatedScore = currentScore + crystalFour; // .crystalFour();
    
            // if (updatedScore > parseInt(winningNumberFun.toString())) {
            //     newGame("lost");
            // }
    
            // else if (updatedScore === parseInt(winningNumberFun.toString())) {
            //     newGame("won");
            // }
    
            // else {
                $("#playerScore").text(updatedScore);
                newGameCheck(updatedScore);
                playerTotalScore = updatedScore;
                // return playerTotalScore;
            // }
        }
    
        function newGameCheck(aScore) {
            /*var*/ score = 0, targetScore = 0;
            score = aScore;
            targetScore = winningNumber;
    
            if (score > targetScore) {
                newGame("lost");
            }
    
            else if (score == targetScore) {
                newGame("won");
            }
    
            else {
                return score;
            }
        }
    
        function newGameValues() {
            // winningNumber = 0;
            playerTotalScore = 0;
            // crystalOne = 0;
            // crystalTwo = 0;
            // crystalThree = 0;
            // crystalFour = 0;
            // totalWins = 0;
            // totalLosses = 0;
            oldScore = 0;
            aScore = 0;
            // newWinningNumber = 0;
            // wins = 0;
            // losses = 0;
            // newLosses = 0;
            score = 0;
            currentScore = 0;
            updatedScore = 0;
            targetScore = 0;
            newGameCheck = 0;
            // newWins = 0;
            updateScore = 0;
        }
    
        function newGame(isNewGame) {
            /*var*/ newGameCheck = "";
            newGameCheck = isNewGame;
            switch(newGameCheck) {
                case "lost":
                    newWinningNumberFun(),crystalsOneFun(),crystalsTwoFun(),crystalsThreeFun(),crystalsFourFun();
                    // var newLosses, oldLosses = parseInt($("#playerLosses").toString());
                    // newLosses = oldLosses + 1;
                    /*var*/ newLosses = 0;
                    newLosses = totalLosses; // parseInt(totalLossesFun().toString());
                    newLosses = newLosses + 1;
                    newWins = totalWins;
                    totalLossesFun(newLosses),totalWinsFun(totalWins),newScore(0);
                    // newGameCheck
                    break;
                case "won":
                    newWinningNumberFun(),crystalsOneFun(),crystalsTwoFun(),crystalsThreeFun(),crystalsFourFun();
                    // var newLosses, oldLosses = parseInt($("#playerLosses").toString());
                    // newLosses = oldLosses + 1;
                    /*var*/ newWins = 0;
                    newWins = totalWins;
                    newWins = newWins + 1;
                    newLosses = totalLosses
                    totalWinsFun(newWins),totalLossesFun(totalLosses),newScore(0);
                    break;
                default:
                    break;
            }

            newGameValues();
        }

        function newScore(oldScore) {
            /*var*/ score = 0;
            score = oldScore;
            playerTotalScore = score;
            $("#playerScore").text(playerTotalScore);
            // return playerTotalScore;
        }

        // crystalsOneClickFun();

        // crystalsTwoClickFun();
    
        // crystalsThreeClickFun();
    
        // crystalsFourClickFun();
    });
    // $("#crystalsButtonNo1").click(); // function () {btnClickedEvent("one")});

    // $("#crystalsButtonNo2").click(); // function () {btnClickedEvent("two")});

    // $("#crystalsButtonNo3").click(); // function () {btnClickedEvent("three")});

    // $("#crystalsButtonNo4").click(); // function () {btnClickedEvent("four")});

    // function btnClickedEvent(whichBtn) {
    //     var btnClicked = whichBtn;
    //     var score = parseInt(newScore.toString());
    //     switch(btnClicked) {
    //         case "one":
    //             crystalsOneClickFun(score); // parseInt(newScore.toString()));
    //             break;
    //         case "two":
    //             crystalsTwoClickFun(score); //parseInt(new))
    //             break;
    //         case "three":
    //             crystalsThreeClickFun(score);
    //             break;
    //         case "four":
    //             crystalsFourClickFun(score);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    // function btnClickedEventOne() {
    //     var score = playerTotalScore;
    //     crystalsOneClickFun(score);
    //     // return score;
    // }


    // function btnClickedEventTwo() {
    //     var score = playerTotalScore;
    //     crystalsTwoClickFun(score);
    //     // return score;
    // }
    

    // function btnClickedEventThree() {
    //     var score = playerTotalScore;
    //     crystalsThreeClickFun(score);
    //     // return score;
    // }
    

    // function btnClickedEventFour() {
    //     var score = playerTotalScore;
    //     crystalsFourClickFun(score);
    //     // return score;
    // }
    
    // function newScore(aScore) {
        // var score = aScore;
        // return score;
    // }

    // function crystalsOneClickFun(oldScore) {
    //     var currentScore = oldScore, updatedScore;

    //     updatedScore = currentScore + crystalOne; // .crystalOne();

    //     // if (updatedScore > parseInt(winningNumberFun.toString())) {
    //     //     newGame("lost");
    //     // }

    //     // else if (updatedScore === parseInt(winningNumberFun.toString())) {
    //     //     newGame("won");
    //     // }

    //     // else {
    //         $("#playerScore").text(updatedScore);
    //         newGameCheck(updatedScore);
    //         playerTotalScore = updatedScore;
    //         // return playerTotalScore;
    //     // }
    // }

    // function crystalsTwoClickFun(oldScore) {
    //     var currentScore = oldScore, updatedScore;

    //     updatedScore = currentScore + crystalTwo; // .crystalTwo();

    //     // if (updatedScore > parseInt(winningNumberFun.toString())) {
    //     //     newGame("lost");
    //     // }

    //     // else if (updatedScore === parseInt(winningNumberFun.toString())) {
    //     //     newGame("won");
    //     // }

    //     // else {
    //         $("#playerScore").text(updatedScore);
    //         newGameCheck(updatedScore);
    //         playerTotalScore = updatedScore;
    //         // return playerTotalScore
    //     // }
    // }

    // function crystalsThreeClickFun(oldScore) {
    //     var currentScore = oldScore, updatedScore;

    //     updatedScore = currentScore + crystalThree; // .crystalThree();

    //     // if (updatedScore > parseInt(winningNumberFun.toString())) {
    //     //     newGame("lost");
    //     // }

    //     // else if (updatedScore === parseInt(winningNumberFun.toString())) {
    //     //     newGame("won");
    //     // }

    //     // else {
    //         $("#playerScore").text(updatedScore);
    //         newGameCheck(updatedScore);
    //         playerTotalScore = updatedScore;
    //         // return playerTotalScore;
    //     // }
    // }

    // function crystalsFourClickFun(oldScore) {
    //     var currentScore = oldScore, updatedScore;

    //     updatedScore = currentScore + crystalFour; // .crystalFour();

    //     // if (updatedScore > parseInt(winningNumberFun.toString())) {
    //     //     newGame("lost");
    //     // }

    //     // else if (updatedScore === parseInt(winningNumberFun.toString())) {
    //     //     newGame("won");
    //     // }

    //     // else {
    //         $("#playerScore").text(updatedScore);
    //         newGameCheck(updatedScore);
    //         playerTotalScore = updatedScore;
    //         // return playerTotalScore;
    //     // }
    // }

    // function newGameCheck(aScore) {
    //     var score = aScore;
    //     var targetScore = winningNumber;

    //     if (score > targetScore) {
    //         newGame("lost");
    //     }

    //     else if (score == targetScore) {
    //         newGame("won");
    //     }

    //     else {
    //         return score;
    //     }
    // }

    // function newGame(isNewGame) {
    //     var newGameCheck = isNewGame;
    //     switch(newGameCheck) {
    //         case "lost":
    //             newWinningNumberFun(),crystalsOneFun(),crystalsTwoFun(),crystalsThreeFun(),crystalsFourFun();
    //             // var newLosses, oldLosses = parseInt($("#playerLosses").toString());
    //             // newLosses = oldLosses + 1;
    //             var newLosses = totalLosses; // parseInt(totalLossesFun().toString());
    //             newLosses = newLosses + 1;
    //             totalLossesFun(newLosses),totalWinsFun(),newScore(0);
    //             // newGameCheck
    //             break;
    //         case "won":
    //             newWinningNumberFun(),crystalsOneFun(),crystalsTwoFun(),crystalsThreeFun(),crystalsFourFun();
    //             // var newLosses, oldLosses = parseInt($("#playerLosses").toString());
    //             // newLosses = oldLosses + 1;
    //             var newWins = totalWins;
    //             newWins = newWins + 1;
    //             totalWinsFun(newWins),totalLossesFun(),newScore(0);
    //             break;
    //         default:
    //             break;
    //     }
    // }

    function initialScoreBodyFun() {
        var newDiv;
        newDiv = $("<div>empty score body div</div>");
        newDiv = $(newDiv).attr("id", "scoreBody");
        $("#mainBody").append(newDiv);
        // var playerTotalScore = 0;
        var newDiv2;
        newDiv2 = $("<div></div>");
        newDiv2 = $(newDiv2).attr("id", "playerScore").text(playerTotalScore);
        $(newDiv).append(newDiv2);
        // return playerTotalScore;
    }

    // function mewScore(oldScore) {
    //     var score = oldScore;
    //     playerTotalScore = score;
    //     $("#currentScore").text(playerTotalScore);
    //     // return playerTotalScore;
    // }

    // temporary holding area for general functions
    initialValues();

    instructionsBodyFun();
    
    initialWinningNumberBodyFun();

    initialWinningNumberSectionFun();

    newWinningNumberFun();

    initialGameRecordBodyFun();

    initialCrystalsBodyFun();

    initialScoreBodyFun();

    // scoreDescBodyFun();

    // winningNumberFun();

    // gameRecordFun();

    crystalsOneFun();

    crystalsTwoFun();

    crystalsThreeFun();

    crystalsFourFun();

})
