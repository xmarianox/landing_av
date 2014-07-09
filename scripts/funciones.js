/*
*   Funciones
*/
$(document).ready(function () {
	
	$('#btn_modif').click(function() {
		$(this).toggleClass('active');
		$('.comp_search').toggle('swin');
	});

    $( "#desde, #hasta" ).datepicker();

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 5000,
		values: [ 355, 4999 ],
		slide: function( event, ui ) {
			$('.min_val').html("AR$ " + ui.values[ 0 ]);
			$('.max_val').html("AR$ " + ui.values[ 1 ]);
		}
	});
    $('.min_val').html("AR$ " + $( "#slider-range" ).slider( "values", 0 ));
	$('.max_val').html("AR$ " + $( "#slider-range" ).slider( "values", 1 ));

});