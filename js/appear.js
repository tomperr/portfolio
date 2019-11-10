document.addEventListener("DOMContentLoaded", function() {

	animate();

	window.addEventListener("scroll", function() {
		animate();
	})

});

function animate() {
	let elements = document.querySelectorAll(".animate");
	for (let e of elements) {
		if (isElementInViewport(e)) {

			e.classList.remove("fade-in-left");
			e.classList.remove("fade-in-right");
			e.classList.remove("fade-in-top");
			e.classList.remove("fade-in-bottom");

			e.classList.remove("slide-left");
			e.classList.remove("slide-right");
			e.classList.remove("slide-top");
			e.classList.remove("slide-bottom");

			e.classList.remove("expand");

			if (e.classList.contains("skillbar-bar")) {
				skillbar_appear(e);
			}
		}
	}
}

function skillbar_appear(e) {
	let percentage = e.dataset.percent;
	e.style.width = percentage;
}

function isElementInViewport (el) {
    let rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}
