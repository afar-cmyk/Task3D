<script>
	import { getContext } from 'svelte';
	import { guardarDatos, leerDatos } from '../../stores/store';
	import BotonPrincipal from '../botonPrincipal.svelte';
	import Footer from '../footer.svelte';
	import Logo from '../logo.svelte';
	import InputEtiquetas from './components/inputEtiquetas.svelte';

	export let edicion;

	let tituloRutina = edicion ? leerDatos('tituloRutina') : '';
	$: etiquetasVacias = edicion ? false : true;

	const comprobarTitulo = (titulo) => {
		return titulo === '';
	};

	let alternarNuevaRutina = getContext('alternarNuevaRutina');

	const accionBotonPrincipal = () => {
		guardarDatos('tituloRutina', tituloRutina), alternarNuevaRutina();
	};
</script>

<nav>
	<Logo logoPrimeraVez={false} desmontarLogo={null} --tamaño-texto="32px" logoNormal="true" />
</nav>
<main>
	<div>
		<h2 class="titulo-principal">¿Como funciona?</h2>
		<p class="texto-principal">
			Con Task3D puedes ingresar frases o palabras para que una de ella sea seleccionada al azar
			cada diá y puedas llevar un seguimiento de aquello que quieres aprender.
		</p>
	</div>

	<div>
		<h3 class="titulo-secundario">Ingresa el titulo de tu nueva rutina:</h3>
		<input
			id="input-title"
			type="text"
			bind:value={tituloRutina}
			on:blur={guardarDatos('tituloRutina', tituloRutina)}
			placeholder="Escribe el titulo de la rutina"
		/>
	</div>

	<div>
		<h3 class="titulo-secundario">Escribe cada frase seguida de una coma:</h3>
		<InputEtiquetas bind:etiquetasVacias {edicion} />
	</div>

	<div class="acciones">
		<BotonPrincipal
			textoBoton="Crear rutina"
			on:click={accionBotonPrincipal}
			deshabilitado={etiquetasVacias || comprobarTitulo(tituloRutina)}
		/>
		<sub>
			<strong>¡Atencion!</strong> al borrar el cache del explorador perderas todos tus datos!
		</sub>
	</div>
</main>
<Footer />

<style>
	main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 22px;
		padding-right: 22px;
		padding-top: 38px;
		gap: 38px;
		box-sizing: border-box;
	}

	nav {
		height: 56px;
		background: #1c2021;
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	input {
		background: #475052;
		border: 0;
		border-radius: 8px;
		font-family: 'Inter';
		font-weight: 200;
		font-size: 14px;
		padding-top: 8px;
		padding-bottom: 8px;
		color: #ffffff;
		padding-left: 8px;
		box-sizing: border-box;
		width: 100%;
	}

	input:focus-visible {
		border: none;
		outline: 1px solid #3e8971;
	}

	.texto-principal {
		font-family: 'Inter', sans-serif;
		font-weight: 200;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
		margin: 0;
	}

	.titulo-principal {
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 25px;
		color: #ffffff;
		margin-top: 0;
		margin-bottom: 7px;
	}
	.titulo-secundario {
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #ffffff;
		color: #ffffff;
		margin-top: 0;
		margin-bottom: 7px;
	}

	.acciones {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #ffffff;
	}

	.acciones sub {
		margin-top: 8px;
		font-family: 'Inter';
		font-style: normal;
		font-weight: 200;
		font-size: 11px;
		line-height: 13px;
	}

	.acciones strong {
		font-family: 'Inter';
		font-weight: 500;
	}

	#input-title::placeholder {
		color: #ffffff50;
	}
</style>
