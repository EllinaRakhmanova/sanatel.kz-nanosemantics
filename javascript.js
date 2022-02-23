"use strict"
window.onload = function() {

	if (window.scrollY > 0) {
		document.querySelector('header').classList.add('active_header');
	}

	addEventListener('scroll', function(e) {
		if (window.scrollY > 0) {
			document.querySelector('header').classList.add('active_header');
		} else {
			document.querySelector('header').classList.remove('active_header');
		}
	});

}
