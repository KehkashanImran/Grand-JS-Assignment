/* 1. Consider you have 4 images in a file as shown below:
Now When you click on an image it should display in a modal. */




//var image1 = document.getElementById("image1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the image, open the modal
function showModal(img_path) {
 // Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImg.src = img_path;
}


var closeBtn = document.getElementsByClassName('close')[0];
    closeBtn.onclick = function () {
      var modal = document.getElementById('myModal');
      modal.style.display = 'none';
    };

    /* 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
Events | JAVASCRIPT
On each click on “zoom in”(+) , add 10px in font size of paragraph.
And on each click on “zoom out”(-) , minus 10px in font size of paragraph. */

/* 2. Display some Mobile images in browser. On click on an
image Show the message in alert to user. */
var fontSize=20;
function zoomIn(){
    fontSize-=10;
    newFontSize();
}

function zoomOut(){
    fontSize+=10;
    newFontSize();
}


function newFontSize(){

document.getElementById("myPara").style.fontSize=fontSize+"px";

}