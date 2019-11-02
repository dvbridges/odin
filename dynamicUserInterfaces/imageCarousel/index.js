var slideContainer = document.getElementsByClassName("slide-container")[0];
var posMarker = document.getElementsByClassName("slide-control-container")[0]
	.children;

var marginSize = 200;
var picN = 0;
var previousPic = 0;
var imageScaleFactor = 1.3;

const setCarousel = (init = false) => {
	//
	// Set current marker
	posMarker[picN].classList.toggle("markerStyle");
	// Set current image size
	slideContainer.children[
		picN
	].firstElementChild.firstElementChild.classList.toggle("imageScale");

	// Set margin size
	slideContainer.firstElementChild.style.marginLeft = `${marginSize *
		imageScaleFactor}%`;
	// Set margin transition
	slideContainer.firstElementChild.style.transition =
		"margin-left 1s ease-in-out";
	if (!init) {
		// Set previous marker
		posMarker[previousPic].classList.toggle("markerStyle");
		// Set previous image size
		slideContainer.children[
			previousPic
		].firstElementChild.firstElementChild.classList.toggle("imageScale");
	}
};

const timedPres = () => {
	previousPic = picN;
	picN += 1;
	marginSize -= 57.5;

	if (picN > 7) {
		picN = 0;
		marginSize = 200;
	}
	setCarousel();
	setTimeout(timedPres, 5000);
};

document.getElementById("content").addEventListener("click", () => {
	if (event.target && event.target.matches("button.right-btn")) {
		if (picN === 7) {
			return;
		}
		marginSize -= 57.5;
		previousPic = picN;
		picN += 1;
		change = true;
	}

	if (event.target && event.target.matches("button.left-btn")) {
		if (picN === 0) {
			return;
		}
		marginSize += 57.5;
		previousPic = picN;
		picN -= 1;
		change = true;
	}

	if (event.target && event.target.matches("span.dot")) {
		let clickedMarker = [...posMarker].indexOf(event.target);
		marginSize = 200 - 57.5 * clickedMarker;
		previousPic = picN;
		picN = clickedMarker;
		change = true;
	}

	if (change) {
		setCarousel();
	}
	change = false;
});

setCarousel(true);
// Initial positioning etc
setTimeout(timedPres, 5000);
