// not used because of c'est chiant pour le responsive

document.addEventListener("DOMContentLoaded", function() {

	// Getting DOM elements
	let parallax = document.querySelectorAll(".parallax");

	// set background size
	setAllBackgrounds();

	document.addEventListener("mousemove", function(e) {
		// adding parallax effects
		for (let p of parallax) {
			parallaxTranslate(p, p.dataset.res, e)
		}
	});

	// resize backgrounds when WINDOW is resized
	window.onresize = setAllBackgrounds;

});

function setAllBackgrounds() {
	// getting all backgrounds
	let bgs = document.querySelectorAll(".background");
	for (let b of bgs) {
		// resize every backgrounds
		setRatio(b);
		centerBackground(b);
	}
}

function centerBackground(b) {
	let b_width = b.offsetWidth;
	let b_height = b.offsetHeight;
	let w_width = window.innerWidth;
	let w_height = window.innerHeight;

	let offsetRight = (b_width - w_width) / 4;
	let offsetBottom = (b_height - w_height) / 4;

	b.style.bottom = offsetBottom + "px";
	b.style.right = offsetRight + "px";
}

function setRatio(img) {

	// getting elt_size / window_size ratio
	let ratio = getRatio(img);
	if (ratio.width > ratio.height) { // resize
		img.style.height = "120%";
		img.style.width = "auto";
	} else {
		img.style.width = "120%";
		img.style.height = "auto";
	}
}

function getRatio(img) {
	// ratio used to know which side (height of width) should be resized
	let ratio = {
		width: img.offsetWidth / window.innerWidth,
		height: img.offsetHeight / window.innerHeight
	}
	return ratio;
}

/*
function parallaxStatic(elt, resistance, mouse){

	let new_pos = getParallaxDecal(resistance, mouse);
	elt.style.left = (new_pos.x) + "px";
	elt.style.top = (new_pos.y) + "px";

};
*/

function parallaxTranslate(elt, resistance, mouse) {
	
	let new_pos = getParallaxDecal(resistance, mouse);
	// setting translation
	elt.style.transform = "translateX(" + (new_pos.x) + "px) translateY(" + (new_pos.y) + "px)";
}

function getParallaxDecal(resistance, mouse) {

	// getting x and y movement for parallax
	let new_pos = {
		x: -((mouse.clientX - window.innerWidth) / resistance) - (window.innerWidth / resistance),
		y: -((mouse.clientY - window.innerHeight) / resistance) -  (window.innerHeight / resistance)
	}
	return new_pos;
}