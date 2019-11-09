document.addEventListener("DOMContentLoaded", function() {

	window.addEventListener("scroll", function() {
		subtitles_appear();
		skillbar_appear();
	})

});

function skillbar_appear() {
	let skillbars = document.querySelectorAll(".skillbar");
	for (let b of skillbars) {
		let bar = b.querySelector(".skillbar-bar");
		if (isElementInViewport(bar) && bar.classList.contains("hidden")) {
			let percentage = b.dataset.percent;
			bar.style.width = percentage;
			bar.classList.remove("hidden");
		}
	}
}

function subtitles_appear() {
	let subtitles = document.querySelectorAll('.subtitle');
	for (let s of subtitles) {
		if (isElementInViewport(s) && s.classList.contains("hidden")) {
			s.classList.remove('hidden');
		}
	}
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
