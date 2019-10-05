import {loadHome} from "./homeTab.js";
import {loadContact} from "./contactTab.js";
import {loadMenu} from "./menuTab.js";

function setNavBar() {
	var doc = document.getElementById("content");
	var div = document.createElement("div")
	div.className = "button-container";

	let homeBtn = document.createElement("button");
	let contactBtn = document.createElement("button");
	let menuBtn = document.createElement("button");
	
	homeBtn.innerHTML = "Home";
	contactBtn.innerHTML = "Contact";
	menuBtn.innerHTML = "Menu";
	

	homeBtn.addEventListener("click", (event) => {
		openPage(event, "home");
	})

	contactBtn.addEventListener("click", (event) => {
		openPage(event, "contact");
	})

	menuBtn.addEventListener("click", (event) => {
		openPage(event, "menu");
	})

	div.appendChild(homeBtn);
	div.appendChild(contactBtn);
	div.appendChild(menuBtn);
	doc.appendChild(div);

}

function openPage(evt, page) {
	if (page === "home")
	{
	  loadHome();
	} 
	else if (page === "contact") 
	{
		loadContact();
	} 
	else if (page === "menu") 
	{
		loadMenu();
	}
}

export {setNavBar, openPage}
