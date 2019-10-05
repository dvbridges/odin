function loadMenu() {
	let doc = document.getElementsByClassName("content-body")[0];
	doc.innerHTML = "";
	var img = document.createElement("img");
	img.src = "../assets/666.jpg";
	
	doc.appendChild(img);
}


export {loadMenu}
