//i. Get element of id “main-content” and assign them in a variable.

var mainContent=document.getElementsByClassName( "main-content");

/* ii. Display all child elements of “main-content” element. */
var demoId = document.getElementById('main-content');
console.log(demoId);
 
/* iii. Get all elements of class “render” and show their innerHTML
in browser. */
 document.write("<br><hr>")
var renderClass=document.getElementsByClassName("render")
for(var i =0;i<renderClass.length;i++){
document.write(renderClass[i].innerHTML+"<br>")
}

/* iv. Fill input value whose element id first-name using javascript. */

document.getElementById("first-name").value="kehkashan"

/* v. Repeat part iv for id ”last-name” and “email”. */
document.getElementById("last-name").value="Imran"
document.getElementById("email").value="kehkashan@gmail.com"

/* 2. use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email” --> */

/* i. What is node type of element having id “form-content”. */

var nType =document.getElementById("form-content").nodeType;
document.write("<br><hr><h2>The node type of form content is :" + nType)

/* ii. Show node type of element having id “lastName” and its child node. */
 
var lastNameType =document.getElementById("lastName").nodeType;
document.write("<hr><br>The node type of last name is " + lastNameType)
var childNode=document.getElementById("lastName").childNodes[0].nodeType;
document.write("<br>The node type of child node of  last name is " + childNode)

/* iii. Update child node of element having id “lastName”. */
var bankName=document.getElementById("lastName").firstChild.nodeValue;
document.write("<br>The old value of child node of lastName is : " + bankName);
document.write("<br>The updated value is : ")
document.write(document.getElementById("lastName").firstChild.nodeValue="Bank Al Habib");



/* iv. Get First and last child of id “main-content”. */
var firstChild=document.getElementById("main-content").firstElementChild.tagName;;
var lastChild=document.getElementById("main-content").lastElementChild.tagName;;
document.write("<hr><br>First child of Form Content is : "+ firstChild);
document.write("<br>last child of Form Content is : "+ lastChild);
document.write("<br><hr>");
/* Get next and previous siblings of id “lastName”. */

var nextSibling=document.getElementById("lastName").nextElementSibling.tagName;
document.write("The next sibling of last Name is :"+ nextSibling)

var previousSibling=document.getElementById("lastName").previousElementSibling.tagName;
document.write("<br>The previous sibling of last Name is :"+ previousSibling)

document.write("<br><hr>")

/* Get parent node and node type of element having id “email” */
var parentNode=document.getElementById("email").parentNode.tagName;
var parentNodeType=document.getElementById("email").parentNode.nodeType;
document.write("<br>The parent node of Email is : "+ parentNode)
document.write("<br>The node type of Div is  : "+ parentNodeType)