<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	
	<!-- To remove all auto-formatting for telephone numbers -->
	<meta name="format-detection" content="telephone=no">

	<title>Avant Trip</title>

	<!-- <link rel="shortcut icon" href=""> -->
	<!-- CSS -->
	<link rel="stylesheet" href="css/style.min.css">

	<!-- JS -->
	<script src="scripts/modernizr.js"></script>
	<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=API_KEY"></script> -->
</head>
<body>
	<!--[if lt IE 7]>
	<p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p>
	<![endif]-->
	<div id="wrapper">
		
		<header>
			<div class="control">
				<h1><a href="http://www.avantrip.com/" title="Avantrip">Avantrip | Su agencia de viajes en Internet</a></h1>

				<div class="call">
					<p><span>0810-222-2826</span> Comprá también por teléfono</p>
					<p class="light">Lun a Vie de 8 a 20hs. Sáb y Dom de 9 a 15hs</p>	
				</div>
			</div>
		</header>

		<nav>
			<ul>
				<li><a href="#" title="Inicio"><i class="fa fa-home"></i>&nbsp; Inicio</a></li>
				<li><a href="#" title="Vuelos"><i class="fa fa-plane"></i>&nbsp; Vuelos</a></li>
				<li><a href="#" title="Hoteles" class="active"><i class="fa fa-bed"></i>&nbsp; Hoteles</a></li>
				<li><a href="#" title="Paquetes"><i class="fa fa-gift"></i>&nbsp; Paquetes</a></li>
				<li><a href="#" title="Autos"><i class="fa fa-car"></i>&nbsp; Autos</a></li>
			</ul>
		</nav>

		<div class="main">
			
			<div class="content_filtros">
				<div class="control">
					<p class="description_results">260 hoteles en <span>Madrid, España</span></p>
					<a href="javascript:;" class="btn btn-primary" id="btn_modif">Modificar búsqueda &nbsp;<i class="fa fa-calendar"></i></a>

					<div class="filtro">
						<a href="javascript:;" class="btn btn-default" id="btn_orden"><i class="fa fa-bars"></i>&nbsp; Orden</a>
						<a href="javascript:;" class="btn btn-default" id="btn_filtro"><i class="fa fa-sliders"></i>&nbsp; Filtros</a>
					</div>
				</div>
			</div><!-- content_filtro -->

			<div class="comp_search">
				<div class="control">
					<form action="" type="post">

						<input type="text" name="lugar" id="lugar" placeHolder="Madrid, España">

						<div class="date">
							<input type="text" name="desde" id="desde" placeHolder="22/08/14">
							<i class="fa fa-calendar"></i>
						</div>

						<div class="date">
							<input type="text" name="hasta" id="hasta" placeHolder="22/08/15">
							<i class="fa fa-calendar"></i>
						</div>

						<div class="combo">	
							<select name="huespedes" id="huespedes">
								<option value="">Personas: 2 / Habitaciones: 1</option>
								<option value="">Personas: 2 / Habitaciones: 1</option>
								<option value="">Personas: 2 / Habitaciones: 1</option>
								<option value="">Personas: 2 / Habitaciones: 1</option>
							</select>
						</div><!-- combo -->

						<button class="btn btn-primary" id="btn_aplicar_filtros">Aplicar</button>
					</form><!-- formulario de busqueda -->
				</div><!-- control -->
			</div><!-- comp_search -->

			<div class="comp_filtros">
				<div class="control">
					<div class="content_slider">
						<h2>Precio por persona, por noche</h2>

						<div id="slider-range"></div>						
						<div class="values">
							<p class="min_val"></p>
							<p class="max_val"></p>
						</div><!-- .values -->
					</div><!-- .content_slider -->
				</div><!-- .control -->

				<div class="control opciones">
					
					<div class="cols">
						<h2>Barrios <span>(254)</span></h2>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" checked="true"/>
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG2" class="css-checkbox" />
						<label for="checkboxG2" class="css-label radGroup1">Centro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG3" class="css-checkbox" />
						<label for="checkboxG3" class="css-label radGroup1">Lavpies</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG4" class="css-checkbox" />
						<label for="checkboxG4" class="css-label radGroup1">Retiro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG5" class="css-checkbox" />
						<label for="checkboxG5" class="css-label radGroup1">Plaza Mayor</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG6" class="css-checkbox" />
						<label for="checkboxG6" class="css-label radGroup1">La Latina</label>
					</div><!-- cols - barrios -->

					<div class="cols">
						<h2>Estrellas <span>(152)</span></h2>

						<input type="checkbox" name="checkboxS1" id="checkboxS1" class="css-checkbox" checked="true"/>
						<label for="checkboxS1" class="css-label radGroup1">Todas las estrellas</label>

						<input type="checkbox" name="checkboxS2" id="checkboxS2" class="css-checkbox" />
						<label for="checkboxS2" class="css-label radGroup1 fiveStar"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></label>

						<input type="checkbox" name="checkboxS3" id="checkboxS3" class="css-checkbox" />
						<label for="checkboxS3" class="css-label radGroup1 stars"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></label>

						<input type="checkbox" name="checkboxS4" id="checkboxS4" class="css-checkbox" />
						<label for="checkboxS4" class="css-label radGroup1 stars"><i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i></label>

						<input type="checkbox" name="checkboxS5" id="checkboxS5" class="css-checkbox" />
						<label for="checkboxS5" class="css-label radGroup1 stars"><i class="fa fa-star"></i> <i class="fa fa-star"></i></label>

						<input type="checkbox" name="checkboxS6" id="checkboxS6" class="css-checkbox" />
						<label for="checkboxS6" class="css-label radGroup1 stars"><i class="fa fa-star"></i></label>

						<input type="checkbox" name="checkboxS7" id="checkboxS7" class="css-checkbox" />
						<label for="checkboxS7" class="css-label radGroup1">Sin categoría</label>
					</div><!-- cols - estrellas -->

					<div class="cols">
						<h2>Rating TripAdvisor <span>(254)</span></h2>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" checked="true"/>
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG2" class="css-checkbox" />
						<label for="checkboxG2" class="css-label radGroup1">Centro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG3" class="css-checkbox" />
						<label for="checkboxG3" class="css-label radGroup1">Lavpies</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG4" class="css-checkbox" />
						<label for="checkboxG4" class="css-label radGroup1">Retiro</label>

						<h2>Hoteles en promo <span>(254)</span></h2>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" checked="true"/>
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG2" class="css-checkbox" />
						<label for="checkboxG2" class="css-label radGroup1">Centro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG3" class="css-checkbox" />
						<label for="checkboxG3" class="css-label radGroup1">Lavpies</label>

					</div><!-- cols - trip -->

					<div class="cols">
						<h2>Servicios <span>(254)</span></h2>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" checked="true"/>
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG2" class="css-checkbox" />
						<label for="checkboxG2" class="css-label radGroup1">Centro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG3" class="css-checkbox" />
						<label for="checkboxG3" class="css-label radGroup1">Lavpies</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG4" class="css-checkbox" />
						<label for="checkboxG4" class="css-label radGroup1">Retiro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<a href="javascript:;" class="ver_mas" title="Ver mas"><i class="fa fa-arrow-circle-down"></i> Ver mas</a>

					</div><!-- cols - trip -->

					<div class="cols">
						<h2>Clasificación <span>(152)</span></h2>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" checked="true"/>
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG2" class="css-checkbox" />
						<label for="checkboxG2" class="css-label radGroup1">Centro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG3" class="css-checkbox" />
						<label for="checkboxG3" class="css-label radGroup1">Lavpies</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG4" class="css-checkbox" />
						<label for="checkboxG4" class="css-label radGroup1">Retiro</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<input type="checkbox" name="checkboxG1" id="checkboxG1" class="css-checkbox" />
						<label for="checkboxG1" class="css-label radGroup1">Todos los barrios</label>

						<a href="javascript:;" class="ver_mas" title="Ver mas"><i class="fa fa-arrow-circle-down"></i> Ver mas</a>

					</div><!-- cols - trip -->

					<div class="message">
						<p>No encontramos hoteles que apliquen a los filtros elegidos. Por favor seleccioná una nueva combinación de filtros</p>
					</div><!-- mensaje de error -->

				</div><!-- .control.opciones -->

				<div class="control content_btn">
					<a class="btn btn-primary" id="btn_aplicar_filtro"><p>Aplicar</p> <!-- hay que mostrar este icono mientras se esta buscando <i class="fa fa-spinner fa-spin"></i> --></a>
				</div>

			</div><!-- .comp_filtros -->

			<div class="comp_orden">
				<div class="control">
					
				</div>
			</div>
			
			<div class="resultado">
				<div class="content_mapa">
					<div class="map-canvas">
						<img src="images/mapa.jpg" alt="">
					</div>
				</div><!-- .content_mapa -->

				<div class="lista_hoteles">
					<ul>
						<li class="item_hotel">
							<figure>
								<img src="images/img-item.png" alt="">
								<div class="stars">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<figcaption>
									<h2>The Deauville Beach Resort</h2>
									<p><i class="fa fa-map-marker"></i>&nbsp; Lavapies, Madrid, España</p>
								</figcaption>
							</figure>
							
							<div class="content_details">
								<div class="trip">
									<i class="fa fa-trip"></i>
									<i class="fa fa-calif"></i>
								</div>
								<div class="content_price">
									<span>AR$ <span class="price">510</span></span>
									<p>Por noche</p>
								</div>
							</div>
						</li><!-- item_hotel -->

						<li class="item_hotel">
							<figure>
								<img src="images/img-item.png" alt="">
								<div class="stars">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<figcaption>
									<h2>The Deauville Beach Resort</h2>
									<p><i class="fa fa-map-marker"></i>&nbsp; Lavapies, Madrid, España</p>
								</figcaption>
							</figure>
							<div class="content_details">
								<div class="trip">
									<i class="fa fa-trip"></i>
									<i class="fa fa-calif"></i>
								</div>
								<div class="content_price">
									<span>AR$ <span class="price">510</span></span>
									<p>Por noche</p>
								</div>
							</div>
						</li><!-- item_hotel -->

						<li class="item_hotel">
							<figure>
								<img src="images/img-item.png" alt="">
								<div class="stars">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<figcaption>
									<h2>The Deauville Beach Resort</h2>
									<p><i class="fa fa-map-marker"></i>&nbsp; Lavapies, Madrid, España</p>
								</figcaption>
							</figure>
							<div class="content_details">
								<div class="trip">
									<i class="fa fa-trip"></i>
									<i class="fa fa-calif"></i>
								</div>
								<div class="content_price">
									<span>AR$ <span class="price">510</span></span>
									<p>Por noche</p>
								</div>
							</div>
						</li><!-- item_hotel -->

						<li class="item_hotel">
							<figure>
								<img src="images/img-item.png" alt="">
								<div class="stars">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
								</div>
								<figcaption>
									<h2>The Deauville Beach Resort</h2>
									<p><i class="fa fa-map-marker"></i>&nbsp; Lavapies, Madrid, España</p>
								</figcaption>
							</figure>
							<div class="content_details">
								<div class="trip">
									<i class="fa fa-trip"></i>
									<i class="fa fa-calif"></i>
								</div>
								<div class="content_price">
									<span>AR$ <span class="price">510</span></span>
									<p>Por noche</p>
								</div>
							</div>
						</li><!-- item_hotel -->
					</ul>
				</div><!-- .lista_hoteles -->
			</div><!-- .resultado -->
		</div><!-- .main -->

	</div><!-- #wrapper -->
	<script type="text/javascript" src="scripts/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="scripts/jquery-ui.js"></script>
	<script type="text/javascript" src="scripts/jspatch.js"></script>
	<script type="text/javascript" src="scripts/funciones.js?v=<?=rand() ?>"></script>
	<!-- <script type="text/javascript">
      function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    </script> -->
	<!-- GA -->

</body>
</html>