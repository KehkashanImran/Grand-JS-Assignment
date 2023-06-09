/* Write a program that displays current date and time in
your browser. */

var currentDate=new Date();
document.write("<h3>Current date is  : " + currentDate)
document.write("<br><hr>")


/* Write a program that alerts the current month in words.
For example December.
3. */
var currentDate1=new Date();
var monthNames=["January","February"," March",  "April ", " May"," June",  " July ", " August"," September",  " October ", " Novermber","December"]

var monthNumber=currentDate1.getMonth();
document.write("<br><h3> Current month name is  : " + monthNames[monthNumber])
document.write("<br><hr>")

/* 3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show
Sun. */
var todayDate=new Date();
var dayAbbrevation=todayDate.getDay();
document.write("<br>")


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 var nameOfToday = dayNames[dayAbbrevation];

 document.write("<br><h3> Today is  : "+ nameOfToday)

 document.write("<br><hr>")

 /* Write a program that displays a message “It’s Fun day” if
its Saturday or Sunday today. */
var todayDate=new Date();
var dayAbbrevation=todayDate.getDay();
document.write("<br>")

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

 var nameOfToday = dayNames[dayAbbrevation];
if(nameOfToday==="sat" || nameOfToday==="sun"){
 document.write("<br><h3> Its Funday today ")
}
else{
    document.write("<br><h3> Its working day today ")
}
 document.write("<br><hr>")
 /* 5. Write a program that shows the message “First fifteen
days of the month” if the date is less than 16th of the month
else shows “Last days of the month”.
6. */
var today_Date=new Date();
var date1=today_Date.getDate();
document.write("<br>Today date is : " +date1 )
if(date1<=16){
    document.write("First fifteen days of the month ....")
}
else
document.write("  - Last days of the month...");
document.write("<br><hr>")

/* 6. Write a program that determines the minutes since
midnight, Jan. 1, 1970 and assigns it to a variable that
hasn't been declared beforehand. Use any variable you like
to represent the Date object. */
var currentDate = new Date();
document.write("Current Date  is  :" + currentDate);
var past_minutes = Math.floor((currentDate - new Date(1970, 0, 1)) / (1000 * 60));

document.write("<br>Elapsed minutes since January 1 , 1970  is :  " + past_minutes);

var past_milliseconds = currentDate.getTime();
document.write(" <br> Elapsed miliseconds since January 1 , 1970  is :  " + past_minutes);
document.write("<br><hr>")
/* 7. Write a program that tests whether it's before noon and
alert “Its AM” else “its PM”. */

var currentDate = new Date();
var currentHours = currentDate.getHours();

// Check if it's before noon
if (currentHours < 12) {
  alert("It's AM");
} else {
  alert("It's PM");
}

/* 8. Write a program that creates a Date object for the last day
of the last month of 2020 and assigns it to variable named
laterDate. */

// Create a new Date object for the first day of the next month
var date = new Date(2021, 0, 1);

// Subtract one day from the date to get the last day of the last month of 2020
date.setDate(date.getDate() - 1);
var laterDate = date;
document.write(laterDate);
document.write("<br><hr>")


/* 9 Create a date object of the starting date of this Ramadan
and alert the number of days past since 1st Ramadan?
Note: 1st Ramadan was on June 18, 2015 */

// Create a new Date object for the starting date of Ramadan (June 18, 2015)
var startingDate = new Date(2015, 5, 18);

// Get the current date
var currentDate = new Date();

// Calculate the time difference in milliseconds
var timeDiff = currentDate.getTime() - startingDate.getTime();

// Convert the time difference to days
var daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
document.write("Number of days passed since 1st Ramadan: " + daysPassed);


/* 10- Create a Date object for the current date and time.
Extract the hours, reset the date object an hour ahead and
finally display the date object in your browser.*/


var currentDate12 = new Date();
var currentDate13 = new Date();

var currentHours = currentDate12.getHours();

currentDate12.setHours(currentHours + 1);

document.write("<h2><br><hr>Current Date : "+currentDate13 +"<br>One hour ago it will be "  + currentDate12);

/* 12-Write a program that creates a date object and show the
date in an alert box that is reset to 100 years back? */

var todayDate1 = new Date();
var todayDate2= new Date();

// Reset the date object 100 years back
todayDate1.setFullYear(todayDate1.getFullYear() - 100);

alert("Current Date :"+ todayDate2 +"100 years back it was "+  todayDate1);


/* 13 Write a program to ask the user about his age. Calculate
and show his birth year in your browser. */
var birthYear=+prompt("Enter your birth year....")
var currentDate=new Date();
var currentYear=currentDate.getFullYear();
var age=currentYear-birthYear;
alert("Your age is " + age +"  Your Birth year is " + birthYear)
document.write("<br><hr>")
/* Write a program to generate your K-Electric bill in your
browser. All the amounts should be rounded off to 2
decimal places. Display the following fields:
a. Customer Name
b. Current Month
DATE METHODS | JAVASCRIPT
Page 5 of 5
c. Number of units
d. Charges per unit
e. Net Amount Payable (within Due Date)
f. Late Payment Surcharge
g. Gross Amount Payable (after Due Date)
Where,
Net Amount Payable (within Due Date) = Number of units * Charges per unit
& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge */

var customerName = "Moiz ul Hassan";
var currentMonth = "May";
var numberOfUnits = 350;
var chargesPerUnit = 24.5;
var latePaymentSurcharge = 500;
//Calculate amounts
var netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
var grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2);

// Display bill details
document.write("<h2>K-Electric Bill</h2>");
document.write("<p><b>Customer Name:</b> " + customerName + "</p>");
document.write("<p><b>Current Month:</b> " + currentMonth + "</p>");
document.write("<p><b>Number of Units:</b> " + numberOfUnits + "</p>");
document.write("<p><b>Charges per Unit:</b> Rs " + chargesPerUnit.toFixed(2) + "</p>");
document.write("<p><b>Net Amount Payable (within Due Date):</strong> Rs " + netAmountPayable + "</p>");
document.write("<p><b>Late Payment Surcharge:</b> Rs " + latePaymentSurcharge.toFixed(2) + "</p>");
document.write("<p><b>Gross Amount Payable (after Due Date):</b> Rs " + grossAmountPayable + "</p>");


