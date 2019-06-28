var divs = document.getElementsByClassName("container")
var colorType = () => {return 'black'};
const GRIDSIZE = 500;

// Add button event for setting cell color attribute
var button = document.getElementById("colorButton");
button.addEventListener('click', (event) => {
	if (event.target.textContent === 'Random') {
		button.textContent = 'Black';
		colorType = () => {return 'black'};
	} else {
		button.textContent = 'Random';
		colorType = randomColor;
	}
})

/**
 * Summary. Sets color of cell.
 *
 * @return {string} Random hex color
 */
var randomColor = function() {
	return "#"+((1<<24)*Math.random()|0).toString(16)
}

/**
 * Add event lister for reset button
 * Resets grid
 */
var reset = document.getElementById('resetButton')
reset.addEventListener('click', () => {
	var size = prompt("Enter grid size: ");
	size = size > 0 ? size : 16
	clearGrid();
	setGrid(size);
})

/**
 * Clears grid
 */
var clearGrid = function() {
  while (divs[0].firstChild) {
		divs[0].removeChild(divs[0].firstChild);
	}
}

/**
 * Summary. Creates single cell in grid
 *
 * @param {Object} The div row container
 * @param {Number} The size if the cell in pixels
 * @return {Object} The row with cells
 */
var setElements = function(row, size) 
{
	col = document.createElement("div");
	col.style.borderColor = 'rgba(0, 0, 0, 0.05)';
	col.style.height=`${size}px`;
	col.style.width=`${size}px`;
	col.style.borderStyle = "solid";
	col.style.borderWidth="1px";
	col = setElementColor(col)
	row.appendChild(col);
	return row;
}

/**
 * Summary. Sets the cell color on move event
 *
 * @param {Object} The div cell
 */
var setElementColor = function(cell) {
	cell.addEventListener('mousemove', (event) =>{
	  event.target.style.backgroundColor = colorType();
	})
	return cell;
}

/**
 * Summary. Sets grid
 *
 * @param {Number} The number of grid cells as sqrt
 */
var setGrid = function (size) {
	var cellSize = parseInt(GRIDSIZE / size); 
	for (let i = 0; i < size; i++) 
		{
			row = document.createElement("div");
			for (let j = 0; j < size; j++) 
				{
					row = setElements(row, cellSize)
				}
			divs[0].appendChild(row);
		}
	}

setGrid(16);

