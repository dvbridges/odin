var multiply = function(arr) {
	return arr.reduce((a,b) => a * b, 1);
}

var divide = function(arr) {
	if (checkZeroDivision(arr)) {
		setWarning()
		return
	}
	return arr.reduce((a,b) => a / b);
}

var add = function(arr) {
	return arr.reduce((a,b) => a + b);
}

var subtract = function(arr) {
	return arr.reduce((a,b) => a - b);
}

var equals = function(arr) {
 digiScreen[0].firstElementChild.value = [...arr];
}

var getOperations = function () {
  // Create object from two arrays
	return ops.reduce((o, k, i) => ({...o, [k]: funcs[i]}), {})
}

var checkZeroDivision = function (arr) {
	return arr.indexOf(0) > -1   
}

var setWarning = function() {
	alert(true);
}

var digiScreen = document.getElementsByClassName('digi-screen')
var btnPanel = document.getElementsByClassName('number-panel')
var opPanel = document.getElementsByClassName('operation-panel')
var funcs = [multiply, divide, add, subtract]
var ops = ['*', '/', '+', '-']

var computeVal = function () {
	// Get full expression as string
	let arr = digiScreen[0].firstElementChild.value;
	// Get full expression as array
	let fullExpr = arr.split(/(\d+)/).filter(i => i.length > 0  );
	// Get operation functions as object
	var opFunctions = getOperations()
  // Set order of operations
	
	// Loop through each operation found in expression
	for (let op of ops) {
		while (fullExpr.indexOf(op) > -1) {
			// Index operator
			let index = fullExpr.indexOf(op);
			// Get digits before and after operator
			let expr = [Number(fullExpr[index-1]), Number(fullExpr[index+1])]; 
			// Make calculation and replace calculated number and operator with outcome
			fullExpr.splice(index-1, 3, opFunctions[op](expr));
		}	
	}
	// Equals
	equals(fullExpr)
}

var addText = function (btn) {
	btn.addEventListener('mousedown', (evt) => {
		var digi = digiScreen[0].firstElementChild
		var exprLen = digi.value.length; 
		var empty = exprLen === 0; 
		var opPressed = ops.indexOf(evt.target.value) > -1;   
		if (evt.target.value === '=') {
			computeVal()
		} else if (evt.target.value === 'AC') {
			digiScreen[0].firstElementChild.value = '';
		} else if (empty && opPressed) {
			return
		} else if (opPressed && ops.indexOf(digi.value[exprLen - 1]) > -1) {
			return
		} else {
			digi.value += evt.target.value;
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
