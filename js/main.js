$(document).on('ready', inicializar); //cuando el documento esta listo, se ejecuta la funcion inicializar()

//la función 'inicializar' se ejecuta cuando el DOM (Document Object Model) este completamente cargado. 
//(es decir, cuando se ejecute el evento 'ready' del objeto global de javascript 'document').

function inicializar() {

	/* Ejemplo fadeIn */

	$("button#fadein").on('click', function(){ //cuando se haga click en el elemento button con id "fadein" se ejecutara el siguiente callback

		$("#curly").fadeIn(1000);
		$("#larry").fadeIn(2000); // la segunda imagen se ejecuta con de forma lenta (2000 milisegundos)
		$("#moe").fadeIn(3000);   // la tercer imagen se ejecuta con un retraso de 3000 milisegundos (i.e 3 segundos)
	});

	/* Ejemplo fadeOut */

	$("button#fadeout").on('click', function(){  // el efecto es el mismo de fadein, solo que en vez de mostar, oculta los elementos

		$("#curly2").fadeOut(1000);
		$("#larry2").fadeOut(2000); 
		$("#moe2").fadeOut(3000);

	});

	/* Ejemplo slideUp */

	$("button#slideup").on('click', function(){ 

		$("#curly3").slideUp(1000);
		$("#larry3").slideUp(2000); 
		$("#moe3").slideUp(3000);
	});

	/* Ejemplo slideDown */

	$("button#slidedown").on('click', function(){ 

		$("#curly4").slideDown(1000);
		$("#larry4").slideDown(2000); 
		$("#moe4").slideDown(3000);
	});

	/*	Ocultar boton volver al principio cuando el scroll sea menor a 200px */

	$(window).on('scroll', function() {  //callback que se 'cuelga' del evento scroll del objeto global window

		if($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn(1000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
	});

	/* Muestro los paneles a medida que se scrollea  */
	$(window).on('scroll', function() {

		$('.hideme').each(function(i) {
			var bottomObject = $(this).position().top + $(this).outerHeight();
			var bottomWindow = $(window).scrollTop() + $(window).height();

			if(bottomWindow > bottomObject - 5) {
				$(this).animate({'opacity': 1}, 800);
			}
		});
	});

	/* animacion boton volver */

	$('.scrollToTop').on('click', function(e) { //evento que se dispara cuando se haga click, haciendo un sroll animado hasta el comienzo de la pagina 
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 900);
		
	});
								
} // Fin function inicializar()