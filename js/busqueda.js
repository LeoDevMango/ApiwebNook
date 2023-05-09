const form = document.querySelector('form');
const input = document.querySelector('#busqueda');
const resultadosDiv = document.querySelector('#resultados');

form.addEventListener('submit', (evento) => {
	evento.preventDefault();
  
	const busqueda = input.value.trim();
  
	if (busqueda.length === 0) {
		return;
	}
  
	resultadosDiv.innerHTML = '<p>Buscando resultados...</p>';
  
	// Aquí se realizaría la consulta a una API o base de datos
  
	// Ejemplo de resultado:
	const resultados = [
		{
			titulo: 'The Legend of Zelda: Breath of the Wild',
			descripcion: 'Un juego de aventuras y exploración en un mundo abierto.',
			consola: 'Nintendo Switch'
		},
		{
			titulo: 'Red Dead Redemption 2',
			descripcion: 'Un juego de acción en un mundo abierto con una historia épica.',
			consola: 'PlayStation 4, Xbox One'
		},
		{
			titulo: 'Minecraft',
			descripcion: 'Un juego de construcción y exploración en un mundo generado aleatoriamente.',
			consola: 'Múltiples plataformas'
		},
	];
  
	// Mostramos los resultados en HTML
	resultadosDiv.innerHTML = '';
  
	resultados.forEach((resultado) => {
		const titulo = document.createElement('h3');
		titulo.textContent = resultado.titulo;
		resultadosDiv.appendChild(titulo);
    
		const descripcion = document.createElement('p');
		descripcion.textContent = resultado.descripcion;
		resultadosDiv.appendChild(descripcion);
    
		const consola = document.createElement('p');
		consola.textContent = 'Consola: ' + resultado.consola;
		resultadosDiv.appendChild(consola);
	});
});
