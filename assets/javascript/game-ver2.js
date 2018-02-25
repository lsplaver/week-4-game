$(document).ready(function() {
    // temporary holding area for creating variables to be moved later
    var winningNumber, playerTotalScore, crystalOne, crystalTwo, crystalThree, 
    crystalFour, totalWins, totalLosses, aScore, newWinningNumber, wins,
     losses, newLosses, score, currentScore, updatedScore,
     targetScore, newGameCheck, newWins, oldScore, updateScore;

    function initialValues() {
        winningNumber = 0, playerTotalScore = 0, crystalOne = 0, crystalTwo = 0, crystalThree = 0, crystalFour = 0, totalWins = 0, totalLosses = 0, oldScore = 0, aScore = 0, newWinningNumber = 0, wins = 0;
        losses = 0, newLosses = 0, score = 0, currentScore = 0, updatedScore = 0, targetScore = 0, newGameCheck = 0, newWins = 0, updateScore = 0;
    }

        function instructParaOneFun() {
        // var aTargetDiv = $("#.instructionsBody");

        var newDiv, newDiv1, newDiv2;
        
        newDiv1 = $("<div><br></div>");
        // newDiv1 = newDiv;
        $("#instructionsBody").append(newDiv1);
        newDiv = $("<div>empty text One</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        newDiv = $(newDiv).attr("id", "instructParaOne").text("You will be given a randum number at the start ofthe game.");
        // newDiv = $("#instructParaOne");
        // console.log("ID value of newDiv: " + newDiv.html().id);
        // newDiv = $(aNewDiv).text("You will be given a randum number at the start of the game.");

        targetDiv = $("#instructionsBody");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaOne")).appendTo(targetDiv);

        targetDiv = $("#instructParaOne");

        // $(targetDiv).text("You will be given a randum number at the start of the game.");
        $("#instructionsBody").append(newDiv);

        // newDiv2 = $("<div><br><br></div>");

        // $("#instructParaOne").append(newDiv1);
    // }

    // function instructParaTwoFun() {
        // var aTargetDiv = $("#.instructParaOne");

        var newDiv;
        
        newDiv1 = $("<div><br></div>");
        $("#instructParaOne").append(newDiv1);
        newDiv = $("<div>empty text two</div>");
        console.log("Value of newly created local newDiv: " + newDiv.text());

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaTwo");
        aNewDiv = $(aNewDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");

        targetDiv = $("#instructionsParaOne");

        console.log("The id of the element referenced by targetDiv: " + targetDiv.attr("id"));

        // $((newDiv).attr("id", "instructParaTwo")).appendTo(targetDiv);

        targetDiv = $("#instructParaTwo");

        $(targetDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");
        $("#instructionsBody").append(aNewDiv);

        // newDiv = $("<div><br><br></div>");

        // $("#instructParaTwo").append(newDiv);
    // }

    // function instructParaThreeFun() {
        // var aTargetDiv = $("#.instructParaTwo");
	
        var newDiv;
        newDiv1 = $("<div><br></div>");
        $("#instructParaTwo").append(newDiv1);
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

        // newDiv = $("<div><br><br></div>");

        // $("#instructParaThree").append(newDiv);
    // }

    // function instructParaFourFun() {
        // var aTargetDiv = $("#.instructParaOne");

        var newDiv;
        
        newDiv1 = $("<div><br></div>");
        $("#instructParaThree").append(newDiv1);
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

        // newDiv = $("<div><br><br></div>");

        // $("#instructParaFour").append(newDiv);
    // }

    // function instructParaFiveFun() {
        // var aTargetDiv = $("#.instructParaFour");

        var newDiv;
        
        newDiv1 = $("<div><br></div>");
        $("#instructParaFour").append(newDiv1);
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

        // newDiv = $("<div><br><br></div>");

        // $("#instructParaFive").append(newDiv);
    }

    function instructionsBodyFun () {
        instructParaOneFun();
        // instructParaTwoFun();
        // instructParaThreeFun();
        // instructParaFourFun();
        // instructParaFiveFun();
    }

    function winningNumberFun () {
    }

    function initialWinningNumberBodyFun() {
    }

    function initialWinningNumberSectionFun() {
    }

    function newWinningNumberFun() {
    }

    function crystalsOneFun() {
    }

    function crystalsTwoFun() {
    }

    function crystalsThreeFun() {
    }

    function crystalsFourFun() {
    }

    function initialGameRecordBodyFun() {
    }

    function totalWinsFun(gamesWon) { // , gameStarted) {
    } 

    function totalLossesFun(gamesLost) { // , gameStarted) {
    } 


    function initialCrystalsBodyFun() {
    }
    
    function crystalButtonFun() {
    }

    $("body").on("click", "button", function () {
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
        }
    
        function btnClickedEventTwo() {
        }
    
        function btnClickedEventThree() {
        }

        function btnClickedEventFour() {
        }
        
        function crystalsOneClickFun(oldScore) {
        }
    
        function crystalsTwoClickFun(oldScore) {
        }
    
        function crystalsThreeClickFun(oldScore) {
        }
    
        function crystalsFourClickFun(oldScore) {
        }
    
        function newGameCheck(aScore) {
        }
    
        function newGameValues() {
        }
    
        function newGame(isNewGame) {
        }

        function newScore(oldScore) {
        }

    });

    function initialScoreBodyFun() {
    }

    initialValues();

    instructionsBodyFun();
    
    initialWinningNumberBodyFun();

    initialWinningNumberSectionFun();

    newWinningNumberFun();

    initialGameRecordBodyFun();

    initialCrystalsBodyFun();

    initialScoreBodyFun();

    crystalsOneFun();

    crystalsTwoFun();

    crystalsThreeFun();

    crystalsFourFun();

})
