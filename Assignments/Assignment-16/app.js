/* Show an alert box on click on a link. */
function callAlert(){
    alert("hello Event")
  
    }

/* 2. Display some Mobile images in browser. On click on an
image Show the message in alert to user. */


function showAlert(){


    alert("Thanks for purchasing mobile from us ")
}


/* 3. Display 10 student records in table and each row should contain a delete
button. If you click on a button to delete a record, entire row should be
deleted. */
function deleteRow(row){
var i = row.parentNode.parentNode.rowIndex;
alert("Are you sure to delete this record")
document.getElementById("record").deleteRow(i);

}

/* 4. Display an image in browser. Change the picture on mouseover and set the
first picture on mouseout. */

function changePictureOnMouseOver(){
document.getElementById("flower1").src="flower2.jfif"


}
function changePictureOnMouseOut(){
    document.getElementById("flower1").src="flower1.jfif"
  

}

/* Show a counter in browser. Counter should increase on click on increase
button and decrease on click on decrease button. And show updated counter
value in browser. */
var number=0;
document.getElementById("counting").innerText = number;

function increaseCount(){

    document.getElementById("counting").innerText = number;
number=number+1
    
}
function decreaseCount(){
    number=number-1
    document.getElementById("counting").innerText = number;

    
}