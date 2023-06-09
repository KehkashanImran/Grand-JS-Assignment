//alert("This is assignment 3")
/* 1. Declare a variable called age & assign to it your age. Show
your age in an alert box. */
var age=25;
alert("I am "+ age +" years old");

/* 2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”. */
//var visitCount;
//alert("You have visited this page " + visitCount +" times");

/* 3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser */

var birthYear=1994;
document.write(" <br>"
+"My Birthyear is"  + birthYear+" <br>"+"Data type of my declared variable is Number");

/* 4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing stor

*/
var visitorName;
var product;
var quantity;
visitorName=prompt("Enter your name please");
product=prompt("Enter your Product ");
quantity=+prompt("Enter your quantity");
 document.write("<br><br>"+ visitorName + " ordered " + quantity +"  " + product +"  on Aliz Online Clothing Store");

 