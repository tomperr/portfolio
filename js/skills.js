document.addEventListener("DOMContentLoaded", function() {

	// console.log("test");
	let skillbars = document.querySelectorAll(".skillbar");
	for (let b of skillbars) {
		setBarWidth(b);
	}

});

function setBarWidth(elt) {
	let bar = elt.querySelector(".skillbar-bar");
	let percentage = elt.dataset.percent;
	bar.style.width = percentage;
}