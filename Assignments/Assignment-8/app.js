/* 1. Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).
Characters	ASCII Values
A – Z	65 – 90
a – z	97 – 122
0 – 9	48 – 57 */

var userInput=prompt("Enter any character ")

var code=userInput.charCodeAt(0);
if((code>=65) && (code<= 90)){
    alert("Character is a capital character ")
}
 else if ((code>=97) && (code<=122)){
alert("Character is a lower case character")
}
else if((code>=48) && (code<=57))
alert("Character is a Number ")
 
   
/* 2. Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal. */
var num1=+prompt("Enter First Number..")
var num2=+prompt("Enter second Number..")
if (num1>num2){
    alert("First number is greater..." +num1 +" is greater")
}
else if (num1===num2){
    alert("Both numbers are equal ...");
}
else if (num1<num2){
alert("Second number is greater..."+ num2 + " is greater");
}
else
alert("Enter right input");
/* 3. Write a program that takes input a number from user &
state whether the number is positive, negative or zero. */
var inputNum=+prompt("Enter a number ");
if (inputNum>0){
    alert("The number is Positive")
}
else if (inputNum<0){
alert("The number is Negative ");
}
else if (inputNum==0){
    alert("The Number is 0");
}
/* 4. Write a program that takes a character (i.e. string of
    length 1) and returns true if it is a vowel, false otherwise */
    var char=prompt("Enter a character to check whether it is vowel or not...");
if (char==='a'||char==='e' || char==='i'||char==='o'||char==='u'){
    alert("It is a vowel")
}
else{
    alert("Not a vowel");
}
/* 5. Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise */

var password1=prompt("Enter your first password..");
var password2=prompt("Enter your second password..");
if(password1==="" || password2==="")
{
    alert("Please enter your password")
}
else if(password1===password2){
    alert("Equal");
}
else 
alert("Not equal");

/* 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
} */

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}

/* 7. Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements */

var inputTime=prompt("Enter time in 24 hours clock format..like: 1900");
if (inputTime==="1900")
{
    if((inputTime>="0000") && (inputTime<"1200"))
    alert("Good Morning")
}
else if ((inputTime>="1200") && inputTime<"1700"){
    alert("Good Afternoon")
}
else if ((inputTime>="1700") && inputTime<"2100"){
    alert("Good Evening")
}
else if ((inputTime>="2100") && inputTime<="2359"){
    alert("Good Night")
}
else
alert("Enter correct format")

