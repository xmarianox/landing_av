/*
*   Funciones Landing AV
*/
$(document).ready(function () {
	
	$('#btn_modif').click(function() {
		$(this).toggleClass('active');
		$('.comp_search').toggle('swin');
	});

	$('#btn_filtro').click(function() {
		$(this).toggleClass('active');
		$('.comp_filtros').toggle('swin');
	});

	$('#btn_orden').click(function() {
		$(this).toggleClass('active');
		$('.comp_orden').toggle('swin');
	});

	// Switch (fancy inputs)
	$('menu.radio input').fancyInput();
	$('menu.radio').on('change', 'input', changeForm).find('input:first').prop('checked',true).trigger('change');

	// Datepicket
    $('#desde, #hasta').datepicker();

    // Componente Slider
	$('#slider-range').slider({
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


	$( document ).on( "mouseenter", ".map_item", function() {
	  var latLng = new google.maps.LatLng($(this).data('item-lat'),$(this).data('item-long'));
	  map.setCenter(latLng);
	  map.setZoom(16);
	});
	
	var currentView='49-51';

	$(".content_arrow").draggable({
	    axis: "x",
	    start: function(event, ui) {
	        start = ui.position.left;
	    },
	    stop: function(event, ui) {
	        stop = ui.position.left;
	        alert('has moved ' + ((start < stop) ? 'rigth':'left'))
	    }
	});

	/*$('.arrow_resul').click(function() {
		
		if($(this).hasClass('right')) {
			
			console.log('right ' + currentView);
			
			if(currentView=='49-51') {
				$('.content_mapa').width('76%');
				$('#arrow-r').css('left','77%')
				$('#arrow-l').css('right','23%')
				$('.lista_hoteles').width('24%');
				currentView = '76-24';
				console.log(currentView);
				initialize();
				return true;
			}
			
			if(currentView=='76-24') {
				$('.content_mapa').width('100%');
				$('#arrow-r').css('left','100%')
				$('#arrow-l').css('right','0%')
				$('.lista_hoteles').width('0%');
				currentView = '100-0';
				initialize();
				console.log(currentView);
				return true;
			}

			if(currentView=='24-76') {
				$('.content_mapa').width('49%');
				$('#arrow-r').css('left','49%')
				$('#arrow-l').css('right','51%')
				$('.lista_hoteles').width('51%');			
				currentView = '49-51';
				initialize();
				console.log(currentView);
				return true;
			}

			if(currentView=='100-0') {
				$('.content_mapa').width('24%');
				$('#arrow-r').css('left','24%')
				$('#arrow-l').css('right','76%')
				$('.lista_hoteles').width('76%');			
				currentView = '24-76';
				initialize();
				console.log(currentView);
				return true;
			}
			
		} else {
			
			console.log('left ' + currentView);

			if(currentView=='49-51') {
				$('.content_mapa').width('24%');
				$('#arrow-r').css('left','25%')
				$('#arrow-l').css('right','75%')
				$('.lista_hoteles').width('76%');
				currentView = '24-76';
				initialize();
				console.log(currentView);
				return true;
			}
			
			if(currentView=='24-76') {
				$('.content_mapa').width('0%');
				$('#arrow-r').css('left','0%')
				$('#arrow-l').css('right','100%')
				$('.lista_hoteles').width('100%');
				currentView = '100-0';
				initialize();
				console.log(currentView);
				return true;
			}

			if(currentView=='76-24') {
				$('.content_mapa').width('49%');
				$('#arrow-r').css('left','49%')
				$('#arrow-l').css('right','51%')				
				$('.lista_hoteles').width('51%');
				currentView = '49-51';
				initialize();
				console.log(currentView);
				return true;
			}

			if(currentView=='100-0') {
				$('.content_mapa').width('76%');
				$('#arrow-r').css('left','76%')
				$('#arrow-l').css('right','24%')				
				$('.lista_hoteles').width('24%');
				currentView = '76-24';
				initialize();
				console.log(currentView);
				return true;
			}

			
		}

	});*/
	
});

/*
* Fancy Inputs
*/
function changeForm(e) {
	// radio buttons stuff
	var page = this.value,
		highlight = $(e.delegateTarget).find('> div'),
		label = $(this.parentNode),
		marginLeft = parseInt( label.css('margin-left') , 10 ),
		xPos;

	highlight.css({'left':label.position().left + marginLeft, 'width':label.width() });

	/*// page change stuff
	xPos = '-' + label.index() * 50;
	$('#content').css( 'transform', 'translateX(' + xPos + '%)' );

	setTimeout(function(){
		$('#content').find('.' + page  + ' :input')[0].focus();
	}, 100);*/
}

/*
*	Google Maps Api.
*/
var map;

function initialize() {
	var myLatlng = new google.maps.LatLng(26.10876,-80.10676);
	var mapOptions = {
		zoom : 8,
		center : myLatlng
	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var marker;
    var bounds = new google.maps.LatLngBounds();
    
    $.ajax({
        url: "markers.json",
        dataType: "text",
        success: function(data) {                        
            var json = $.parseJSON(data);
            $.each(json.data.abstractDTOs, function(i,item){
            	var itemImage = 'images/img-item.png';
            	
            	$.each(item.images, function(ii,img){
            		if(img.defaultimage) {
            			itemImage = img.url;
            		}
            	});

		        var position = new google.maps.LatLng(item.location.latitude, item.location.longitude);
		        marker = new google.maps.Marker({
		            position: position,
		            map: map,
		            title: item.name,
		            icon: 'images/marker.png'
		        });
		        
		        var itemCard = '<li class="col-6 map_item" data-item-id="'+item.id+'" data-item-lat="'+item.location.latitude+'" data-item-long="'+item.location.longitude+'">';
					itemCard += '<div class="item_hotel" id="map-item-'+item.id+'">';
					itemCard += '<figure>';
					itemCard += '<img width="290" height="238" src="'+itemImage+'" alt="'+item.name+'">';
					itemCard += '<div class="stars">';								
					
					for(s=0;s<Math.round(item.starsRating);s++) {
						itemCard += '<i class="fa fa-star"></i>';
					}								
					
					itemCard += '</div>';
					itemCard += '<figcaption>';
					itemCard += '<h2>'+item.name+'</h2>';
					itemCard += '<p>';
					itemCard += '<i class="fa fa-map-marker"></i>&nbsp; '+item.location.city+', '+item.location.country;
					itemCard += '</p>';
					itemCard += '</figcaption>';
					itemCard += '</figure>';
					itemCard += '<div class="content_details">';
					itemCard += '<div class="trip">';
					itemCard += '<i class="fa fa-trip"></i>';
					itemCard += '<i class="fa fa-calif"></i>';
					itemCard += '</div>';
					itemCard += '<div class="content_price">';
					itemCard += '<span>AR$ <span class="price">510</span></span>';
					itemCard += '<p>';
					itemCard += 'Por noche';
					itemCard += '</p>';
					itemCard += '</div>';
					itemCard += '</div>';
					itemCard += '</div><!-- item_hotel -->';
					itemCard += '</li><!-- col-6 -->';
		        				
		        $('.listings-container').append(itemCard);
		        bounds.extend(position);
		        					        
		        google.maps.event.addListener(marker, 'click', (function(marker, i) {
		            return function() {
		            	
					var infoWindowContent = '<div class="map_baloon">';
						infoWindowContent += '<a href="javascript:;" class="btn_close_baloon">cerrar</a>';
						infoWindowContent += '<div class="item_hotel" id="map-item-174245">';
						infoWindowContent += '<figure>';
						infoWindowContent += '<img src="'+itemImage+'" alt="'+item.name+'">';
						infoWindowContent += '<div class="stars">';
						for(s=0;s<Math.round(item.starsRating);s++) {
						infoWindowContent += '<i class="fa fa-star"></i>';
						}
						infoWindowContent += '</div>';
						infoWindowContent += '<figcaption>';
						infoWindowContent += '<h2>'+item.name+'</h2>';
						infoWindowContent += '<p><i class="fa fa-map-marker"></i>&nbsp; '+item.location.city+', '+item.location.country+'</p>';
						infoWindowContent += '</figcaption>';
						infoWindowContent += '</figure>';
						infoWindowContent += '<div class="content_details">';
						infoWindowContent += '<div class="trip"><i class="fa fa-trip"></i><i class="fa fa-calif"></i></div>';
						infoWindowContent += '<div class="content_price">';
						infoWindowContent += '<span>AR$ <span class="price">510</span></span>';
						infoWindowContent += '<p>Por noche</p>';
						infoWindowContent += '</div>';
						infoWindowContent += '</div>';
						infoWindowContent += '</div>';
						infoWindowContent += '</div>';
		            						           					            	
		                infoWindow.setContent(infoWindowContent);
		                infoWindow.open(map, marker);
		            }
		        })(marker, item.id));

		        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
		            return function() {					            	
		            	$('#map-item-'+item.id).addClass('item_hotelhover');
		            }
		        })(marker, item.id));

		        google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
		            return function() {					            	
		            	$('#map-item-'+item.id).removeClass('item_hotelhover');
		            }
		        })(marker, item.id));
		
				});
				
			    //map.fitBounds(bounds);
		    //map.panToBounds(bounds);    
				
        }
    });
    							
}

google.maps.event.addDomListener(window, 'load', initialize);
