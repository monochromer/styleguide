document.addEventListener('DOMContentLoaded', function() {

	var codes = document.querySelectorAll('code[class]');
	codes = Array.prototype.slice.apply(codes);

	codes.forEach(function(elem, idx, arr) {
		hljs.highlightBlock(elem);
	});

});