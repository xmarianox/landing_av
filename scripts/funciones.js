/*
*   Funciones
*/
$(document).ready(function () {
	
	$('#btn_modif').click(function() {
		$(this).toggleClass('active');
		$('.comp_search').toggle('swin');
	});

    $( "#desde, #hasta" ).datepicker();


});