document.addEventListener("DOMContentLoaded", function() {

	setupProjectsSize();
	window.addEventListener('resize', function() {
		setupProjectsSize();
	})

	let projects = document.querySelectorAll('.project');
	for (let p of projects) {
		p.addEventListener('mouseenter', function() {

			refreshActive(this);

		});
	}

})

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
	description.classList.remove('active');
	technos.classList.remove('active');
	buttons.classList.remove('active');
}

function setActive(elt) {
	elt.classList.add('active');
	let id = elt.dataset.p_id;

	let description = document.querySelector(".project_description[data-p_id='" + id + "']");
	description.classList.add('active');

	let technos = document.querySelector(".project-technos[data-p_id='" + id + "']");
	technos.classList.add('active');

	let buttons = document.querySelector(".project-buttons[data-p_id='" + id + "']");
	buttons.classList.add('active');
}
