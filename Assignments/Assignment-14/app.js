/* 1  Write a function that displays current date & time in your
browser. */
function myDateFunction(){
    var myDate=new Date();
    document.write("Today's date is .." + myDate)
}
myDateFunction();
document.write("<br><hr>");

/* 2 Write a function that takes first & last name and then it
greets the user using his full name. */

function greets(firstName,lastName){
    alert("Welcome ..." + firstName + " "+lastName)
}
greets("Sir", "Usama");

/* 3 Write a function that adds two numbers (input by user)
and returns the sum of two numbers. */

function addition(num1,num2){
    return num1+num2;
}
var input1=+prompt("Enter first number ");
var input2=+prompt("Enter second number ");
alert(addition(input1,input2));

/* 4. Calculator:
Write a function that takes three arguments num1, num2
& operator & compute the desired operation. Return and
show the desired result in your browser. */

var input1=+prompt("Enter first number ");
var input2=+prompt("Enter second number  ");
var operator=prompt("Enter Operator ");
 
  function myCalculator(num1, num2, operator) {
    let result;
  
    // Perform the desired operation based on the operator
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
        document.write("Invalid operator!");
        return ;
    }
  
    return result ;
  }
  document.write("Calculator Result: " + myCalculator(input1, input2, operator)+"<br><hr>");

  /* 5. Write a function that squares its argument. */

function mySquare(num){
    return num*num;
}

var num=+prompt("Enter any number to get its square ...")
alert("Square of  " + num + " is : " + mySquare(num))

/*  6 Write a function that computes factorial of a number. */
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  var number=+prompt("Enter any number to get its factorial ...")
  document.write(factorial(number));
  /* 7. Write a function that take start and end number as inputs
& display counting in your browser. */

//counting function
function counting(startingNum,endingNum) {
    for(var i = startingNum;i<=endingNum;i++)
    document.write(i+ " ")
  }

  var startingNum=+prompt("Enter a number from where counting will be started ...")
  var endingNum=+prompt("Enter a number from where counting will be ended...")
  counting(startingNum,endingNum);
  document.write("<br><hr>");

  /* 8. Write a nested function that computes hypotenuse of a
right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2

Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare() */

var base=+prompt("Enter base of a triangle");
var perpendicular=+prompt("Enter perpendicular of a triangle");

//outer function to calculate hypotenuse
function calculateHypotenuse( base, perpendicular){
var hypotenuse;
var base=calculateSquare(base);
var perpendicular=calculateSquare(perpendicular)
 hypotenuse= base + perpendicular;
 //inner function to calculate square
function calculateSquare(num){
 return num*num

}
return hypotenuse;
}

document.write("<br>The hypotenuse of a triangle is ....: "+ calculateHypotenuse(base,perpendicular));

/* 9. Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */

//Arguments as variables
function calculateArea(width, height){
    var area=width*height;
    return area;
    }
    
    var width=45;
    var height=7;
    //passing Arguments as variables
    document.write("Function execute as passing Argument as variables "+calculateArea(width,height))
    
    //passing Arguments as values
    document.write("<br>Function execute as passing Argument as values  " + calculateArea(25,4));

    /* 10. Write a JavaScript function that checks whether a passed
string is palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as
forward, e.g., madam. */

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var checkString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the cleaned string
    var reversedStr = checkString.split("").reverse().join("");
    
    // Check if the cleaned string and its reverse are equal
    if(checkString=== reversedStr){
    return "The given string is a plaindrome "
  }
  else
  return "The given string is not a plaindrome"
}
  var userString = prompt("Enter a string to check whether it is plaindrome or not");
alert(isPalindrome(userString)); 



/* 11 Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox' */

function capitalizeWords(myStr) {
    var words = myStr.split(" ");
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    var capitalizedStr = words.join(" ");
    
    return capitalizedStr;
  }
  var sentence = prompt("Enter sentence to capitalize each word...");
var capitalizedSentence = capitalizeWords(sentence);
document.write("Example string was : " + sentence+"<br>"); 
document.write("Capitalize Each string now is : "+capitalizedSentence); 


/* 12  Write a JavaScript function that accepts a string as a
parameter and find the longest word within the string.
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/

function longestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    
    for (var i = 0; i < words.length; i++) {
      var currentWord = words[i];
      
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
    }
    
    return longestWord;
  }
  var sentence = prompt("Enter a sentence to detect the longest word");
var longest = longestWord(sentence);
document.write("<h3><br>The lognest word in the sentence is...."+ longest);



/* Write a JavaScript function that accepts two arguments, a
string and a letter and the function will count the number of
occurrences of the specified letter within the string.
Sample arguments : 'JSResourceS.com', 'o */


function countLetters(str,letter){

  var count=0;
  for(var i=0;i<str.length;i++){
if(str[i]===letter){
count=count+1;
document.write("<br>" + str[i]);
}
  }
  return count;
}

var str=prompt("Enter a string  ...");
var letter =prompt("Enter any letter to check its occurances..")
alert(" The letter " + letter + "  occurs "+  countLetters(str,letter) + " times in the sentence")

/* 14. The Geometrizer
Create 2 functions that calculate properties of a circle, using
the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area
is NN".
Circumference of circle = 2πr
Area of circle = πr2 */

function calcCircumference(radius){
  var circumference=2*(3.14)*radius;
  return circumference;
  }
  
  function calcArea(radius){
    var area=(3.14)*((radius)*(radius))
      return area;
  
      }
      var radius=prompt("Enter radius of a circle to calculate Area and Circumference...")
      document.write("<h3>properties of a circle :  Radius : "+ radius +"<br>")
      document.write("<br>The Area of a Circle is : "+ calcArea(radius))
     document.write("<br>The Circumference of a Circle is : "+ calcCircumference(radius)+"</h3><hr>")
  
     