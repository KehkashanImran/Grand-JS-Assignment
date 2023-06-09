/* 1. Write a program that takes two user inputs for first and
last name using prompt and merge them in a new variable
titled fullName. Greet the user using his full name. */

var firstName=prompt("Enter your first name ..");
var lasstName=prompt("Enter your last name ..");
alert ("Welcome "+ firstName + " "+lasstName)


/* 2. Write a program to take a user input about his favorite
mobile phone model. Find and display the length of user
input in your browser */

var phone=prompt("Enter your favourite mobile phone model ..");
alert (phone)
var count=0;
for(var i =0;i<=phone.length-1;i++){
    count=count+1;

}
document.write("<h2>My favourite phone is " + phone +"<br>");
document.write("The length of String is " + count);
document.write("<br><hr>")

/* 3. Write a program to find the index of letter “n” in the word
“Pakistani” and display the result in your browser . */

var country="pakistani";

for (var i = 0; i < country.length; i++) {
    if (country.charAt(i) === "n") {
  document.write("String : Paksitani <br> n found  at index " + i);
    break;
    }
    }
    document.write("<br><hr>")
    /* 4. Write a program to find the last index of letter “l” in the
word “Hello World” and display the result in your browser. */

var word="Hello World";


for (var i = 0; i < word.length; i++) {
  
  document.write("String : Hello World <br> Last index of 'l' :  "  + word.lastIndexOf("l") );
    break;
    }
    document.write("<br>")
    /* 5. Write a program to find the character at 3rd index in the
word “Pakistani” and display the result in your browser. */

var nationality="Pakistani";
document.write("<hr><h2><br>String : Pakistani <br> Character at index 3 : "+ nationality[3])

/* 
6. Repeat Q1 using string concat() method. */
var firstName=prompt("Enter your first name ..");
var lastName=prompt("Enter your last name ..");
alert ("Welcome "+ firstName.concat(" ", lastName))

/* 7. Write a program to replace the “Hyder” to “Islam” in the
word “Hyderabad” and display the result in your browser. */

var word = "Hyderabad";
var result = word.replace("Hyder", "Islam");
document.write("<h2>City : "+word +"<br>"+"After Replcaement :"+ result);
document.write("<br><hr>")

/* 8. Write a program to replace all occurrences of “and” in the
string with “&” and display the result in your browser.
var message = “Ali and Sami are best friends. They play cricket and
football together.”; */

var text="“Ali and Sami are best friends. They play cricket and football together";
document.write("<h3>Text is  : " + text + "<br>")
var newText = text.replace(/and/g, "&");
document.write("After replacing the text is : " + newText)
document.write("<br><hr>")


/* 9- Write a program that converts a string “472” to a number
472. Display the values & types in your browser. */

var string="472"
var number=472;
document.write("<h2> Value :  " + string + "<br>Type  :"+typeof(string));
document.write("<br><h2> Value :  " + number + "<br>Type  :"+typeof(number));
document.write("<br><hr>")

/* 10. Write a program that takes user input. Convert and
show the input in capital letters. */

var input=prompt("Enter word to change in capital letters ...");
newInput=input.toUpperCase();
document.write("word in Capital case is : "+newInput)

document.write("<br><hr>")

/* Write a program that takes user input. Convert and
show the input in title case. */

var str1=prompt("Enter any word")
   var str = str1.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    document.write("User input : " + str1 + "<br>")
    document.write( "Title Case : "+str.join(' '));
    document.write("<br><hr>")

    /* 12. Write a program that converts the variable num to
string.
var num = 35.36 ;
Remove the dot to display “3536” display in your browser. */
var num= 35.36;
document.write("<h3>Number : " + num )
num=num.toString()
num=num.toString().replace('.',"")
document.write("<br>Result after removing decimal is : "+ num);
document.write("<br>")

/* 13 Write a program to take user input and store username
in a variable. If the username contains any special symbol
among [@ . , !], prompt the user to enter a valid username.
For character codes of [@ . */

var userName=prompt("Enter your name");
//document.write(userName.charCodeAt(4))
for(var i=0;i<userName.length;i++){
    if(userName.charCodeAt(i)>=33 && (userName.charCodeAt(i)<=64)  ){
        alert("enter a valid username.");
    }
}
 


/* 14 -  You have an array
A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array. After searching, prompt the user whether the given
item is found in the list or not.
Note: Perform case insensitive search. Whether the user
enters cookie, Cookie, COOKIE or coOkIE, program
should inform about its availability. */
var backery=["cake","applepie","cookie","chips","patties","bread","eggs","rusk"]
var order=prompt("Welcome to My Backery..What do you want to order Sir/Ma'am?")
var check="false";
for (var i=0;i<backery.length;i++){
if(order.toLowerCase()===backery[i]){
    var check="true";
alert(order.toLowerCase() + " is available at index " + i + " in our backery ");
}
}
if(check==="false"){ alert("We are sorry .." + order.toLowerCase() + " is not available in our backery") 

}

/*15. Write a program to convert the following string to an
array using string split method.
var university = “University of Karachi”;
Display the elements of array in your browser.
*/
var university = "University of Karachi";
let uniArray = university.split(" ");
document.write("<br><hr>")
for (var i = 0; i < uniArray.length; i++) {
    for(j=0;j<uniArray[i].length;j++){
     document.write(uniArray[i][j]+"<br>");
    }
    document.write("<br>")
     }
     document.write("<hr>")
     /* 17. Write a program to display the last character of a user
input. */
var userInputData=prompt("Enter any word ..");
var lastCharacterIndex=(userInputData.length-1)
document.write("User input : " + userInputData + "<br>");
document.write("Last character of Input is .." + userInputData[lastCharacterIndex])