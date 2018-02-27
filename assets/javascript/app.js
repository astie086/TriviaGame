
//counter, correct and wrong answer counters


var correctCount = 0;
var wrongCount = 0;
var count = 60;


$(document).ready(function(){

    //countdown starts after start clicked
	$("#startbutton").on("click", function(){
		startCountdown();
	});
    
    //display countdown after hitting start
    function countown(){
        count--;
        $('#countdowntimer').html(count + "seconds");
    }

    //running after submit is clicked
    $('donebutton').on("click", function(){
        count = 0;
        timeUp();
    });

    if(count == -1){
        timeUp();
    }

    // starting countdown going down every 1 second
    function startCountdown() {
        setInterval(countdown, 1000);
    }

    //check answers
    function timeUp(){

            var Q1 = $('input:radio[name="q1"]:checked').val();
            var Q2 = $('input:radio[name="q2"]:checked').val();
            var Q3 = $('input:radio[name="q3"]:checked').val();
            var Q4 = $('input:radio[name="q4"]:checked').val();
            var Q5 = $('input:radio[name="q5"]:checked').val();
           
            if(Q1 == 1){
                correctCount++;
            }
            else{
                wrongCount++;
            }
            
            if(Q2 == 1){
                correctCount++;
            }
            else{
                wrongCount++;
            }
    
    
            if(Q3 == 1){
                correctCount++;
            }
            else{
                wrongCount++;
            }
    
            if(Q4 == 1){
                correctCount++;
            }
            else{
                wrongCount++;
            }
    
            if(Q5 == 1){
                correctCount++;
            }
            else{
                wrongCount++;
            }

            $('#correctAnswers').html(correctCount);
            $('#wrongAnswers').html(wrongCount);
       
    
         }
        });

