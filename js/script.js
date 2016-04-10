$(function() {
    //console.log("Hello World!");
});

$('.colorbox').click(function() {
	
	var code = $(this).attr('data-code');
	console.log(code);
	code.execCommand("Copy");
});
