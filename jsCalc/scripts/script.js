var operate = function(op, expr) {
	if (op === '*') {
		ans = multiply(expr)
	}
	if (op === '/') {
		ans = divide(expr)
	}
	if (op === '+') {
		ans = add(expr)
	}
	if (op === '-') {
		ans = subtract(expr)
	}
	return ans;	
}

var multiply = function(arr) {
	return arr.reduce((a,b) => a * b, 1);
}

var divide = function(arr) {
	if (checkZeroDivision(arr)) {
		setWarning(true);
	}
	return arr.reduce((a,b) => a / b);
}

var add = function(arr) {
	return arr.reduce((a,b) => a + b);
}

var subtract = function(arr) {
	return arr.reduce((a,b) => a - b);
}

var roundSum = function (arr) {
	return (arr[0] % 1) > 0 ? Number(arr[0].toFixed(9)) : arr[0]
}

var equals = function(arr) {
  digiScreen[0].firstElementChild.value = roundSum(arr);
}

var checkZeroDivision = function (arr) {
	return arr.indexOf(0) > -1   
}

var setWarning = function(toggle) {
	let warn = document.getElementsByClassName('warning');
	let para = warn[0].querySelector('p');
	let msg = "Zero-division: Put the calculator down, and walk away!"
	toggle ? para.textContent = msg : para.textContent = '';
	setTimeout(setWarning, 3000, false); 
}

var sound = new Audio();
var playAudio = function (src) {
	sound.src = src;
	sound.play()
}

numSound = './resources/beep-23.wav';
eqSound = './resources/beep-24.wav';

var digiScreen = document.getElementsByClassName('digi-screen')
var btnPanel = document.getElementsByClassName('number-panel')
var opPanel = document.getElementsByClassName('operation-panel')
var funcs = [multiply, divide, add, subtract]
var ops = ['*', '/', '+', '-']

var computeVal = function () {
	// Get full expression as string
	let arr = digiScreen[0].firstElementChild.value;
	// Get full expression as array
	let fullExpr = arr.split(/(\d*\.?\d+)/).filter(i => i.length > 0  );
	
	// Loop through each operation found in expression
	for (let op of ops) {
		while (fullExpr.indexOf(op) > -1) {
			// Index operator
			let index = fullExpr.indexOf(op);
			// Get digits before and after operator
			let expr = [Number(fullExpr[index-1]), Number(fullExpr[index+1])]; 
			// Make calculation and replace calculated number and operator with outcome
			fullExpr.splice(index-1, 3, operate(op, expr));
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
		var pressed = evt.target.value; 
		// play sound for button
		['=', 'C'].indexOf(pressed) > -1 ? playAudio(eqSound) : playAudio(numSound)	
		if (pressed === '=') {
			computeVal()
		} else if (pressed === 'C') {
			digi.value = '';
		} else if (pressed === '<') {
			digi.value = digi.value.substr(0, exprLen-1);
		} else if (pressed === '.' && digi.value.indexOf('.') > -1) {
			return
		} else if (empty && opPressed) {
			return
		} else if (opPressed && ops.indexOf(digi.value[exprLen - 1]) > -1) {
			return
		} else {
			digi.value += pressed;
		}
	})
	return btn
}

var createButton = function(n=0) {
  var btn = document.createElement("button");
	btn.style.width = "50px";
	btn.style.height = ['=', 'C'].indexOf(n) > -1 ? "140px" : "60px";
	'+-*/=C'.indexOf(n) > -1 ? btn.style.backgroundColor = 'rgba(255,0,35,.4)': btn.style.backgroundColor = "#747474";
	btn.style.marginLeft = "25px";
	btn.style.marginTop = "20px";
	btn.style.fontSize = "20px";
	btn.style.fontFamily = "Orbitron, sans serif";
	btn.style.borderWidth = "2px";
	btn.style.borderColor = "#86C232"
	btn.style.color = "222629";
	btn.style.outline = "0";
	btn.textContent = n;
	btn.value = n;
	return btn;
}

var createNumberBtns = function() {
	var label = Array.from('123456789.0<');
	n = 0;
	for (let row = 0; row < 4; row++) {
		div = document.createElement("div");
		for (let col = 0; col < 3; col++) {
			div.appendChild(addText(createButton(label[n])));		
			n += 1;
		}
	btnPanel[0].appendChild(div);
	}
}

var createOperationBtns = function() {
	var ops = ['+', '-', '/', '*', '=', 'C'];
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
