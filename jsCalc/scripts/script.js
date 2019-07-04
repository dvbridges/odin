// get the calc container

var btnPanel = document.getElementsByClassName('number-panel')
var opPanel = document.getElementsByClassName('operation-panel')
var digiScreen = document.getElementsByClassName('digi-screen')


var multiply = function(arr) {
	return arr.reduce((a,b) => a * b, 1);
}

var divide = function(arr) {
	return arr.reduce((a,b) => a / b);
}

var add = function(arr) {
	return arr.reduce((a,b) => a + b);
}

var subtract = function(arr) {
	return arr.reduce((a,b) => a - b);
}

var getOperations = function () {
  var ops = ['*', '/', '+', '-']
	var funcs = [multiply, divide, add, subtract]
	return ops.reduce((o, k, i) => ({...o, [k]: funcs[i]}), {})
}


var computeVal = function () {
	// Get full expression as string
	let arr = digiScreen[0].firstElementChild.value;
	// Get full expression as array
	let fullExpr = arr.split(/(\d+)/).filter(i => i.length > 0  );
	// Get all operators as array	
	let ops = arr.split(/\d+/).filter(i => i.length > 0  );
	// Get operation functions as object
	let opFunctions = getOperations()
	
	// Loop through each operation found in expression
	for (let op of ops) {
		if (fullExpr.indexOf(op) > -1) {
			// Index operator
			index = fullExpr.indexOf(op);
			// Get digits before and after operator
			expr = [Number(fullExpr[index-1]), Number(fullExpr[index+1])]; 
			// Make calculation and replace calculated number and operator with outcome
			fullExpr.splice(index-1, index+2, opFunctions[op](expr));
		}	
	}

}


var addText = function (btn) {
	btn.addEventListener('mousedown', (evt) => {
		if (evt.target.value !== '=') {
			digiScreen[0].firstElementChild.value += evt.target.value;
		} else {
			computeVal()
		}
	})
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
			div.appendChild(addText(createButton(ops[n])));		
			n += 1;
		}
	opPanel[0].appendChild(div);
	}
}

createNumberBtns()
createOperationBtns()
