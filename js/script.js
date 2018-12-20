/* global $ */
var melee = 0;
var brawl = 0;
var smash4 = 0;
var ultimate = 0;
$("button").click(function() {
    var name = $("#name").val();
    var techPlacement = "TBD";
    var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
    var q1Result = $("#question1").val().toLowerCase();
    var q2Result = $("#question2").val().toLowerCase();
    var q3Result = $("#question3").val().toLowerCase();
    
    if(q1Result === "yes"){
        melee++;
        ultimate++;
    }else{
        brawl++;
        smash4++;
    }
    
    if(q2Result === ""){
        
    }else{
        
    }
    
    if(q3Result === ""){
        
    }else{
        
    }
});