/* 1. Declare an empty array using JS literal notation to store
student names in future. */
var studentNames=[];
/* 2. Declare and initialize a strings array. */
var stringArr=["Pizza","Burger","Fries"];
/*3 Declare and initialize a numbers array. */
var numberArray=[1,2,3,4,5,];

/* 4: Declare and initialize a boolean array. */
var booleanArray=[true,false];

/* 5 : Declare and initialize a mixed array. */
var mixArray=["Pakistan", 45674 , true]
document.write(mixArray);

/* Declare and Initialize an array and store available
education qualifications in Pakistan (e.g. SSC, HSC, BCS,
BS, BCOM, MS, M. Phil., PhD). Show the listed
qualifications in your browser like: */

var educationInPak=["SSC", "HSC", "BCS",
    " BS", "BCOM", "MS", "M. Phil."," PhD"]
document.write("<h1>QUALIFICATIONS</h1>");
    document.write("<ol><li>"+educationInPak[0]+"</li><li>"+educationInPak[1]+"</li><li>"+educationInPak[2]+"</li><li>"+educationInPak[3]+"</li><li>"+educationInPak[4]+"</li><li>"+educationInPak[5]+"</li><li>"+educationInPak[6]+"</li><li>"+educationInPak[7]+"</li></ol><hr>");

    /* 8. Write a program to store 3 student names in an array.Take
another array to store score of these three students.
Assume that total marks are 500 for each student, display
the scores & percentages of students like: */

var studentNames=["Kehkashan","Sumaira","Saima"]
var score=[450,430,420];
var percentage1=(score[0]/500)*100;
var percentage2=(score[1]/500)*100;
var percentage3=(score[2]/500)*100;
document.write("<br>Score of " + studentNames[0]+" is " + score[0] +". Percentage : " + percentage1+ "%" )
document.write("<br>Score of " + studentNames[1]+" is " + score[1] +". Percentage : " + percentage2+ "%" )
document.write("<br>Score of " + studentNames[2]+" is " + score[2] +". Percentage : " + percentage3+ "%" )
document.write("<hr>")
/* 9. Initialize an array with color names. Display the array
elements in your browser.
a. Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser.
c. Add two more color to the beginning of the array.
Display the updated array in your browser.
d. Delete the first color in the array. Display the updated
array in your browser.
e. Delete the last color in the array. Display the updated
array in your browser.
f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser.
g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */
var colorNames=["red","blue","green","purple","White","black"];
document.write("<br>");

document.write("List before Adding color name "+colorNames);
document.write("<br><hr>");
/* A---Ask the user what color he/she wants to add to the
beginning & add that color to the beginning of the array.
Display the updated array in your browser. */
var addElementInStart=prompt("Enter color you want to add in the begining");
colorNames.unshift(addElementInStart);
document.write("<br>");
document.write(" List after adding your favourite color in the begining...  "+colorNames); 
document.write("<hr>")
/* b. Ask the user what color he/she wants to add to the end
& add that color to the end of the array. Display the
updated array in your browser. */
var addElementInLast=prompt("Enter color you want to add in last");
colorNames.push(addElementInLast);
document.write("<br>");
document.write(" List after adding your favourite color in the Last...  "+ colorNames); 
document.write("<hr>")
/* c. Add two more color to the beginning of the array.
Display the updated array in your browser. */
colorNames.unshift("voilet","yellow")
document.write("<br> adding two more elements in the beginning ..." + colorNames);
document.write("<hr>")
/* d. Delete the first color in the array. Display the updated
array in your browser. */
colorNames.splice(0,1);
document.write("<br>Array after deleting First Element ...."+colorNames);
document.write("<hr>")
/* e. Delete the last color in the array. Display the updated
array in your browser. */
var arrlength=colorNames.length
colorNames.splice(arrlength-1,1);
document.write("<br>Array after deleting the Last Element ...."+colorNames);
document.write("<hr>")
/* f. Ask the user at which index he/she wants to add a color
& color name. Then add the color to desired
position/index. . Display the updated array in your
browser. */
var indexChoice=+prompt("Enter the index at which you want to add a color ....");
var colorChoice=prompt("Enter color name you want to add ...")
colorNames.splice(indexChoice,0,colorChoice);
document.write("<br>Array after adding  Element at index "+indexChoice+"...."+colorNames);
document.write("<hr>")
/* g. Ask the user at which index he/she wants to delete
color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined
position/index. . Display the updated array in your
browser. */
var indexChoice1=+prompt("Enter the index at which you want to delete a color ....");
var colorCount=+prompt("How many colors you want to delete...Enter number");
var colorChoice1=prompt("Enter color name you want to add ...")
colorNames.splice(indexChoice1,colorCount,colorChoice1);
document.write("<br>Array after removing and adding  Element in an array... "+colorNames);
document.write("<hr>")
/* 10. Write a program to store student scores in an array &
sort the array in ascending order using Array’s sort
method. */
var studentScore=[320,230480,120]
document.write("<br>Score of Students before sorting...."+studentScore);
studentScore.sort();
document.write("<br>Score of Students after sorting ...."+studentScore);
document.write("<hr>")


