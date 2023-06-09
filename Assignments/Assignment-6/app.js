alert("This is assignment 6")
/* 1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser: */

var num=+prompt("Enter a number...")
document.write("<br>The value of a is " + num)
document.write("<br><br>The value of ++a is " + (++num))
document.write("<br>"+ "Now the value of a is " + num)

document.write("<br><br> The value of a++ is " + (num++))
document.write("<br>Now the value of a is " + num)

document.write("<br><br> The value of --a is " + (--num))
document.write("<br>Now the value of a is " + num);

document.write("<br><br>The value of  a-- is " + (num--));
document.write("<br>Now the value of a is " + num+"<hr>")

/* 2. What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--; */
var a = 2, b = 1;
document.write("a is " + a);
var c = (--a) - (--b);
document.write(" <br>the result of --a  - --b is " + c );
var result = --a - --b + ++b + b--;
document.write("<br>The result of --a - --b + ++b is " + result+"<hr>");

/*3-  Write a program that takes input a name from user &
greet the user. */

var userName=prompt("Enter your name please...");
document.write("<br>Welcome to my Assignment  " + userName+"<hr>");

/*  5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/
var num = prompt("Enter Number", "0") //prompt user to enter the number
var num = parseInt(num) || 5;
document.write("<br> <B>TASK 5</B> "+ "<br><b>"+" Table of "  + num)
for(i=1;i<=10;i++){
document.write("<br>"+"<br>"+ num+ "*" + i + " = " + num*i)
}
document.write("<hr>");
/* 6. 
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable. 
Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/
var subject1=prompt("Enter First Subject Name...");
var subject2=prompt("Enter Second Subject Name...");
var subject3=prompt("Enter Third Subject Name...");
var totalMarks=300;
var obtainMarks1=+prompt("Enter " +  "obtained marks of  " +subject1);
var obtainMarks2=+prompt("Enter " +  "obtained marks of  " +subject2);
var obtainMarks3=+prompt("Enter " +  "obtained marks of  " +subject3);
var sub1Percentage=(obtainMarks1/100)*100;
var sub2Percentage=(obtainMarks2/100)*100;
var sub3Percentage=(obtainMarks3/100)*100;
var TotalMarksObtained=obtainMarks1+obtainMarks2+obtainMarks3;
var percentage= (TotalMarksObtained/totalMarks)*100
document.write("<table><tr><th>Subjects</th><th>Total Marks</th>  <th>Obtained Marks</th>  <th>Percentage</th></tr><tr><td>"+subject1+"</td><td>100</td><td>"+obtainMarks1+"</td><td>"+sub1Percentage+"%"+"</td></tr><tr><td>"+subject2+"</td><td>100</td><td>"+obtainMarks2+"</td><td>"+sub2Percentage+"%"+"</td></tr><tr><td>"+subject3+"</td><td>100</td><td>"+obtainMarks3+"</td><td>"+sub3Percentage+"%"+"</td></tr><tr></tr><td></td><td>300</td><td>"+TotalMarksObtained+"</td><td>"+percentage+"%"+"</td></table>")
document.write("<hr>");
  
    
  
  
