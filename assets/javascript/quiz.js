// No Scrubs Quiz!

//start with button on click
$('#start').on('click',function() {
    // console.log("CLLICKed");   Button is working
    quiz.start();

    var quiz = {
        numQuestions: 9,
        counter: 60,
        countdown: function () {
            quiz.counter--;
            $('#counter').html(quiz.counter);
            if(quiz.counter<=0) {
                console.log("Time is up Scrub!");
                quiz.done();
            }
        },
        start: function() {
            timer = setInterval(quiz.countdown, 1000);
            $('#scrub-questions').prepend('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
        },
  
        done: function () {

        let scrubsClicked =
        count = 0;        
        $('.scrub-click').click( function() {
            count +=1;
            + count;
            // var num = $(this).find('.num');
            // num.text ( parseInt(num.text()) + 1);
        clearInterval(timer);
        },
        var scrubPercentage = quiz.numQuestions/scrubsClicked;

        $('#scrub-questions').append('<h3>Your scrub percentage is " +scrubPercentage "</h3>');
    }
    
})
    // HEre are multiple attempts to get the html question cards to start with propert
    // display: none and then reapper:

    // $('#scrub-questions').removeClass('hideQuiz'); tried adding a class the id and remove

    // removes the start-button
        // $('#scrub-header').remove();

    // var hideQuiz = document.getElementById("#hideQuiz");
    // if (hideQuiz.style.display === "none") {
    //     hideQuiz.style.display = "block";
    // } else {
    //     hideQuiz.style.display = "none";
    // }

    //hide html div, so appears on start function
            // $("scrub-questions").toggle();
            
            // $( "div:hidden" ).show( "fast" );
    
            // $( "#scrub-questions:hidden" ).show( "fast" );
            
            // var showQuiz = document.getElementById("scrub-questions");
