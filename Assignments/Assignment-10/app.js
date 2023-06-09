/* 1. Declare and initialize an empty multidimensional array.
(Array of arrays) */
let studentActivites = [];


/* 2-- Declare and initialize a multidimensional array
representing the following matrix: */

var studentRecord = [
    [0,1,2,3,],
    [1,0,1,2],
    [1,0,1,2],
];
document.write("<br><h2>")
document.write(studentRecord[0]);
document.write("<br>")
document.write(studentRecord[1]);
document.write("<br>")
document.write(studentRecord[2]);
document.write("<hr>")
/* 3. Write a program to print numeric counting from 1 to 10. */

for(var i=1;i<=10;i++){
    document.write("<br>");
    document.write(i);
}
document.write("<br><hr>")
/* 4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user. */

var table=+prompt("Enter a number to show its multiplication table..");
var lenthOfTable=+prompt("Enter length of table")
document.write("<br>");
for(var i=1;i<=lenthOfTable;i++){
document.write(table + " x " + i + " = "+ table*i )
document.write("<br>");
}
document.write("<br><hr>");
/* 5. Write a program to print items of the following array
using for loop:
fruits = [“apple”, “banana”, “mango”, “orange”,
“strawberry”] */

var fruits=["Apple","Banana","Mango","Orange"]
for(var j=0;j<fruits.length;j++){
    document.write(fruits[j]);
    document.write("<br>")
}
for(var k=0;k<fruits.length;k++){
    document.write("Elements at index " + k + " is ")
    document.write(fruits[k]);
    document.write("<br>")
}
document.write("<br><hr>");
/* 6. Generate the following series in your browser. See
example output.
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k */

//a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<br><h2>Counting : ");
for(var m=1;m<=15;m++){
document.write(m+" ") ;
}
//b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<br><h2> Reverse Counting  ");
for(var n=15;n>=0;n--){
    document.write(n+" ") ;
    }
    //c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

    var evenArray=[0,2,4,6,8,10,12,14,16,18,20]
    document.write("<br><h2> Even :  ");
    for(var b=0;b<=evenArray.length-1;b++){
document.write(evenArray[b] + " ");
    }
    //d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

    var oddArray=[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    document.write("<br><h2> Odd :  ");
    for(var c=0;c<=oddArray.length-1;c++){
document.write(oddArray[c] + " ");
    }
    //e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
    document.write("<br><h2> Series :  ");
    var series=["2k", "4k", "6k","8k", "10k", "12k ", "14k ", "16k", "18k", "20k"]
    for(var c=0;c<=series.length-1;c++){
        document.write(series[c] + " ");
            }
            document.write("<br><hr>");
            /* 7. You have an array
A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
Write a program to enable “search by user input” in an
array.
After searching, prompt the user whether the given item is
found in the list or not. Example: */
var backery=["cake","applepie","cookie","chips","patties","bread","eggs","rusk"]
var order=prompt("Welcome to BanoQabil Backery..What do you want to order Sir/Ma'am?")
var check="false";
for (var i=0;i<=backery.length-1;i++){
    if(backery[i].includes(order)){
    check="true";
    alert(order + " is available at index " + i + " in our backery ");
    }
} 
       if(check==="false"){ alert("We are sorry .." + order + " is not available in our backery") 
}
document.write("<br><hr>")
/* 8. Write a program to identify the largest number in the
given array.
*/

var arr = [24,153,78,91,12,96,120,10];
document.write("<h2>Array items are : " + arr)
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
document.write("<br><h2> The largest number is ..."+largest);
document.write("<br><hr>")
/* 9---Write a program to identify the smallest number in the
given array.
A = [24, 53, 78, 91, 12] */
var arr = [24,153,78,91,12,96,120,10];
document.write("<h2>Array items are : " + arr)
var smallest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (smallest > arr[i] ) {
        smallest = arr[i];
    }
}
document.write("<br><h2> The smallest number is ..."+ smallest);
document.write("<br><hr>")

/* 10. Write a program to print multiples of 5 ranging 1 to
100. */
document.write("Multiples of 5")
for(var i=1;i<=20;i++){
    document.write(i*5 + " , ");
}