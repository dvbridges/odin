/**
 * An example of using JavaScript 
 * to change html and css properties
 */

// Set container element for all operations
const container = document.createElement('div');

// Set paragraph
const para = document.createElement('p')
para.setAttribute('style', 'color: red');
para.textContent = 'Hey I’m red!';

// Set H3 header
const h3 = document.createElement('h3')
h3.setAttribute('style', 'color: blue');
h3.textContent = 'Hey I’m a blue h3!';

// Set div with h1 and paragraph as contents
const myDiv = document.createElement('div');
myDiv.setAttribute('style', 'border-style: solid; border-color: black; background-color: pink;');
const h1 = document.createElement('h1')
h1.setAttribute('style', 'color: rebeccapurple');
h1.textContent = 'Hey I’m in a div!';
const paraDiv = document.createElement('p')
paraDiv.setAttribute('style', 'color: fuchsia');
paraDiv.textContent = 'ME TOO!';
// apply contents to div
myDiv.appendChild(h1);
myDiv.appendChild(paraDiv);

// Add two buttons
const b1 = document.createElement('button');
b1.textContent = "Click me!";
b1.setAttribute('id', 'b1ID')
b1.setAttribute('style', 'margin: 10px; padding: 10px;');
const b2 = document.createElement('button');
b2.textContent = "No, click ME!";
b2.setAttribute('id', 'b2ID')
b2.setAttribute('style', 'margin: 10px; padding: 10px;');

// Set elements to container node 
container.appendChild(para);
container.appendChild(h3);
container.appendChild(myDiv);
container.appendChild(b1);
container.appendChild(b2);
document.body.parentNode.appendChild(container);

/** Using event listeners
 * There are two preferable methods listed below
 * They avoid using inline code, which clutters html with JS
 * One line functions should use the arrow functions
 */

var alertFunction = function(e) {
	/** Pass the event to the function
	 * Then you can access the target from the mouse event
	 * Now you have the target, you can manipulate it!
	 */
	e.target.textContent = 'CLIKD!';
	e.target.setAttribute('style', 'margin: 10px; padding: 10px; background-color: lightpink;');
	e.target.style.color = 'blue';
	alert("HOORAY! YOU CLICKED A BUTTON");
}

// Two methods of setting event listeners
const bt1 = document.querySelector('#b1ID');
bt1.onclick = alertFunction;
const bt2 = document.querySelector('#b2ID');
bt2.addEventListener('click', alertFunction);

