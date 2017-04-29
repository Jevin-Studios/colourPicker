var R = 0;
var G = 0;
var B = 0;
var HexR = 00;
var HexG = 00;
var HexB = 00;
var CMYKR = 0;
var CMYKG = 0;
var CMYKB = 0;
var C = 0;
var M = 0;
var Y = 0;
var K = 0;


function changeColour() {
	if(redInput.value > Number(255)) {
		document.getElementById("redInput").value = 255;
	}
	if(redInput.value == "") {
		document.getElementById("redInput").value = 0;
	}
	if(greenInput.value > Number(255)) {
		document.getElementById("greenInput").value = 255;
	}
	if(greenInput.value == "") {
		document.getElementById("greenInput").value = 0;
	}
	if(blueInput.value > Number(255)) {
		document.getElementById("blueInput").value = 255;
	}
	if(blueInput.value == "") {
		document.getElementById("blueInput").value = 0;
	}
	var colourBoxDiv = document.getElementById("colourBox");
	colourBoxDiv.style.background = "rgb(" + redInput.value + "," + greenInput.value + "," + blueInput.value + ")";
	var brightness = ((redInput.value * 299) + (greenInput.value * 587) + (blueInput.value * 114)) / 1000;
	if (brightness < 130) {
		colourBoxDiv.style.color = "white";
	} else {
		colourBoxDiv.style.color = "black";
	}
	
	HexConversion();
	
	colourBox.innerHTML = "RGB(" + redInput.value + "," + greenInput.value + "," + blueInput.value + ")\n\nHEX(" + HexR.toUpperCase() + HexG.toUpperCase() + HexB.toUpperCase() + ")";
	
}

function moreInfo() {
	window.open("https://convertingcolors.com/rgb-color-" + redInput.value + "_" + greenInput.value + "_" + blueInput.value + ".html");
}
function HexConversion() {
   R = Number(redInput.value);
   G = Number(greenInput.value);
   B = Number(blueInput.value);
   if(((R.toString(16)).length) == 1) {
	   HexR = "0" + R.toString(16);
   } else {
	   HexR = R.toString(16);
   }
   if(((G.toString(16)).length) == 1) {
	   HexG = "0" + G.toString(16);
   } else {
	   HexG = G.toString(16);
   }
   if(((B.toString(16)).length) == 1) {
	   HexB = "0" + B.toString(16);
   } else {
	   HexB = B.toString(16);
   }
}




window.onload = changeColour;