//Create stop watch for 30 second
//  This code will run as soon as the page loads.
window.onload = function() {

    //  Click start button to start stopwatch
    $("#start").click(stopwatch.start);
   // $("#stop").click(stopwatch.stop);
    // $("#start").click(stopwatch.question);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;
var correctAnswer = 0;
var question_1 = [{
    question: "1. How are you?",
    option_1: "not good",
    option_2: "fine",
    option_3: "bad"
}, {
    question: "2. Select capital city of New Jersey?",
    option_1: "New york",
    option_2: "New Brunswick",
    option_3: "Trenton"
}, {
    question: "3. which color i like most?",
    option_1: "Red",
    option_2: "Blue",
    option_3: "Black"
},{
    question: "4. I like to drink...?",
    option_1: "Beer",
    option_2: "Coffee",
    option_3: "Tea"
},{
    question: "5. Who is POTUS?",
    option_1: "Trump",
    option_2: "Obama",
    option_3: "Clinton"
}];

$(".radio-inline").hide();
var stopwatch = {

    time: 10,

    reset: function() {

        stopwatch.time = 10;

        //  TODO: Change the "display" div to "00:00."
        $("#display").html("00:10");

    },

    start: function() {


        intervalId = setInterval(stopwatch.count, 1000);
        console.log("count: " + stopwatch.time);
        $(".radio-inline").show();

        $("#ques-1").html(question_1[0].question);
        $("#opt_1").html(question_1[0].option_1);
        $("#opt_2").html(question_1[0].option_2);
        console.log(question_1[0].option_2);
        $("#opt_3").html(question_1[0].option_3);
        console.log(question_1[0].option_3);
        console.log(question_1[0].option_1);


        $("#ques-2").html(question_1[1].question);
        $("#opt_21").html(question_1[1].option_1);
        console.log(question_1[1].option_1);
        $("#opt_22").html(question_1[1].option_2);
        console.log(question_1[1].option_2);
        $("#opt_23").html(question_1[1].option_3);
        console.log(question_1[1].option_3);

 		$("#ques-3").html(question_1[2].question);
        $("#opt_31").html(question_1[2].option_1);
        $("#opt_32").html(question_1[2].option_2);
        console.log(question_1[2].option_2);
        $("#opt_33").html(question_1[2].option_3);
        console.log(question_1[2].option_3);
        console.log(question_1[2].option_1);


        $("#ques-4").html(question_1[3].question);
        $("#opt_41").html(question_1[3].option_1);
        console.log(question_1[3].option_1);
        $("#opt_42").html(question_1[3].option_2);
        console.log(question_1[3].option_2);
        $("#opt_43").html(question_1[3].option_3);
        console.log(question_1[3].option_3);

         $("#ques-5").html(question_1[4].question);
        $("#opt_51").html(question_1[4].option_1);
        console.log(question_1[4].option_1);
        $("#opt_52").html(question_1[4].option_2);
        console.log(question_1[4].option_2);
        $("#opt_53").html(question_1[4].option_3);
        console.log(question_1[4].option_3);


    },

    stop: function() {
        clearInterval(intervalId);

    },

    count: function() {

        //  TODO: increment time by 1, remember we cant use "this" here.
        stopwatch.time--;
        console.log(stopwatch.time)
        if (stopwatch.time === 00) {

            alert("You answered " + correctAnswer + " Out of 5 questions!");
            stopwatch.stop();
        }

        //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
        //        and save the result in a variable.
        var converted = stopwatch.timeConverter(stopwatch.time);

        //  TODO: Use the variable you just created to show the converted time in the "display" div.
        $("#display").html(converted);

    },

    timeConverter: function(t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        } else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
      }
    };   //stopwatch end


$("#form_1").change(function() {
    var userAnswer = $('input[type=radio][name=option]:checked').val();

    console.log(userAnswer);
    if (userAnswer === "opt_2") {
        correctAnswer++
        console.log("correct: " + correctAnswer);
    }

});

$("#form_2").change(function() {
    var userAnswer = $('input[type=radio][name=option]:checked').val();

    console.log(userAnswer);
    if (userAnswer === "opt_3") {
        correctAnswer++
        console.log("correct: " + correctAnswer);
    }
});

$("#form_3").change(function() {
    var userAnswer = $('input[type=radio][name=option]:checked').val();

    console.log(userAnswer);
    if (userAnswer === "opt_2") {
        correctAnswer++
        console.log("correct: " + correctAnswer);
    }
});
$("#form_4").change(function() {
    var userAnswer = $('input[type=radio][name=option]:checked').val();

    console.log(userAnswer);
    if (userAnswer === "opt_3") {
        correctAnswer++
        console.log("correct: " + correctAnswer);
    }
});
$("#form_5").change(function() {
    var userAnswer = $('input[type=radio][name=option]:checked').val();

    console.log(userAnswer);
    if (userAnswer === "opt_1") {
        correctAnswer++
        console.log("correct: " + correctAnswer);
    }
});




//   $('#form_1 input').change(function() {
// 	var userAnswer = $('input[name=option]:checked', 'form_1').val();
// 	console.log(userAnswer);
// });


//




//after 30 second, alert popup display with final result.
//with start button click
//stop watch start
//5 questions are displaying with options
//user select one answer
//if answer is correct add to correct answer

//when answer all 5 questions - alert message should display.
