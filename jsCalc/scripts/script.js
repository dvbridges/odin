// get the calc container

var btnPanel = document.getElementsByClassName('number-panel')
var opPanel = document.getElementsByClassName('operation-panel')
var digiScreen = document.getElementsByClassName('digi-screen')
var addText = function (btn) {
	btn.addEventListener('click', (evt) => {digiScreen[0].firstElementChild.value += evt.target.value})
	return btn
}


var createButton = function(n=0) {
  var btn = document.createElement("button");
	btn.style.width = "50px";
	btn.style.height = "60px";
	btn.style.marginLeft = "25px";
	btn.style.marginTop = "30px";
	btn.style.fontSize = "20px";
	btn.textContent = n;
	btn.value = n;
	return btn;
}

var createNumberBtns = function() {
	var n = 1;
	for (let row = 0; row < 3; row++) {
		div = document.createElement("div");
		for (let col = 0; col < 3; col++) {
			div.appendChild(addText(createButton(n)));		
			n += 1;
		}
	btnPanel[0].appendChild(div);
	}
}

var createOperationBtns = function() {
	var ops = ['+', '-', '/', '*', 'AC', '='];
  var n = 0;
	for (let row = 0; row < 3; row++) {
		div = document.createElement("div");
		for (let col = 0; col < 2; col++) {
			div.appendChild(createButton(ops[n]));		
			n += 1;
		}
	opPanel[0].appendChild(div);
	}
}

createNumberBtns()
createOperationBtns()
