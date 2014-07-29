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

	$('#btn_share').click(function() {
		$('.content-share-search').toggle('fade');
	});

	$('#btn_cancelar_share').click(function() {
		$('.content-share-search').toggle('fade');
	});

	// Switch (fancy inputs)
///	$('menu.radio input').fancyInput();
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
	
	var currentView='50-50';
		
	$(".content_arrow").draggable({
	    axis: "x",
	    start: function(event, ui) {
	        start = ui.position.left;	      
			console.log('start drag');
	    },
	    drag: function(event, ui) {
	    	console.log('dragging');
	    	
			var m = ((start < ui.position.left) ? '+mapa':'+lista');				    	
    		var w = $( window ).width();
    		var pp = Math.round((ui.position.left*100)/w)+1;
    		
    		if(m == '+mapa') {
    			$('.content_mapa').width(pp+'%');
    			$('.lista_hoteles').width(100-pp+'%');
    		} else {
    			$('.lista_hoteles').width(100-pp+'%');
    			$('.content_mapa').width(pp+'%');
    		}
    			    	
	    },
	    stop: function(event, ui) {
	    	console.log('stop drag');
	    	
	    	
	        stop = ui.position.left;
	        
	        var w = $( window ).width();
	    	var mw = 100*($('.content_mapa').width()/w);
	    	var hw = 100*($('.lista_hoteles').width()/w);
	        var m = ((start < stop) ? '+mapa':'+lista');

			$('.listings-container').removeClass('short').removeClass('mid').removeClass('big');
        	
        	console.log("mapw:" + mw);
        	console.log("listw:" + hw);
        	        	
			if(m == '+mapa') {
				if(mw > 60 && mw <= 75) {
					$('.listings-container').addClass('short');
					$('.lista_hoteles').animate({width:'25%'});
					$('.content_mapa').animate({width:'75%'});
					$('.content_arrow').animate({left:'73%'});					
				}

				if(mw > 35 && mw <= 60) {
					$('.listings-container').addClass('mid');
					$('.lista_hoteles').animate({width:'50%'});
					$('.content_mapa').animate({width:'50%'});
					$('.content_arrow').animate({left:'49%'});
				}

				if(mw > 5 && mw <= 35) {
					$('.listings-container').addClass('big');
					$('.lista_hoteles').animate({width:'75%'});
					$('.content_mapa').animate({width:'25%'});
					$('.content_arrow').animate({left:'24%'});					
				}

			}

			if(m == '+lista') {
				if(mw > 60 && mw <= 75) {
					$('.listings-container').addClass('short');
					$('.lista_hoteles').animate({width:'25%'});
					$('.content_mapa').animate({width:'75%'});
					$('.content_arrow').animate({left:'73%'});
				}

				if(mw > 35 && mw <= 60) {
					$('.listings-container').addClass('mid');
					$('.lista_hoteles').animate({width:'50%'});
					$('.content_mapa').animate({width:'50%'});
					$('.content_arrow').animate({left:'48%'});
				}

				if(mw > 5 && mw <= 35) {
					$('.listings-container').addClass('big');
					$('.lista_hoteles').animate({width:'75%'});
					$('.content_mapa').animate({width:'25%'});
					$('.content_arrow').animate({left:'23%'});
				}

			}
						
	        initialize();
	        
	    }
	});

	$('.arrow').click(function() {

	   	var w = $( window ).width();	        
    	var mw = ($('.content_mapa').width()/w)*100;
    	var hw = ($('.lista_hoteles').width()/w)*100;

		$('.listings-container').removeClass('short').removeClass('mid').removeClass('big');
				        		
		if($(this).hasClass('right')) {
			var m = '+mapa';

			if(mw > 35 && mw <= 60) {
				mw = 75;
			}

			if(mw > 5 && mw <= 35) {
				mw = 50;
			}

		} else {			
			var m = '+lista';			

			if(mw > 35 && mw <= 60) {
				mw = 25;
			}

			if(mw > 60 && mw <= 75) {
				mw = 50;
			}

		}

		
			if(m == '+mapa') {
				if(mw > 60 && mw <= 75) {
					$('.listings-container').addClass('short');
					$('.lista_hoteles').animate({width:'25%'});
					$('.content_mapa').animate({width:'75%'});
					$('.content_arrow').animate({left:'73%'});					
				}

				if(mw > 35 && mw <= 60) {
					$('.listings-container').addClass('mid');
					$('.lista_hoteles').animate({width:'50%'});
					$('.content_mapa').animate({width:'50%'});
					$('.content_arrow').animate({left:'48%'});
				}

				if(mw > 5 && mw <= 35) {
					$('.listings-container').addClass('big');
					$('.lista_hoteles').animate({width:'75%'});
					$('.content_mapa').animate({width:'25%'});
					$('.content_arrow').animate({left:'24%'});					
				}

			}

			if(m == '+lista') {
				if(mw > 60 && mw <= 75) {
					$('.listings-container').addClass('short');
					$('.lista_hoteles').animate({width:'25%'});
					$('.content_mapa').animate({width:'75%'});
					$('.content_arrow').animate({left:'73%'});
				}

				if(mw > 35 && mw <= 60) {
					$('.listings-container').addClass('mid');
					$('.lista_hoteles').animate({width:'50%'});
					$('.content_mapa').animate({width:'50%'});
					$('.content_arrow').animate({left:'48%'});
				}

				if(mw > 5 && mw <= 35) {
					$('.listings-container').addClass('big');
					$('.lista_hoteles').animate({width:'75%'});
					$('.content_mapa').animate({width:'25%'});
					$('.content_arrow').animate({left:'23%'});
				}

			}
			
			initialize();

	});
	
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
}

/*
*	Google Maps Api.
*/
var map;

function initialize() {
	
	var myLatlng = new google.maps.LatLng(26.10876,-80.10676);
	var mapOptions = {
		zoom : 8,
		center : myLatlng,
		mapTypeControl: false
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
            	
            	itemImage = 'http://media.expedia.com/hotels/1000000/10000/7500/7498/7498_103_b.jpg';

				var itemPrice = 0;
            	$.each(item.priceInfo.rates, function(iii,p){
            		if(p.currencyCode == 'USD') {
            			itemPrice = p.averageBaseRate;
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
					itemCard += '<span>AR$ <span class="price">'+itemPrice+'</span></span>';
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
				
				
			$('#loading').hide();	
			$('.listings-container, .content-pager-result').show();
        }
    });
    							
}

google.maps.event.addDomListener(window, 'load', initialize);
