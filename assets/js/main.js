$(document).ready(function () {

    var wins = [];
    var losses = [];
    var totalScore = [];

    $("#win-score").html(wins);
    $("#loss-score").html(losses);
    $("#your-score").html(totalScore);


    function beginGame() {
        var randomNumber = 0;
        var max = 100;
        var min = 30;
        var randomCompNumber = Math.floor(Math.random() * max) + min;
        randomNumber = randomCompNumber;

        $("#target-score").html(randomCompNumber);
        totalScore = 0;
        $("#your-score").html(totalScore);

        var crystal1 = 0;
        var crystalTotalValue = Math.floor(Math.random() * 11) + 1;
        var crystal1 = crystalTotalValue;
        $(document).on("click", "#crystal-1", function () {
            totalScore += crystal1;
            $("#your-score").html(totalScore);
            checkScore();
        });


        var crystal2 = 0;
        var crystalTotalValue = Math.floor(Math.random() * 11) + 1;
        var crystal2 = crystalTotalValue;
        $(document).on("click", "#crystal-2", function () {
            totalScore += crystal2;
            $("#your-score").html(totalScore);
            checkScore();
        });


        var crystal3 = 0;
        var crystalTotalValue = Math.floor(Math.random() * 11) + 1;
        var crystal3 = crystalTotalValue;
        $(document).on("click", "#crystal-4", function () {
            totalScore += crystal3;
            $("#your-score").html(totalScore);
            checkScore();
        });


        var crystal4 = 0;
        var crystalTotalValue = Math.floor(Math.random() * 11) + 1;
        var crystal4 = crystalTotalValue;
        $(document).on("click", "#crystal-5", function () {
            totalScore += crystal4;
            $("#your-score").html(totalScore);
            checkScore();
        });


        function checkScore() {
            if (totalScore === randomNumber) {
                wins++;
                $("#win-score").html(wins);
                totalScore = 0;
                $("#your-score").html(0);
                resetGame();
            }
            else if (totalScore > randomNumber) {
                losses++;
                $("#loss-score").html(losses);
                resetGame();
            }
        }

        function resetGame() {
            totalScore = 0;
            crystal1 = 0;
            crystal2 = 0;
            crystal3 = 0;
            crystal4 = 0;
            var max = 100;
            var min = 30;
            var randomCompNumber = Math.floor(Math.random() * max) + min;
            randomNumber = randomCompNumber;
            $("#target-score").html(randomNumber);
            $("#your-score").html(totalScore)
            beginGame();

        }

    }

    beginGame();

});

