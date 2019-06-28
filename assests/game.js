///varaibles


var randomResult;
var losses = 0;
var wins = 0;
var previous = 0;

var value = prompt("How many gems would you like to use 1-9?");





var reset_Stop = function () {


    $(".gems").empty();

    var images = [
        'https://images-na.ssl-images-amazon.com/images/I/61DzstO1hJL._SY450_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61h0eE0OhEL._SX466_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61H8IsPaDNL._SY450_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/614ByoY%2B5DL._SL1313_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61vsddlz1IL._SL1312_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/6171vUCgyUL._SL1312_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61BJPYRDZkL._SL1314_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61hizORNXxL._SL1312_.jpg',
        'https://images-na.ssl-images-amazon.com/images/I/61Ls5sXOvnL._SY450_.jpg'];

    var randomImages = images;
    ///random target number between 30-99
    randomResult = Math.floor(Math.random() * 69) + 30;
    ///displaying random number in html #result
    $("#result").html('Target Number: ' + randomResult);
    // amount of boxes to click on(you can increase boxes)
    for (var i = 0; i < value; i++) {
        // random number given to each box between 1-12
        var random = Math.floor(Math.random() * 11) + 1;

        ///given  attributes to crystal
        var gem = $("<div>");
        gem.attr({
            "class": 'gem',
            "random_Number": random


        });
        /// displaying images into boxes
        gem.css({
            "background-image": "url('" + randomImages[i] + "')",
            "background-size": "cover"

        });


        $(".gems").append(gem);
    }//showing added score to show player where they are at
    $("#previous").html("Total Score: " + previous);
}
reset_Stop();

//#document click on crystals
$(document).on('click', ".gem", function () {
    //turning string into number
    var num = parseInt($(this).attr('random_Number'));

    previous += num;
    console.log(previous);

    $("#previous").html("Total Score: " + previous);
    // if previous is greater than randomresult is will add 1 to losses
    if (previous > randomResult) {
        losses++;
        console.log("You Lost!")
        $("#losses").html("Losses: " + losses);
        //keepx previous from adding on 
        previous = 0;

        //resets function if 
        reset_Stop();

    } //if previous equals randomresult add 1 to wins 
    else if (previous === randomResult) {
        wins++;
        console.log("You Win!")
        $("#wins").html("Wins: " + wins);
        //keeps previous for adding on
        previous = 0;
        // reset function at end of game
        reset_Stop();

    }
    /// if loss of more than 3 games add easy mode 
    if (losses == 4) {
        alert("RIGHT CLICK, CLICK INSPECT, CLICK ON CONSOLE IN WINDOW ");

    }
});



