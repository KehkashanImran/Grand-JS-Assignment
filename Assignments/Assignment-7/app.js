alert("This is assignment 7");

/* 1. Write a program to take “city” name as input from user. If
user enters “Karachi”, welcome the user like this:
“Welcome to city of lights” */

var cityName=prompt("Enter your city name...");
if (cityName==="karachi"){
    alert("Welcome to city of lights");
}
else{
    alert("welcome to your city")
}
/* 2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am. */

var gender=prompt("Enter your gender please");
if (gender=="male"){
alert("Good Morning Sir");
}
if(gender==="female"){
    alert("Good Morning Ma'am")
}

/* 3. Write a program to take input color of road traffic signal
from the user & show the message according to this table:
Signal color Message
Red Must Stop
Yellow Ready to move
Green Move now */
var inputColor=prompt("Enter color of road traffic signal i.e red , green , yellow" );
if (inputColor==="red"){
    alert ("Red Must Stop...");
}
 else if(inputColor==="yellow"){
alert("Yellow Ready to move..");
}

 else if(inputColor==="green"){
    alert("Green Move now..")
}
else
alert("Enter Red , Green or Yellow color please");



/* 4- Write a program to take input remaining fuel in car (in
litres) from user. If the current fuel is less than 0.25litres,
show the message “Please refill the fuel in your car” */
var remainingFuel=+prompt("Enter Remaining Fuel in your car");
if(remainingFuel<0.25){
    alert("Please refill the fuel in your car")
}else{
alert ("Your Car's Fuel is ok..");
}

/* 5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
User Input & Conditional Statement | JAVASCRIPT

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
e. if (true){
alert("True");
}
if (false){
alert("False");
}f. if("car" < "cat"){
alert("car is smaller than cat");
} */
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
  var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}
/* 6. Write a program to take input the marks obtained in three
subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute
grade as per following table: */

var totalMarks=+prompt("Enter your total marks...");
var marksObtained=+prompt("Enter marks obtained...");
var percentage=(marksObtained/totalMarks)*100;
var grade;
var remarks;
if (percentage>=80){
grade="A+";
remarks="Excellent";
}else if(percentage>=70){
    grade="A";
    remarks="Good";
}else if(percentage>=60){
grade="B";
remarks="You need to Improve ";
}
else {
grade="Fail";
remarks="Sorry"
}
document.write("<br><hr><h1>MARK SHEET</h1></hr><br>");
document.write("<br> Total Marks ... :"+ totalMarks);
document.write("<br>Marks Obtained : " + marksObtained);
document.write(" <br>Percentage ... :"+ percentage +"%");
document.write("<br> Grade : " + grade);
document.write("<br>Remarks ..." + remarks+"<hr>");

/* 7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”. */
var secretNumber=7;
var guessNumber=+prompt("Enter any number ranging from 1 to 10 ");
if (guessNumber===secretNumber){
alert("Bingo ! Correct answer .");
}
else if ((guessNumber+1)===secretNumber){
    alert("Close enough to the correct answer");
}
else{
    alert("Try Again ...");
}

/* 8. Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number
is divisible by 3. */

var number=+prompt("Enter any number to check its divisibility by 3 ");
var checkDivisible=(number % 3);
 if (checkDivisible===0){
alert(" Number " + number + " is divisible by 3")
}
else{
    alert("Number " + number + " is not divisible by 3");
} 


/* 9. Write a program that checks whether the given input is an
even number or an odd number. */

var number=+prompt("Enter any number to check whether it is Even or Odd ");
var checkNum = (number % 2)
if (checkNum===0){
alert(number + " is Even Number");
}
else{
    alert(number + " is Odd Number ");
}
/* 10. Write a program that takes temperature as input and
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.” */

var temperature=+prompt("Enter your city's temperature ..");
if (temperature>40){
    alert( "It is too hot outside.");
}
else if (temperature>30){
    alert( "The Weather today is Normal.");
}
else if(temperature>20){
    alert( "Today’s Weather is cool.");
}
else if(temperature>10){
    alert("Today's weather is cool");
}
/* 11- Write a program to create a calculator for +,-,*, / & %
using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */
var firstNumber=+prompt("Enter First Number ");
var secondNumber=+prompt("Enter Second Number ");
var operation= prompt("Enter Operation +  - * / or %");
var result;
if (operation ==="+"){
result=firstNumber+secondNumber;
}
else if(operation==="-"){
result=firstNumber-secondNumber;
}
else if (operation ==="*"){
result=firstNumber*secondNumber;
}
else if(operation==="/"){
result=firstNumber/secondNumber;
}
else if(operation ==="%"){
result =firstNumber%secondNumber;
}
else{
    alert("Enter Right Operand please")
}

alert("The Result is " + result )