/* Create a signup form and display form data in your web
page on submission. */
function getResult(){
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
document.write("Your Email is : "+email+"<br>")
document.write("Your password is : "+password)

}

/* 2. Suppose in your webpage there is content area in which
you have entered your item details, but user can only see
some details on first look. When user clicks on “Read
more” button, full detail of that particular item will be
displayed. */
function productDetail() {
    var expandedParagraph ="Infinix Note 12 price in Pakistan is around 32,999 PKR for a basic  version with 128GB Storage and 4GB RAM. The high-end version has 128GB of Internal Storage and 6GB of RAM; It costs around 39,999 PKR. The latest Infinix Note 12 has a massive 6.7 inches display screen with a 1080*2400 pixels resolution.";
    document.getElementById("detail").innerHTML = expandedParagraph;
 }

 /* 3. In previous assignment you have created a tabular data
using javascript. Let’s modify that. Create a form which
takes student’s details and show each student detail in
table. Each row of table must contain a delete button and
an edit button. On click on delete button entire row should
be deleted. On click on edit button, a hidden form will
appear with the values of that row. */

  
    document.getElementById("submit").onclick=function()
            {
               
      var table = document.getElementById("mytable");
      var row = table.insertRow(-1);
      var studentId = row.insertCell(0);
      var name = row.insertCell(1);
      var fname = row.insertCell(2);
      var myclass = row.insertCell(3);
      
     studentId.innerHTML = document.getElementById("studentId").value;
      name.innerHTML = document.getElementById("name").value;
      fname.innerHTML = document.getElementById("fname").value;
      myclass.innerHTML = document.getElementById("myclass").value;
      return false;

  }


       