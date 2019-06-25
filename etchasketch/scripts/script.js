var divs = document.getElementsByClassName("container")


var setGrid = function(row) 
{
	col = document.createElement("div");
	col.style.borderColor = 'black';
	col.style.height="30px";
	col.style.width="30px";
	col.style.borderStyle = "solid";
	col.style.borderWidth="1px";
	col = setEvent(col)
	row.appendChild(col);
	return row;
}

var setEvent = function(cell) {
	cell.addEventListener('mousemove', (event) =>{
	  event.target.style.backgroundColor = 'black';
	})
	return cell;
}


for (let i = 0; i < 16; i++) 
	{
		row = document.createElement("div");
		for (let i = 0; i < 16; i++) 
			{
        row = setGrid(row)
			}
		divs[0].appendChild(row);
	}



