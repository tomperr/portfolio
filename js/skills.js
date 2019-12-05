// aborted because of c'est moche

document.addEventListener("DOMContentLoaded", function() {

	let skillbars = document.querySelectorAll(".skillbar");

	for (let s of skillbars) {
		s.addEventListener("click", function() {
			disableSkillsDesc();
			setActiveSkillbar(this);
		});
	}

});

function disableSkillsDesc() {
	let descs = document.querySelectorAll(".skillbar-desc.active");
	for (let d of descs) {
		d.classList.remove("active");
	}
}

function setActiveSkillbar(elt) {
	let desc = elt.querySelector(".skillbar-desc");
	desc.classList.add("active");
}