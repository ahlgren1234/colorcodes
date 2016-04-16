$(function() {
    //console.log("Hello World!");
    new Clipboard('.colorbox');

    $('.colorbox').click(function () {
		$('#myModal').modal('show');
		var d = $(this).attr('data-clipboard-text');
		$('#copiedcode').text(d);
		window.setTimeout(hide_modal, 1000);
	});

});

function hide_modal() {
	$('#myModal').modal('hide');
}