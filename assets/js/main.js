
$(document).ready(function () {
    var crystals = ["crystal-1","crystal-2","crystal-3","crystal-4"];
    var crystalVal = [9,7,6,1];
    var randomNumber = Math.floor(Math.random() * 45) + 10;
    $("#random-number").html(randomNumber);
    console.log(randomNumber);

    $("img").click(function () {
        console.log("crystal clicked");
        console.log(this.id);
        scoreKeeper(this.id);

        function scoreKeeper(id) {
            console.log("from function:", id);

        }
    });
});
