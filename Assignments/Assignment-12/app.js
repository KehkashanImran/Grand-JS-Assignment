/* Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
var PositiveInteger=+prompt("Enter a positive Integer ")
document.write("<br>Number : " + PositiveInteger );

var roundOff=Math.round(PositiveInteger);
document.write("<br>RoundOff Value : " + roundOff);

var floorValue=Math.floor(PositiveInteger)
document.write("<br> Floor Value : " + floorValue );

var ceilValue=Math.ceil(PositiveInteger)
document.write("<br> Ceil Value : " + ceilValue + "<br><hr>");


/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */

var NegativeInteger=+prompt("Enter a Negative Integer ")
document.write("<br>Number : " + NegativeInteger );

var roundOff=Math.round(NegativeInteger);
document.write("<br>RoundOff Value : " + roundOff);

var floorValue=Math.floor(NegativeInteger)
document.write("<br> Floor Value : " + floorValue );

var ceilValue=Math.ceil(NegativeInteger)
document.write("<br> Ceil Value : " + ceilValue );
document.write("<hr>")

/* 3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */

var absoluteVaule=+prompt("Enter the number to display its absolute value");
document.write(Math.abs(absoluteVaule))
document.write("<br><hr>");


/* 4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser */

var dice=(Math.random()*10)
dice=Math.ceil(dice);
document.write("<h3>Random Dice Value : " +dice)

/* 5 Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */

var dice=(Math.floor(Math.random() * 2))
if(dice=== 1){
    document.write("<h3>Random coin value : Heads " +dice)
}
else
document.write("<h3>Random coin value : Tails " +dice)
document.write("<hr><br")

/* 6 - Write a program that shows a random number between 1
and 100 in your browser. */

var dice=(Math.random()*100)
dice=Math.ceil(dice);
document.write("<h3>Random Number between 1 & 100 : "+ dice)

/* 7. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */

var secretNum=(Math.random()*10)
secretNum=Math.ceil(secretNum);

var guessNum=+prompt("Guess the secret Number..")
if (guessNum===secretNum){
alert("<h3>You Guess the Secret Number : "+ secretNum)
}
else
alert("<h3>Try Again");





