/* 1. Write a custom function power ( a, b ), to calculate the value of
a raised to b. */

function power1(base, powerNum){
    var result=Math.pow(base,powerNum)
    return result;
}
var base=+prompt("Enter Base number...:")

var powerNum=+prompt("Enter Power..:")

document.write("<h2>Custom Function to calculate the power : <br>");
var result=power1(base,powerNum)
document.write("The Power of  "+ base +"and"+ powerNum + " is "+ result);

document.write("<br><hr>");
/* Any year is entered through the keyboard. Write a function to
determine whether the year is a leap year or not. */

function isLeapYear(year) {
    if (year % 4 === 0) {
  return true;
    }else{
   return false;
    }
   }
    var year=+prompt("Enter any year to check whether it is a leap year or not ")
    var check =isLeapYear(year);
  if(check==="true"){
    document.write("The year " + year +" is  a Leap year" );
  }
  else{
    document.write("The year " + year +" is not a Leap year ")
  }
  document.write("<br><hr>");
  /* 3. If the lengths of the sides of a triangle are denoted by a, b, and
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions */

var a = 6;
var b = 6;
var c = 2;
function calculateS(a, b, c) {
  var s = (a + b + c) / 2;
  return s;
}
function calculateArea(s, a, b, c) {
  var area = s * (s - a) * (s - b) * (s - c);
  return area;
}
var s = calculateS(a, b, c);
var area = calculateArea(s, a, b, c);
document.write("<br><h3>The area of a triangle is .." + area);

document.write("<br><hr>");
/* 4. Write a function that receives marks received by a student in 3
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction
and other are for average and percentage. Call those functions
from mainFunction and display result in mainFunction. */


var english=+prompt("Enter English marks...")
var maths=+prompt("Enter maths marks...")
var science=+prompt("Enter science marks...")
mainFunction(english,maths,science);
function mainFunction(english,maths,science){

function calculateAverage(english,maths,science){
var avg=(english+maths+science)
//document.write("I am in calculateAverage function" +avg +"<br>")
return avg;
}

function calculatePercentage(english,maths,science){
    var totalMarks=english+maths+science;
    var percentage = (totalMarks/300)*100
    //document.write("I am in calculatePercentage function " + totalMarks + " & "+ percentage+" %"+"<br>" )
    return percentage;

}
var avg=calculateAverage(english,maths,science)
var percentage=calculatePercentage(english,maths,science)
document.write("<br><h3>The toral Average marks are:"+avg )
document.write("<br>The Percentage is :"+ percentage.toFixed(2) +"%")
}
document.write("<br><hr>");

/* 5. Write a function to delete all vowels from a sentence. Assume
that the sentence is not more than 25 characters long. */


function deleteVowels(sentence) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var result = '';

  for (var i = 0; i < sentence.length; i++) {
    var char = sentence[i].toLowerCase();

    if (!vowels.includes(char)) {
      result += sentence[i];
    }
  }

  return result;
}
var sentence = "A cat jumps over the walls and run away";

document.write("Sentence after removing vowels .."+ deleteVowels(sentence));

document.write("<br><hr>");

/* 6 -The distance between two cities (in km.) is input through the
keyboard. Write four functions to convert and print this
distance in meters, feet, inches and centimeters. */
function convertInMeters(distanceInKm){
  var distance=distanceInKm*1000;
  return distance;
  }
function convertInCentimeters(meters){
  var centiValue=meters*100;
  return centiValue;
}

function convertInInches(centiMeters){
  //(1 inch / 2.54 cm) = 0.393
      var inches=(centiMeters)*(0.393) 
      return inches;
  }
  
  function convertInFeet(inches){
      //1 ft = 12 inches = 0.0833
 
      var feetValue=inches*(0.0833)
      
     return feetValue;
 }
 var distanceInKm=+prompt("Enter Distance in kilometer...");
 var meters=convertInMeters(distanceInKm)
var centiMeters=convertInCentimeters(meters);
var inches= convertInInches(centiMeters)
var feet=convertInFeet(inches)


document.write("<h2>"+distanceInKm +" km in meter , feet , inches and centimeter is : <br>" );
document.write("<h3>The distance in meters is  "+ meters + " meters"+"<br>")
document.write("The distance in centi meter is  "+ centiMeters+"cm"+"<br>")
document.write("The distance in inches is  "+ inches +" inches" + "<br>")
document.write("The distance in feet is  "+ feet + "feet" + "<br><hr>")

/* 7 - Write a program to calculate overtime pay of employees.
Overtime is paid at the rate of Rs. 12.00 per hour for every hour
worked above 40 hours. Assume that employees do not work
for fractional part of an hour. */

var hour=+prompt("Enter your worked hours to calculate overtime pay..")

calculateOvertimePay(hour)
function calculateOvertimePay(hour){
if(hour>=40){
    var overTimeHour=hour-40;
    var overTimePay;
    overTimePay=overTimeHour*12;
    document.write("<h3Your over time hours are "+ overTimeHour + "and payment is : "+overTimePay +" Rs");
}
else{
document.write("Sorry overtime is being paid for every hour worked above 40 hours");
document.write("Inside else");
}
}

/* 8- A cashier has currency notes of denominations 10, 50 and
100. If the amount to be withdrawn is input through the
keyboard in hundreds, find the total number of currency notes
of each denomination the cashier will have to give to the
withdrawer. */

var userCurrency=+prompt("Enter withdraw amount ...");

function checkDenomination(userCurrency){

    var hundred = Math.floor(userCurrency / 100);
  var fifty = Math.floor((userCurrency % 100) / 50);
  var ten = Math.floor(((userCurrency % 100) % 50) / 10);
   document.write("<h2>You will have "+ hundred + " hundred notes "+ fifty +" fifty notes " + ten +" ten notes <br><hr>");
   
}
checkDenomination(userCurrency)