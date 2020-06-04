const seccionesPagina = new fullpage('#fullpage', {
	// ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
		autoScrolling: true, // Se activa el scroll.
		fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla. Se activa si el autoscrolling está desactivado
		fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
		easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
		scrollingSpeed: 600, // Velocidad del scroll. Valores: en milisegundos.
		css3: true, // Si usara CSS3 o javascript.
		easingcss3: 'ease-out', // Curva de velocidad del efecto.
		loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.
	// ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		navigation: true, // Muesta la barra de navegación.
		menu: '#menu', // Menu de navegación.
		anchors: [
			'inicio',
			'quienesSomos',
			'plataformaEstrategica',
			'acreditacion',
			'mapaGeografico',
			'umhes',
			'caps',
			'uss',
			'ruralidad',
			'programasEspeciales',
			'gestionRiesgo',
			'contacto'
		], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		navigationTooltips: [
			'Inicio', 
			'Quienes Somos', 
			'Plataforma Estratégica', 
			'Acreditación',
			'Mapa Geográfico',
			'UMHES',
			'CAPS',
			'USS',
			'Ruralidad',
			'Programas Especiales',
			'Gestión del Riesgo',
			'Contacto'
		], // Tooltips que mostrara por cada boton.
		showActiveTooltip: false, // Mostrar tooltip activa.
	// ──────────────────────────────────────────────────
	//   :::::: Secciones
	// ──────────────────────────────────────────────────
		sectionsColor : [
			'#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2',
			'#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2', '#F2F2F2'
		], // Color de fondo de cada seccion.
		verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
	// ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
		controlArrows: true, // Flechas del slide
		slidesNavigation: false, // Indicadores del slide
		afterLoad: function(origin, destination){
		}
});
