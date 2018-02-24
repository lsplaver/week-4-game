$(document).ready(function() {
    // temporary holding area for creating variables to be moved later
    var /* winningNumber, */ playerTotalScore; // , /* crystalOne, crystalTwo, crystalThree, crystalFour, */ totalWins, totalLosses;

    // winningNumber = Math.floor((Math.random() * 100) + 20);
    // console.log("The current value of winningNumber is: " + winningNumber);

    playerTotalScore = 0;
    console.log("The initial value of playerTotalScore is: " + playerTotalScore);

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

    var newDiv, targetDiv;
    newDiv = $("<div></div>");
    targetDiv = $("body")

    // temporary holding area for function constructors
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
        var winningNumber;
        winningNumber = Math.floor((Math.random() * 100) + 20);
        console.log("The current value of winningNumber is: " + winningNumber);
        return winningNumber;
    }

    function initialWinningNumberBodyFun() {
        var newDiv = $("<div>empty text winning number body</div>");

        newDiv = $(newDiv).attr("id", "winningNumberBody");

        $("#mainBody").append(newDiv);
    }

    function initialWinningNumberSectionFun() {
        var newSection = $("<section>empty text winning number section</section>");

        newSection = $(newSection).attr("id", "winningNumberSection");

        newSection = $(newSection).text(winningNumberFun());

        console.log("The current value of newDiv.text() is: " + newSection.text());

        $("#winningNumberBody").append(newSection);
    }

    function newWinningNumberFun() {
        var newWinningNumber = $("#winningNumberSection");

        newWinningNumber = $(newWinningNumber).text(winningNumberFun());

        console.log("The current value of the new winning number using newWinningNumber is: " + newWinningNumber.text());
    }

    function crystalsOneFun() {
        var crystalOne = -100000;

        crystalOne = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalOne is: " + crystalOne);

        return crystalOne;
    }

    function crystalsTwoFun() {
        var crystalTwo = -20000;

        crystalTwo = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalTwo is: " + crystalTwo);

        return crystalTwo;
    }

    function crystalsThreeFun() {
        var crystalThree = -30000;

        crystalThree = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalThree is: " + crystalThree);

        return crystalThree;
    }

    function crystalsFourFun() {
        var crystalFour = -40000;

        crystalFour = Math.floor((Math.random() * 12) + 1);
        console.log("The current value of crystalFour is: " + crystalFour);

        return crystalFour;
    }

    function initialGameRecordBodyFun() {
        var newAside = $("<aside>empty aside text</aside>");

        $("#winningNumberBody").append(newAside);

        var newDiv = $("<div>empty div text</div>");

        newDiv = $(newDiv).attr("id", "gameRecordBody");

        $("ASIDE").append(newDiv);

        var totalWins = 0, totalLosses = 0;

        console.log("The initial value of totalWins is: " + totalWins);

        console.log("The initial value of totalLosses is: " + totalLosses);

        var newDiv2 = $("<div>wins div and br</div>");

        newDiv2 = $(newDiv2).attr("id", "playerWins").text("Wins: " + totalWins);

        var newDiv3 = $("<div>losses div and br</div>");

        newDiv3 = $(newDiv3).attr("id", "playerLosses").text("Losses: " + totalLosses);

        $("#gameRecordBody").append(newDiv2).append(newDiv3);

        $("playerWins").wrap("<div></div>");

        $("playerLosses").wrap("<div></div>");

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
        var wins = gamesWon, totalWins;

        if (wins == 0) {
            totalWins = wins;
        }

        else {
            totalWins = wins + 1;
        }

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
        var losses = gamesLost, totalLosses;

        if (losses == 0) {
            totalLosses = losses;
        }

        else {
            totalLosses = totalLosses + losses;
        }

        $("#playerWins").text("Wins: " + totalLosses);

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

    function crystalsOneClickFun() {

    }
    // temporary holding area for general functions
    instructionsBodyFun();
    
    initialWinningNumberBodyFun();

    initialWinningNumberSectionFun();

    newWinningNumberFun();

    initialGameRecordBodyFun();

    // initialCrystalsBodyFun();

    // initialScoreBodyFun();

    // scoreDescBodyFun();

    // winningNumberFun();

    // gameRecordFun();

    crystalsOneFun();

    crystalsTwoFun();

    crystalsThreeFun();

    crystalsFourFun();

    // crystalsOneClickFun();

    // crystalsTwoClickFun();

    // crystalsThreeClickFun();

    // crystalsFourClickFun();
})
