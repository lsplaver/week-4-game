$(document).ready(function () {
    // temporary holding area for creating variables to be moved later
    var winningNumber, playerTotalScore, crystalOne, crystalTwo, crystalThree,
        crystalFour, totalWins, totalLosses, aScore, newWinningNumber, wins,
        losses, newLosses, score, currentScore, updatedScore,
        targetScore, newGameCheck, newWins, oldScore, updateScore;

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
        var newDiv;

        newDiv = $("<div><br></div>");
        $("#instructionsBody").append(newDiv);
        newDiv = $("<div>empty text One</div>");

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaOne");
        newDiv = $(aNewDiv).text("You will be given a randum number at the start of the game.");

        targetDiv = $("#instructionsBody");

        targetDiv = $("#instructParaOne");

        $(targetDiv).text("You will be given a randum number at the start of the game.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaOne").append(newDiv);
    }

    function instructParaTwoFun() {
        var newDiv;

        newDiv = $("<div><br></div>");
        $("#instructParaOne").append(newDiv);
        newDiv = $("<div>empty text two</div>");

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaTwo");
        newDiv = $(aNewDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");

        targetDiv = $("#instructionsParaOne");

        targetDiv = $("#instructParaTwo");

        $(targetDiv).text("There are four crystals below. By clicking on a crystal you will add a specific amount of points to your score.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaTwo").append(newDiv);
    }

    function instructParaThreeFun() {
        var newDiv;

        newDiv = $("<div><br></div>");
        $("#instructParaTwo").append(newDiv);
        newDiv = $("<div>empty text three</div>");

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaThree");
        newDiv = $(aNewDiv).text("Tou win the game by matching your total score to random numbers. You lose the game if your total score goes above the random number.");

        targetDiv = $("#instructParaTwo");

        targetDiv = $("#instructParaThree");

        $(targetDiv).text("Tou win the game by matching your total score to random numbers. You lose the game if your total score goes above the random number.");
        $("#instructionsBody /*ParaOne */").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaThree").append(newDiv);
    }

    function instructParaFourFun() {
        var newDiv;

        newDiv = $("<div><br></div>");
        $("#instructParaThree").append(newDiv);
        newDiv = $("<div>empty text four</div>");

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaFour");
        newDiv = $(aNewDiv).text("The value of each crystal is hidden from you until you click on it.");

        targetDiv = $("#instructParaThree");

        targetDiv = $("#instructParaFour");

        $(targetDiv).text("The value of each crystal is hidden from you until you click on it.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaFour").append(newDiv);
    }

    function instructParaFiveFun() {
        var newDiv;

        newDiv = $("<div><br></div>");
        $("#instructParaFour").append(newDiv);
        newDiv = $("<div>empty text five</div>");

        var targetDiv, aNewDiv;
        aNewDiv = $(newDiv).attr("id", "instructParaFive");
        newDiv = $(aNewDiv).text("Each time when the game starts, the game will change the values of each crystal.");

        targetDiv = $("#instructParaFive");

        targetDiv = $("#instructParaFive");

        $(targetDiv).text("Each time when the game starts, the game will change the values of each crystal.");
        $("#instructionsBody").append(newDiv);

        newDiv = $("<div><br><br></div>");

        $("#instructParaFive").append(newDiv);
    }

    function instructionsBodyFun() {
        instructParaOneFun();
        instructParaTwoFun();
        instructParaThreeFun();
        instructParaFourFun();
        instructParaFiveFun();
    }

    function winningNumberFun() {
        winningNumber = Math.floor((Math.random() * 100) + 20);
        return winningNumber;
    }

    function clearAllColAndRowText() {
        $(".col-lg-8 .col-lg-4 .col-6 .row").text("");
    }

    function initialWinningNumberBodyFun() {
        var newDiv, newDiv1;
        newDiv = $("<div>empty text winning number body</div>");

        newDiv = $(newDiv).attr("id", "winningNumberBody").text("");

        $("#mainBody").append(newDiv);

        newDiv = $("<div>  empty row</div>"), newDiv1 = $("<div>empty col</div>");
        newDiv = $(newDiv).attr("class", "row").attr("id", "winningNumberBodyRow1").text(""), $(newDiv1).attr("class", "col-6 col-lg-8").text("");
        $("#winningNumberBody").append(newDiv), $(newDiv).append(newDiv1);

        clearAllColAndRowText();
    }

    function initialWinningNumberSectionFun() {
        var newSection;
        newSection = $("<section>empty text winning number section</section>");

        newSection = $(newSection).attr("id", "winningNumberSection");

        newSection = $(newSection).text(winningNumberFun());

        $("#winningNumberBodyRow1").append(newSection);

        newWinningNumberFun();
    }

    function newWinningNumberFun() {
        newWinningNumber = 0;
        newWinningNumber = $("#winningNumberSection");

        newWinningNumber = $(newWinningNumber).text(winningNumberFun());
    }

    function crystalsOneFun() {
        crystalOne = Math.floor((Math.random() * 12) + 1);
    }

    function crystalsTwoFun() {
        crystalTwo = Math.floor((Math.random() * 12) + 1);
    }

    function crystalsThreeFun() {
        crystalThree = Math.floor((Math.random() * 12) + 1);
    }

    function crystalsFourFun() {
        crystalFour = Math.floor((Math.random() * 12) + 1);
    }

    function initialGameRecordBodyFun() {
        var newAside;
        newAside = $("<aside>empty aside text</aside>");

        $("#winningNumberBody").append(newAside);

        var newDiv;
        newDiv = $("<div>empty div text</div>");

        newDiv = $(newDiv).attr("id", "gameRecordBody");

        $("ASIDE").append(newDiv);

        var newDiv2;
        newDiv2 = $("<div>wins div and br</div>");

        newDiv2 = $(newDiv2).attr("id", "playerWins").text("Wins: " + totalWins);

        var newDiv3;
        newDiv3 = $("<div>losses div and br</div>");

        newDiv3 = $(newDiv3).attr("id", "playerLosses").text("Losses: " + totalLosses);

        $("#gameRecordBody").append(newDiv2).append(newDiv3);

        totalWinsFun(totalWins);

        totalLossesFun(totalLosses);
    }

    function totalWinsFun(gamesWon) {
        if (gamesWon != 'undefined') {
            totalWins = gamesWon;
        }

        $("#playerWins").text("Wins: " + totalWins);

        return totalWins;
    }

    function totalLossesFun(gamesLost) {
        if (gamesLost != 'undefined') {
            totalLosses = gamesLost;
        }

        $("#playerLosses").text("Losses: " + totalLosses);

        return totalLosses;
    }

    function initialCrystalsBodyFun() {
        var newDiv;
        newDiv = $("<div>empty crystals body</div>");
        newDiv = $(newDiv).attr("id", "crystalsMainBody");
        $("#mainBody").append(newDiv);
        crystalButtonFun();
    }

    function crystalButtonFun() {
        var targetDiv, newDiv, newDiv1, newDiv2, newDiv3, newDiv4;
        newDiv = $("<div>  empty row</div>");
        newDiv1 = $("<div>empty col1</div>"), newDiv2 = $("<div>empty col2</div>"), newDiv3 = $("<div>empty col3</div>"), newDiv4 = $("<div>empty coi4</div>");
        newDiv = $(newDiv).attr("id", "crystalsMainBodyRow1").attr("class", "row").text("");
        $(newDiv1).attr("id", "crystalCol1").attr("class", "col-3").text(""), $(newDiv2).attr("id", "crystalCol2").attr("class", "col-3").text(""), $(newDiv3).attr("id", "crystalCol3").attr("class", "col-3").text(""), $(newDiv4).attr("id", "crystalCol4").attr("class", "col-3").text("");
        $("#crystalsMainBody").append(newDiv);
        $(newDiv).append(newDiv1), $(newDiv).append(newDiv2), $(newDiv).append(newDiv3), $(newDiv).append(newDiv4);

        clearAllColAndRowText();
        var aNewDiv1;
        aNewDiv1 = $("<div>empty loop number: 1 div</div>");
        aNewDiv1 = $(aNewDiv1).attr("id", "crystalNo1").text("");
        var aBtn1;
        aBtn1 = $("<button>empty loop number 1 button</button>");
        aBtn1 = $(aBtn1).attr("id", "crystalButtonNo1").text("");
        $(newDiv1).append(aNewDiv1);
        $(aNewDiv1).append(aBtn1);
        var aNewDiv2;
        aNewDiv2 = $("<div>empty loop number: 2 div</div>");
        aNewDiv2 = $(aNewDiv2).attr("id", "crystalNo2").text("");
        var aBtn2;
        aBtn2 = $("<button>empty loop number 2 button</button>");
        aBtn2 = $(aBtn2).attr("id", "crystalButtonNo2").text("");
        $(newDiv2).append(aNewDiv2);
        $(aNewDiv2).append(aBtn2);
        var aNewDiv3;
        aNewDiv3 = $("<div>empty loop number: 3 div</div>");
        aNewDiv3 = $(aNewDiv3).attr("id", "crystalNo3").text("");
        var aBtn3;
        aBtn3 = $("<button>empty loop number 3 button</button>");
        aBtn3 = $(aBtn3).attr("id", "crystalButtonNo3").text("");
        $(newDiv3).append(aNewDiv3);
        $(aNewDiv3).append(aBtn3);
        var aNewDiv4;
        aNewDiv4 = $("<div>empty loop number: 4 div</div>");
        aNewDiv4 = $(aNewDiv4).attr("id", "crystalNo4").text("");
        var aBtn4;
        aBtn4 = $("<button>empty loop number 4 button</button>");
        aBtn4 = $(aBtn4).attr("id", "crystalButtonNo4").text("");
        $(newDiv4).append(aNewDiv4);
        $(aNewDiv4).append(aBtn4);
    }

    $("body").on("click", "button", function () {
        var btnClick;
        btnClick = event.srcElement.id;
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
            score = 0;
            score = playerTotalScore;
            crystalsOneClickFun(score);
        }

        function btnClickedEventTwo() {
            score = 0;
            score = playerTotalScore;
            crystalsTwoClickFun(score);
        }

        function btnClickedEventThree() {
            score = 0;
            score = playerTotalScore;
            crystalsThreeClickFun(score);
        }

        function btnClickedEventFour() {
            score = 0;
            score = playerTotalScore;
            crystalsFourClickFun(score);
        }

        function crystalsOneClickFun(oldScore) {
            currentScore = 0, updatedScore = 0;
            currentScore = oldScore;

            updatedScore = currentScore + crystalOne;

            $("#playerScore").text(updatedScore);
            newGameCheck(updatedScore);
            playerTotalScore = updatedScore;
        }

        function crystalsTwoClickFun(oldScore) {
            currentScore = 0, updatedScore = 0;
            currentScore = oldScore;

            updatedScore = currentScore + crystalTwo;

            $("#playerScore").text(updatedScore);
            newGameCheck(updatedScore);
            playerTotalScore = updatedScore;
        }

        function crystalsThreeClickFun(oldScore) {
            currentScore = 0, updatedScore = 0;
            currentScore = oldScore;

            updatedScore = currentScore + crystalThree;

            $("#playerScore").text(updatedScore);
            newGameCheck(updatedScore);
            playerTotalScore = updatedScore;
        }

        function crystalsFourClickFun(oldScore) {
            currentScore = 0, updatedScore = 0;
            currentScore = oldScore;

            updatedScore = currentScore + crystalFour;

            $("#playerScore").text(updatedScore);
            newGameCheck(updatedScore);
            playerTotalScore = updatedScore;
        }

        function newGameCheck(aScore) {
            score = 0, targetScore = 0;
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
            playerTotalScore = 0;
            oldScore = 0;
            aScore = 0;
            score = 0;
            currentScore = 0;
            updatedScore = 0;
            targetScore = 0;
            newGameCheck = 0;
            updateScore = 0;
        }

        function newGame(isNewGame) {
            newGameCheck = "";
            newGameCheck = isNewGame;
            switch (newGameCheck) {
                case "lost":
                    newWinningNumberFun(), crystalsOneFun(), crystalsTwoFun(), crystalsThreeFun(), crystalsFourFun();
                    newLosses = 0;
                    newLosses = totalLosses;
                    newLosses = newLosses + 1;
                    newWins = totalWins;
                    totalLossesFun(newLosses), totalWinsFun(totalWins), newScore(0);
                    break;
                case "won":
                    newWinningNumberFun(), crystalsOneFun(), crystalsTwoFun(), crystalsThreeFun(), crystalsFourFun();
                    newWins = 0;
                    newWins = totalWins;
                    newWins = newWins + 1;
                    newLosses = totalLosses
                    totalWinsFun(newWins), totalLossesFun(totalLosses), newScore(0);
                    break;
                default:
                    break;
            }

            newGameValues();
        }

        function newScore(oldScore) {
            score = 0;
            score = oldScore;
            playerTotalScore = score;
            $("#playerScore").text(playerTotalScore);
        }

    });

    function initialScoreBodyFun() {
        var newDiv;
        newDiv = $("<div>empty score body div</div>");
        newDiv = $(newDiv).attr("id", "scoreBody");
        $("#mainBody").append(newDiv);
        var newDiv2;
        newDiv2 = $("<div></div>");
        newDiv2 = $(newDiv2).attr("id", "playerScore").text(playerTotalScore);
        $(newDiv).append(newDiv2);
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
