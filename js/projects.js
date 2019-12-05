document.addEventListener("DOMContentLoaded", function() {

	setupProjectsSize();
	resetHeightDescription();
	setHeightDescription();

	window.addEventListener('resize', function() {
		setupProjectsSize();
		resetHeightDescription();
		setHeightDescription();
	})

	let projects = document.querySelectorAll('.project');
	for (let p of projects) {
		p.addEventListener('mouseenter', function() {

			refreshActive(this);

		});
	}

})

function resetHeightDescription() {
	let descriptions = document.querySelectorAll('.project_description');
	let container = document.querySelector('#projects-descriptions');
	for (let d of descriptions) {
		d.style.height = "auto";
	}
	container.style.height = "auto";
}

function setHeightDescription() {
	let max = maxHeightDescription();
	let descriptions = document.querySelectorAll('.project_description');
	let container = document.querySelector('#projects-descriptions');

	for (let d of descriptions) {
		d.style.height = max + "px";
	}

	container.style.height = max + "px";

}

function maxHeightDescription() {
	let descriptions = document.querySelectorAll('.project_description, #projects-buttons');
	let max = 0;
	let current;

	for (let d of descriptions) {
		current = d.offsetHeight;
		if (current > max) {
			max = current;
		}
	}

	return max;
}

function setupProjectsSize() {
	let projects = document.querySelectorAll('.project');
	for (let p of projects) {
		let width = p.offsetWidth;
		p.style.height = width + "px"
	}
}

function refreshActive(elt) {
	if (!elt.classList.contains('active')) {
		disableCurrentProject();
		setActive(elt)
	}
}

function disableCurrentProject() {
	let project = document.querySelector(".project.active");
	let description = document.querySelector(".project_description.active");
	let technos = document.querySelector(".project-technos.active");
	let buttons = document.querySelector(".project-buttons.active");

	project.classList.remove('active');
	// project.classList.add('fade-in');
	description.classList.remove('active');
	description.classList.add('fade-in');
	technos.classList.remove('active');
	technos.classList.add('fade-in');
	buttons.classList.remove('active');
	buttons.classList.add('fade-in');
}

function setActive(elt) {
	elt.classList.add('active');
	// elt.classList.remove('fade-in');
	let id = elt.dataset.p_id;

	let description = document.querySelector(".project_description[data-p_id='" + id + "']");
	description.classList.add('active');
	description.classList.remove('fade-in');

	let technos = document.querySelector(".project-technos[data-p_id='" + id + "']");
	technos.classList.add('active');
	technos.classList.remove('fade-in');

	let buttons = document.querySelector(".project-buttons[data-p_id='" + id + "']");
	buttons.classList.add('active');
	buttons.classList.remove('fade-in');
}
