document.addEventListener("DOMContentLoaded", function() {

	window.addEventListener("scroll", function() {
		subtitles_appear();
	})

});

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