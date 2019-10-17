document.addEventListener("DOMContentLoaded", function() {

	// getting navigation elements
	let nav = document.querySelector("#navigation");
	let menu = document.querySelector("#navigation-menu");
	let trigger = document.querySelector("#nav-trigger");

	let shown = false;

	/*
	trigger.addEventListener("mouseover", function() {

		shown ? hideNav(nav, menu) : showNav(nav, menu);
		shown = !shown;

	})
	*/

	trigger.addEventListener("mouseenter", function() {
		showNav(nav, menu, trigger);
		shown = true;
		console.log("enter");
	})

	nav.addEventListener("mouseleave", function() {
		
		if (shown) {
			hideNav(nav, menu, trigger);
			shown = false;
		}
		
		console.log("left");
	})

	hideNav(nav, menu, trigger);

});

function hideNav(nav, menu, trigger) {
	let menu_height = menu.offsetHeight;
	nav.style.top = "-" + menu_height + "px";
	trigger.style.display = "block";
}

function showNav(nav, menu, trigger) {
	nav.style.top = "0px";
	trigger.style.display = "none";
}