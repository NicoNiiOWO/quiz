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
    placement = result();
    if(name != "" && placement != undefined){
        $("#result").text("Congratulations, " + name + ". Your result is "+ placement);
        if(placement === "N64"){
            $("#resultimg").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/4/42/Supersmashbox.jpg/220px-Supersmashbox.jpg");
        }else if(placement === "Melee"){
            $("#resultimg").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Super_Smash_Bros_Melee_box_art.png/220px-Super_Smash_Bros_Melee_box_art.png");
        }else if(placement === "Brawl"){
            $("#resultimg").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/SSBB_Cover.jpg/220px-SSBB_Cover.jpg");
        }else if(placement === "Smash 4"){
            $("#resultimg").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Super_Smash_Bros_for_Wii_U_Box_Art.png/220px-Super_Smash_Bros_for_Wii_U_Box_Art.png");
        }else if(placement === "Ultimate"){
            $("#resultimg").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/5/50/Super_Smash_Bros._Ultimate.jpg/220px-Super_Smash_Bros._Ultimate.jpg");
        }
    }
});