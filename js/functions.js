$(document).ready(function() {
    console.log("functions.js loaded");
    
    function Car(brand, wheels){
        this.brand = brand;
        this.wheels = wheels
    }
    
    /*
    Create a script with two variables assigned to two numbers. 
    Add them together and output the result to the console. 
    */
    $("#addNums").click(function(){
        var x = 1;
        var y = 2;
        var result = x + y;
        console.log("addNum: " + x + " + " + y + " = " + result);
    });
    //Now do the same with two strings.
    $("#addStrings").click(function(){
        var str1 = "Hello ";
        var str2 = "There";
        var result = str1 + str2;
        console.log("addString: " + str1 + " + " + str2 + " = " + result);
    });
        
    /*
    Create a multidimensional array related to a subject that interests you. 
    Output two of the items in sub-arrays to the console.
    */
    $("#multiDArray").click(function(){
       //DO STUFF
        var goats = ["abaza", "cashmere", "arapawa"];
        var cows = ["beefmaker", "dulong", "hays converter"];
        var skunks = ["spotted", "hooded", "striped"];
        var animals = [goats, cows, skunks];
        
        console.log("Printing animal at animals[0][1]: " + animals[0][1]);
        console.log("Printing animal at animals[1][2]: " + animals[1][2]);
    });//multiDArray
    
    /*
    Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.
    */
    $("#checkVarBox").hide();
    $("#checkVar").click(function(){
        $("#checkVarBox").show();
    });//checkVar
    $("#checkButton").click(function(){
        if($("#valueBox").val() < 10){
            alert("Your entered value is less than 10!");
        }else if(isNaN($("#valueBox").val())){
            alert("Your entered value of " + $("#valueBox").val() + " is not a number!");
        }else if($("#valueBox").val() == 10){
            alert("Your number is 10!");
        }else{
            alert("Your value of " + $("#valueBox").val() + " is greater than 10!");
        }
        console.log("valueBox = " + $("#valueBox").val());
    });
});