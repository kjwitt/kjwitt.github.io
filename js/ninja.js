var currentMousePos = { x: -1, y: -1 };
var previousMousePos = { x: -2, y: -2 };

jQuery(function($) {
    $(document).mousemove(function(event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;
    });
});

// var myVar=setInterval(function () {stealCursor()}, 3000);

// function stealCursor() {
// 	elementMouseIsOver = document.elementFromPoint(currentMousePos.x,currentMousePos.y);
// 	if (currentMousePos.x==previousMousePos.x && currentMousePos.y==previousMousePos.y) {
// 		document.getElementById('nocursor').style.cursor = 'none';
// 	}
// 	console.log(currentMousePos.x,currentMousePos.y,elementMouseIsOver);
// 	previousMousePos.x=currentMousePos.x;
// 	previousMousePos.y=currentMousePos.y;
// }

function executeNinja(){	
  $("body").animate({ opacity: 0, backgroundColor: '#000' }, function() {
  window.location = "http://google.com"});	
}

  // cool AF
  // $("body").animate({ opacity: 0, backgroundColor: '#000' }, function() {
  // window.location = "http://google.com"