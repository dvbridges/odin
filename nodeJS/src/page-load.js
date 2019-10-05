
function getPage () {
	let doc = document.getElementById("content")
	return doc
}

function setPage() {
	let doc = getPage();
	var div = document.createElement("div");
	div.className = "content-body"

	var img = document.createElement("img");
	img.src = "../assets/restaurant.jpeg";
	
	var title = document.createElement("h1");
	title.textContent = "Welcome to Hell's Restaurant";

	var summary = document.createElement("p");
	summary.textContent = "This is Hell's Restaurant, the hottest place in town. We have all a variety of fiery meals, prepared by the devilishly good chef";
	
	div.appendChild(img);
	div.appendChild(title);
	div.appendChild(summary);
	doc.appendChild(div);
}


export {setPage}
 


