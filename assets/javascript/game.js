$(document).ready(function() {
    // temporary holding area for creating variables to be moved later
    var /* winningNumber, */ playerTotalScore, /* crystalOne, crystalTwo, crystalThree, crystalFour, */ totalWins, totalLosses;

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

    totalWins = 0;
    console.log("The initial value of totalWins is: " + totalWins);

    totalLosses = 0;
    console.log("The initial value of totalLosses is: " + totalLosses);

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

    function initialWinningNumberDivFun() {
        var newDiv2 = $("<div>empty text winning number div</div>");

        newDiv2 = $(newDiv2).attr("id", "winningNumberDiv");

        newDiv2 = $(newDiv2).text(winningNumberFun());

        console.log("The current value of newDiv.text() is: " + newDiv2.text());

        $("#winningNumberBody").append(newDiv2);
    }

    function newWinningNumberFun() {
        var newWinningNumber = $("#winningNumberDiv");

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

    // temporary holding area for general functions
    instructionsBodyFun();
    
    initialWinningNumberBodyFun();

    initialWinningNumberDivFun();

    newWinningNumberFun();

    // initialGameRecordBodyFun();

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