/* 11. Write a program to initialize an array with city names.
Copy 3 array elements from cities array to selectedCities
array. */
document.write("<h3 >Cities List : <br>");
var cityNames=["Karachi","lahore","Islamabad","Quetta","peshawar"]
document.write(cityNames);
var copyArray=cityNames.slice(1,3);
document.write("<h3>Selected Cities List : <br>");
document.write(copyArray);
document.write("<hr>")

/* 12. Write a program to create a single string from the
below mentioned array:
var arr = [“This ”, “ is ”, “ my ”, “ cat”];
(Use array’s join method) */

var myString=["This ","is" , " my " , " cat "]
document.write("<br><h2> Array : <br> " + myString);
var newString=myString.join("");
document.write("<br><h2>String  : <br> ");
document.write(newString)
document.write("<hr>")

/* 13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they
were stored. (FIFO-First In First Out) */
var devices=["keyboard","mouse","printer","monitor"];
document.write("<h2>devices-(FIFO-First In First Out) <br>");
document.write(devices);
document.write("<br>Out:<br>");
document.write(devices[0]);
document.write("<br>Out:<br>");
document.write(devices[1]);
document.write("<br>Out:<br>");
document.write(devices[2]);
document.write("<br>Out:<br>");
document.write(devices[3]);
document.write("<hr>");


/* 14. Create a new array. Store values one by one in such a way
that you can access the values in reverse order. (Last In-
First Out) */
document.write("Devices-(Last In-First Out) <br>")
var devices=["keyboard","mouse","printer","monitor"];
document.write("<h2>devices <br>");
document.write(devices);
document.write("<br>Out:<br>");
document.write(devices[3]);
document.write("<br>Out:<br>");
document.write(devices[2]);
document.write("<br>Out:<br>");
document.write(devices[1]);
document.write("<br>Out:<br>");
document.write(devices[0]);
document.write("<hr>");


/* 15. Write a program to store phone manufacturers (Apple,
Samsung, Motorola, Nokia, Sony & Haier) in an array.
Display the following dropdown/select menu in your
browser using document.write() method: */
var phoneManufacturers=["Apple",
"Samsung ", "Motorola", "Nokia", "Sony" , "Haier"]
document.write(" <select>  <option value=phoneManufacturers>Select car:</option>");
document.write("<option value="+phoneManufacturers[0]+">"+phoneManufacturers[0]+"</option>");
document.write("<option value="+phoneManufacturers[1]+">"+phoneManufacturers[1]+"</option>");
document.write("<option value="+phoneManufacturers[2]+">"+phoneManufacturers[2]+"</option>");
document.write("<option value="+phoneManufacturers[3]+">"+phoneManufacturers[3]+"</option>");
document.write("<option value="+phoneManufacturers[4]+">"+phoneManufacturers[4]+"</option>");
document.write("<option value="+phoneManufacturers[5]+">"+phoneManufacturers[5]+"</option>");
document.write("<hr>")
