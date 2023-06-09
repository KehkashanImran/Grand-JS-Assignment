/* 1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser. */

alert("This is assignment 5")
var num1=+prompt("Enter First Number ")
var num2=+prompt("Enter second Number ")
var result=(num1+num2);
document.write("<br><B>TASK 1 </B><br>" + " The Sum of two numbers is " + result+"<hr>");

document.write("<br><b>TASK 2</b>")
/* 2.Repeat task1 for subtraction, multiplication, division &
modulus. */

document.write("<br>" +" The Subraction of two numbers is " + (num1-num2));
document.write("<br>" + " The Multiplication of two numbers is " + num1*num2);
document.write("<br>" + " The Division of two numbers is " + num1/num2);
document.write("<br>" + " The MOdulus of two numbers is " + num1%num2+"<hr>");


/* 3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value
MATH EXPRESSIONS | JAVASCRIPT
Page 2 of 9
after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”. */

var number;
document.write("<br> <B>TASK 3</B>" +"<br>" +"Value afer variable declaration is :  " + number);
number=9;
document.write("<br>" +"Initial value is  " + number );
number++
document.write("<br>" +"Value afer increment  is :  "  + number);
number=number+7;
document.write("<br>" +"Value afer increment 7 is  " + number);
number--;
document.write("<br>" +"Value afer decrement is :  " +  number);
document.write("<br>" +" After dividing the variable's value by 3 , the Remainder is :" + number%3+"<hr>");


/* 4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. Example output */

var ticketCost=600;
totalCost=ticketCost*5;
document.write("<br><B> TASK 4</B> "+"<br>"+"<br><b>"+"Total cost to buy 5 tickets to a movie is " + totalCost + " Rs"+"<hr>")

/* 5 - Write a script to display multiplication table of any
number in your browser. */
var table=+prompt("Enter any number to print Table");
document.write("<br> <B>TASK 5</B> "+ "<br><b>"+" Table of "  + table)
for(i=1;i<=10;i++){
document.write("<br>"+"<br>"+ table + "*" + i + " = " + table*i)
}
document.write("<hr>");
/* 6. The Temperature Converter: It’s hot out! Let’s make a
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.
 */
var F=+prompt("Enter temperature in Fahrenheit degree to convert in Celsius scale")
var CelsiusTemp=(F-32)*5/9
CelsiusTemp=Math.round(CelsiusTemp);
document.write("<br> <B>TASK 6</B> "+"<br><b>"+CelsiusTemp+"'\u00B0 C is "+ F +"\u00B0 F<br>");

var C=+prompt("Enter temperature in Celsius degree to convert in Farhenheit scale");
var farTemp=(C * 9/5)+ 32;
document.write("<br>"+farTemp+"'\u00B0 F is "+ C +"\u00B0 C<br>"+"<hr>");


/* 7. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables 
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges
Compute the total cost & show the receipt in your browser.*/

document.write("<b>TASK  7 </b><BR><strong><h1>Shopping Cart</h1></strong>");
var item1=1800;
var item2=2000;
var orderedQuantityItem1=2;
var item1Cost=item1*orderedQuantityItem1;
var orderedQuantityItem2=3;
var item2Cost=item2*orderedQuantityItem2;
var shippingCharges=500;
var totalCost=+(item1Cost+item2Cost+shippingCharges);
document.write("Price of item 1 is " + item1 +"<br>"+"Quantity of item 1 is " +orderedQuantityItem1+"<br>"+"Price of item 2 is "  + item2 +"<br>" );
document.write(" Quantity of item 2 is " + orderedQuantityItem2 +"<br>" +"Shipping charges " + shippingCharges);
document.write("<br>Total cost of your order is " + totalCost+"<hr>");

/* 8. Store total marks & marks obtained by a student in 2
variables. Compute the percentage & show the result in
your browser */

var totalMarks=+prompt("Enter total marks..");
var marksObtained=+prompt("Enter marks obtained..");
var percentage=+(marksObtained/totalMarks)*100;
document.write("<br><b>TASK 8</b> <BR> Total marks = " +totalMarks);
document.write("<br> Marks Obtained = " + marksObtained);
document.write("<br> Percentage = " + percentage+"<hr>");

/* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
script to convert the total currency to Pakistani Rupees.
Perform all calculations in a single expression.
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
and 1 Saudi Riyal = 28 Pakistani Rupee) */

var UsDollars=10;
var SaudiRiyal=25;
var TotalCurrency=(10*104.80)+(25*28);
document.write("<br> <b>TASK 9 - Currency Converter </b><br>Total Currency in Pakistani Ruppee is " + TotalCurrency+"<hr>");

/* 10. Write a program to initialize a variable with some
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2
Perform all calculations in a single expression */

var num=250;
num=((num+5)*10)/2;
document.write("<br> <b>TASK 10 </b><br>The final result is " + num+"<hr>");

/* 11. The Age Calculator: Forgot how old someone is?
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored
values.
Output them to the screen like so: “They are either NN or NN years old”. */

var CurrentYear=+prompt("Enter current year");
var BirthYear=+prompt("Enter your Birth Year ");
var age=CurrentYear-BirthYear;
document.write("<br><b>Task 11- AGE CALCULATOR</b><br> Your Age is " + age +"<hr>");

/* 12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
MATH EXPRESSIONS | JAVASCRIPT
Page 8 of 9
b. Calculate the circumference based on the radius, and
output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */
document.write("TASK 12 - The Geometrizer:<br>")
var radius1=+prompt ("Enter the Radius of a Circle ..")
var circumference1=(2*(3.14)*radius1);
var area1=((3.14)*(radius1*radius1));
document.write("The radius of a circle is " +radius1);
document.write("<br>The Circumference is " + circumference1);
document.write("<br>The Area is " + area1 +"<hr>");

/* 13. The Lifetime Supply Calculator: Ever wonder how
much a “lifetime supply” of your favorite snack is?
Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of
your life.
Output the result to the screen like so: “You will need
NNNN to last you until the ripe old age of NN" */