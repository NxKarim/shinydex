const poke_container = document.getElementById('poke_container');
const pokemons_number = 1100;

const colores = {
  Fuego: '#ffaf80',
  Planta: '#a4ffb3',
  Eléctrico: '#fffb9a',
  Agua: '#9fc5e8',
  Tierra: '#e69138',
  Hada: '#ffd7f3',
  Veneno: '#ff93d3',
  Bicho: '#cbff81',
  Dragón: '#c793ff',
  Psíquico: '#ffabe3',
  Volador: '#c6e4ff',
  Lucha: '#f2a1a1',
  Normal: '#eeede5',
  Siniestro: '#b2b2b2',
  Fantasma: '#c385bd',
  Acero: '#bbcdc4',
  Hielo: '#a4fff4',
  Roca: '#dcaa77'
};

//const main_types = Object.keys(colors);

const fetchPokemons = async () => {
    await getPokemon();
};

const getPokemon = async () => {
	const url = `https://spreadsheets.google.com/feeds/list/1eHZ-UhSIsV45AXkrrZucAPnYpSy4QD05KzvHuSna0QE/od6/public/values?alt=json`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);

};

function createPokemonCard(pokemon) {
	for (let id = 0; id <= pokemons_number; id++) { //for from pokemon

		const pokemonEl = document.createElement('div');
		pokemonEl.classList.add('pokemon');

		//const poke_types = pokemon.types.map(type => type.type.name);
		//const type = main_types.find(type => poke_types.indexOf(type) > -1);
		//const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
		const type1 = pokemon.feed.entry[id].gsx$tipo1.$t;
		const type2 = pokemon.feed.entry[id].gsx$tipo2.$t;
		const name = pokemon.feed.entry[id].gsx$nombre.$t;
		const nombre = name.toLowerCase();
		const color = colores[type1];
		const status = pokemon.feed.entry[id].gsx$estado.$t;
		const numero = pokemon.feed.entry[id].gsx$nopokedex.$t;
		const catcher = pokemon.feed.entry[id].gsx$catchers.$t

		const catcher1 = catcher.split(' ')[0];
		const catcher2 = catcher.split(' ')[1];

		
		pokemonEl.style.backgroundColor = color;

		const libre = `
			<h3 class="cath" style="visibility: hidden;">libre</h3> 
			<div id=${numero}>   
	        </div>	
	        <div class="img-container">
	            <img src="https://projectpokemon.org/home/uploads/monthly_2017_07/missingno.png.4bc4f1920385390a41f267dd8f15b2ed.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	 	const capturado = `
	 		<h3 class="cath">${catcher}</h3> 
	 		<div id=${numero}>   
	        </div>	    
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;
	    const alolan = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' alola')[0]}-alolan.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="nameform">${name.split(' ')[0]}</h3>
	            <h4 class="form">${name.split(' ')[1]}</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;
     
     	const galarian = `
     		<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' galar')[0]}-galarian.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="region">${name.split(' ')[1]}</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const unown = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+nombre.split(' ')[1]}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const unownqm = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/unown-qm.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const unownem = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/unown-em.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const macho = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">${name.split(' ')[1]}</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

		const hembra = `
			<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'f'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Hembra</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

		const nidoran = `
			<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'m'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Macho</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const meowstic = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'female'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Hembra</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const mime = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/mr-mime.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const mimegalarian = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/mr-mime-galarian.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Mr.Mime</h3>
	            <h4 class="form">Galar</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

		const rime = `
			<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/mr-rime.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

		const mimejr = `
			<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/mime-jr.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const darmanitan = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/darmanitan-galarian-standard.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Darmanitan</h3>
	            <h4 class="form">Galar</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const farfetchd = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split("'")[0]+nombre.split("'")[1]}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const farfetchdgalarian = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/farfetchd-galarian.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Farfetch'd</h3>
	            <h4 class="form">Galar</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const wormadam_plant = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/wormadam-plant.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Wormadam</h3>
	            <h4 class="form">Planta</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const wormadam_trash = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/wormadam-trash.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Wormadam</h3>
	            <h4 class="form">Basura</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const wormadam_sand = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/wormadam-sandy.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Wormadam</h3>
	            <h4 class="form">Arena</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const shellos_east = `
	   	 	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/shellos-east.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Shellos</h3>
	            <h4 class="form">Este</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const shellos_west = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/shellos-west.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Shellos</h3>
	            <h4 class="form">Oeste</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const gastrodon_east = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/gastrodon-east.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Gastrodon</h3>
	            <h4 class="form">Este</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const gastrodon_west = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/gastrodon-west.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Gastrodon</h3>
	            <h4 class="form">Oeste</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const basculin_roja = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/basculin-red-striped.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Basculin</h3>
	            <h4 class="form">Raya Roja</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const basculin_azul = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/basculin-blue-striped.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Basculin</h3>
	            <h4 class="form">Raya Azul</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const winter = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'winter'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Invierno</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const summer = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'summer'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Verano</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const autumn = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'autumn'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Otoño</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const spring = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'spring'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Primavera</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const flabebe_rojo = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'red'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Rojo</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const flabebe_azul = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'blue'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Azul</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;
	    const flabebe_naranja = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'orange'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Naranja</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;
	    const flabebe_blanco = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'white'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Blanco</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;
	    const flabebe_yellow = `
	    <h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'yellow'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Amarillo</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const floette_eternal = `
	    <h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/ultra-sun-ultra-moon/shiny/floette-eternal.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Flor Eterna</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const pump_mini = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'small'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Mini</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const pump_mediano = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'average'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Mediano</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const pump_grande = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'large'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Grande</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const pump_gigante = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'super'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Gigante</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const lycan_diurno = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'midday'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Diurno</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const lycan_nocturno = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'midnight'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Nocturno</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const lycan_ocaso = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/${nombre.split(' ')[0]+'-'+'dusk'}.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Ocaso</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const codigo_cero = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/type-null.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_fresa = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-strawberry.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Fresa</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_corazon = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-love.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Corazon</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_flor = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-flower.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Flor</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_estrella = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-star.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Estrella</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_trebol = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-clover.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Trebol</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_fruto = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-berry.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Fruto</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const alcremie_lazo = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/alcremie-vanilla-cream-ribbon.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">Alcremie</h3>
	            <h4 class="form">Lazo</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const tox_grave = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/toxtricity-low-key.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Grave</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const tox_agudo = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/toxtricity-amped.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name.split(' ')[0]}</h3>
	            <h4 class="form">Agudo</h4>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_floral = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-meadow.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_polar = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-icy-snow.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_taiga = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-polar.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_continental = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-continental.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_vergel = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-garden.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_oriental = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-elegant.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_moderno = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-modern.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_marino = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-marine.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_isleño = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-archipelago.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_estepa = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-high-plains.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_desierto = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-sandstorm.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_oasis = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-river.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_monzon = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-monsoon.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_solar = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-sun.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_pantano = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-savanna.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_oceano = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-ocean.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_jungla = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-jungle.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_fantas = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-fancy.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;

	    const vivillon_poke = `
	    	<h3 class="cath">${catcher}</h3>
	        <div class="img-container">
	            <img src="https://img.pokemondb.net/sprites/home/shiny/vivillon-poke-ball.png" alt="${name}" />
	        </div>
	        <div class="info">
	            <span class="number">#${numero.toString()
							.padStart(3, '0')}</span>
	            <h3 class="name">${name}</h3>
	            <small class="type"><span>${type1}</span></small>
	        </div>
	    `;







