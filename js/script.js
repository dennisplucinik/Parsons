$(function () {
	$('body').delegate('a.active', 'click', function (e) {
		e.preventDefault();
	});
});