/* global $ */
var totalScore = 0;

$("button").click(function() {
    var name = $("#name").val();
    var placement = "TBD";
    var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    var q1Result = $("#question1").val().toLowerCase();
    var q2Result = $("#question2").val().toLowerCase();
    var q3Result = $("#question3").val().toLowerCase();
    
    if(q1Result === "yes"){
        totalScore++;
    }
    if(q2Result === "yes"){
        totalScore++;
    }
    if(q3Result === "yes"){
        totalScore++;
    }
    
    function result(){
        if(q1Result === "no" && q2Result === "no" && q3Result === "no"){
            return "Brawl";
        }else if(q1Result === "yes" && q2Result === "no" && q3Result === "no"){
            return "Ultimate";
        }else if(q1Result === "no" && q2Result === "yes" && q3Result === "no"){
            return "N64";
        }else if(q1Result === "no" && q2Result === "no" && q3Result === "yes"){
            return "Smash 4";
        }else if(q1Result === "yes" && q2Result === "yes" && q3Result === "no"){
            return "Melee";
        }else if(q1Result === "no" && q2Result === "yes" && q3Result === "yes"){
            return "Brawl";
        }else if(q1Result === "yes" && q2Result === "no" && q3Result === "yes"){
            return "Ultimate";
        }else if(q1Result === "yes" && q2Result === "yes" && q3Result === "yes"){
            return "Melee";
        }
    }

    $("#result").append(result());
});