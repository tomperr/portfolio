document.addEventListener('DOMContentLoaded', function() {

	let path = "audio/sonic.mp3";
	let audio_player = new Audio(path);

	let code = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
	let inputs = [];
	let done = false;

	document.addEventListener('keydown', function(e) {
		//console.log(e);
		inputs.push(e.key);
		if (arrayContainsAnotherArray(code, inputs)) {
			if (!done) {
				inputs = [];
				audio_player.play();
				showBlackHole();
				done = true;
			}
		}
	})

});

function arrayContainsAnotherArray(needle, haystack){
	for(var i = 0; i < needle.length; i++){
		if(haystack.indexOf(needle[i]) === -1)
			return false;
	}
	return true;
}

function showBlackHole() {
	let div = document.querySelector("#black-hole-container");
	div.classList.remove('hidden');

	let body = document.querySelector("body");
	body.style.overflow = "hidden"; 
}

function e(tag, text, parent, classs=null, id=null) {
	let o = document.createElement(tag)
	o.appendChild(document.createTextNode(text))
	o.id = id
	o.classList.add(classs)
	parent.appendChild(o)
	return o
}