//status == 'Capturado' || status == 'ShinyLock'
if (status == 'Capturado' || status == 'ShinyLock')
{

   if (nombre.includes('alola'))
	 {
 	 pokemonEl.innerHTML = alolan;
 	 }
   else if (nombre.includes('galar'))
	 {
	 	if(nombre.includes('mime'))
	 	{
	 		pokemonEl.innerHTML = mimegalarian;
	 	}
	 	else if(nombre.includes('darmanitan'))
	 	{
	 		pokemonEl.innerHTML = darmanitan;
	 	}
	 	else if (nombre.includes('farfetch'))
	 	{
	 		pokemonEl.innerHTML = farfetchdgalarian;
 	 	}
	 	else{
	 		pokemonEl.innerHTML = galarian;
	 	}

 	 
 	 }
 	else if (nombre.includes('unown'))
	 {
	 	if (nombre.includes('?'))
	 	{
	 		pokemonEl.innerHTML = unownqm;

	 	}
	 	else if (nombre.includes('!'))
	 	{
	 		pokemonEl.innerHTML = unownem;
	 	}
	 	else
	 	{
	 		pokemonEl.innerHTML = unown;
	 	}

 	 }

 	else if (nombre.includes(' macho') || nombre.includes('original'))
	 {
	 	if (nombre.includes('nidoran'))
	 	{
	 		pokemonEl.innerHTML = nidoran;
	 	}
	 	else{
		 pokemonEl.innerHTML = macho;
		 }
 	 }
 	else if (nombre.includes('hembra'))
	 {

 	 	 if (nombre.includes('meowstic'))
	 	{
	 	pokemonEl.innerHTML = meowstic;
	 	}
	 	else{
		 pokemonEl.innerHTML = hembra;
		 }
 	 }

 	 else if (nombre.includes('.'))
	 {
	 	if(nombre.includes('rime')){
 		 pokemonEl.innerHTML = rime;
	 	}
	 	else if(nombre.includes('jr')){
	 	 pokemonEl.innerHTML = mimejr;	
	 	}
	 	else{
	 	pokemonEl.innerHTML = mime;
	 	}
 	 }
 	 else if (nombre.includes('rfetch'))
	 {

	 	pokemonEl.innerHTML = farfetchd;
 	 }

 	else if (nombre.includes('wormadam'))
	 {

	 	if(nombre.includes('planta')){
	 		pokemonEl.innerHTML = wormadam_plant;
	 	}
	 	
	 	else if(nombre.includes('basura')){
	 		pokemonEl.innerHTML = wormadam_trash;
	 	}
	 	else if(nombre.includes('arena')){
	 		pokemonEl.innerHTML = wormadam_sand;
	 	}
 	 }

 	else if (nombre.includes('mar '))
	 {

	 	if(nombre.includes('shellos mar este')){
	 		pokemonEl.innerHTML = shellos_east;
	 	}
	 	
	 	else if(nombre.includes('shellos mar oeste')){
	 		pokemonEl.innerHTML = shellos_west;
	 	}
	 	else if(nombre.includes('gastrodon mar este')){
	 		pokemonEl.innerHTML = gastrodon_east;
	 	}
	 	else if(nombre.includes('gastrodon mar oeste')){
	 		pokemonEl.innerHTML = gastrodon_west;
	 	}
 	 }

 	else if (nombre.includes('basculin'))
	 {

	 	if(nombre.includes('roja')){
	 		pokemonEl.innerHTML = basculin_roja;
	 	}
	 	
	 	else if(nombre.includes('azul')){
	 		pokemonEl.innerHTML = basculin_azul;
	 	}

 	 }

 	else if (nombre.includes('deerling') || nombre.includes('sawsbuck'))
	 {

	 	if(nombre.includes('otoño')){
	 		pokemonEl.innerHTML = autumn;
	 	}
	 	
	 	else if(nombre.includes('invierno')){
	 		pokemonEl.innerHTML = winter;
	 	}
	 	else if(nombre.includes('verano')){
	 		pokemonEl.innerHTML = summer;
	 	}
	 	else if(nombre.includes('primaver')){
	 		pokemonEl.innerHTML = spring;
	 	}

 	 }
 	 else if (nombre.includes('flabebe') || nombre.includes('floette') || nombre.includes('florges'))
	 {

	 	if(nombre.includes('rojo')){
	 		pokemonEl.innerHTML = flabebe_rojo;
	 	}
	 	
	 	else if(nombre.includes('azul')){
	 		pokemonEl.innerHTML = flabebe_azul;
	 	}
	 	else if(nombre.includes('naranja')){
	 		pokemonEl.innerHTML = flabebe_naranja;
	 	}
	 	else if(nombre.includes('blanco')){
	 		pokemonEl.innerHTML = flabebe_blanco;
	 	}
	 	else if(nombre.includes('amarillo')){
	 		pokemonEl.innerHTML = flabebe_yellow;
	 	}
	 	else if(nombre.includes('eterna')){
	 		pokemonEl.innerHTML = floette_eternal;
	 	}

 	 }
 	 else if (nombre.includes('pumpkaboo') || nombre.includes('gourgeist'))
	 {

	 	if(nombre.includes('mini')){
	 		pokemonEl.innerHTML = pump_mini;
	 	}
	 	else if(nombre.includes('mediano')){

	 		pokemonEl.innerHTML = pump_mediano;
	 	}
	 	else if(nombre.includes('grande')){

	 		pokemonEl.innerHTML = pump_grande;
	 	}
	 	else if(nombre.includes('gigante')){

	 		pokemonEl.innerHTML = pump_gigante;
	 	}

 	 }
 	 else if (nombre.includes('lycanroc'))
	 {

	 	if(nombre.includes('diurno')){
	 		pokemonEl.innerHTML = lycan_diurno;
	 	}
	 	else if(nombre.includes('nocturno')){

	 		pokemonEl.innerHTML = lycan_nocturno;
	 	}
	 	else if(nombre.includes('ocaso')){

	 		pokemonEl.innerHTML = lycan_ocaso;
	 	}

 	 }
 	 else if (nombre.includes('alcremie'))
	 {

	 	if(nombre.includes('fresa')){
	 		pokemonEl.innerHTML = alcremie_fresa;
	 	}
	 	else if(nombre.includes('cora')){

	 		pokemonEl.innerHTML = alcremie_corazon;
	 	}
	 	else if(nombre.includes('flor')){

	 		pokemonEl.innerHTML = alcremie_flor;
	 	}
	 	else if(nombre.includes('estrella')){

	 		pokemonEl.innerHTML = alcremie_estrella;
	 	}
	 	else if(nombre.includes('trebol')){

	 		pokemonEl.innerHTML = alcremie_trebol;
	 	}
	 	else if(nombre.includes('fruto')){

	 		pokemonEl.innerHTML = alcremie_fruto;
	 	}
	 	else if(nombre.includes('lazo')){

	 		pokemonEl.innerHTML = alcremie_lazo;
	 	}

 	 }
 	 else if (nombre.includes('toxtri'))
	 {
	 	if(nombre.includes('agudo')){
	 		pokemonEl.innerHTML = tox_agudo;
	 	}
	 	else{
	 		pokemonEl.innerHTML = tox_grave;
	 	}
	 	
 	 }

 	 else if (nombre.includes('vivill'))
	 {

	 	if(nombre.includes('floral')){
	 		pokemonEl.innerHTML = vivillon_floral;
	 	}
	 	else if(nombre.includes('polar')){

	 		pokemonEl.innerHTML = vivillon_polar;
	 	}
	 	else if(nombre.includes('taiga')){

	 		pokemonEl.innerHTML = vivillon_taiga;
	 	}
	 	else if(nombre.includes('continental')){

	 		pokemonEl.innerHTML = vivillon_continental;
	 	}
	 	else if(nombre.includes('vergel')){

	 		pokemonEl.innerHTML = vivillon_vergel;
	 	}
	 	else if(nombre.includes('oriental')){

	 		pokemonEl.innerHTML = vivillon_oriental;
	 	}
	 	else if(nombre.includes('moderno')){

	 		pokemonEl.innerHTML = vivillon_moderno;
	 	}
	 	else if(nombre.includes('marino')){

	 		pokemonEl.innerHTML = vivillon_marino;
	 	}
	 	else if(nombre.includes('isle')){

	 		pokemonEl.innerHTML = vivillon_isleño;
	 	}
	 	else if(nombre.includes('estepa')){

	 		pokemonEl.innerHTML = vivillon_estepa;
	 	}
	 	else if(nombre.includes('desierto')){

	 		pokemonEl.innerHTML = vivillon_desierto;
	 	}
	 	else if(nombre.includes('sis')){

	 		pokemonEl.innerHTML = vivillon_oasis;
	 	}
	 	else if(nombre.includes('monz')){

	 		pokemonEl.innerHTML = vivillon_monzon;
	 	}
	 	else if(nombre.includes('solar')){

	 		pokemonEl.innerHTML = vivillon_solar;
	 	}
	 	else if(nombre.includes('pantano')){

	 		pokemonEl.innerHTML = vivillon_pantano;
	 	}
	 	else if(nombre.includes('oc')){

	 		pokemonEl.innerHTML = vivillon_oceano;
	 	}
	 	else if(nombre.includes('jungla')){

	 		pokemonEl.innerHTML = vivillon_jungla;
	 	}
	 	else if(nombre.includes('fantas')){

	 		pokemonEl.innerHTML = vivillon_fantas;
	 	}
	 	else if(nombre.includes('ball')){

	 		pokemonEl.innerHTML = vivillon_poke;
	 	}


	 }

 	 else if (nombre.includes(' cero'))
	 {

	 	pokemonEl.innerHTML = codigo_cero;
 	 }



 	 else
 	 {
 	 pokemonEl.innerHTML = capturado;
 	 }
  //console.log(getPokemonStatus(pokemon.id));
} 
  else
{
   pokemonEl.innerHTML = libre;
}

    		
    poke_container.appendChild(pokemonEl);
    
	} //finish for

}//finish function card

fetchPokemons();



const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
