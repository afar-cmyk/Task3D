<script>
	import { setContext } from 'svelte';
	import Bienvenida from '../lib/bienvenida/bienvenida.svelte';
	import NuevaRutina from '../lib/crearRutina/nuevaRutina.svelte';
	import PresentarRutina from '../lib/crearRutina/presentarRutina.svelte';
	import { guardarDatos, leerDatos } from '../stores/store';

	/**
	 *  En esta pagina se incia por defecto la pantalla de bienvenida
	 *  y se ajusta dependiendo de la navegacion del usuario,
	 * 	por medio de los estados de cada una de las pantallas del sitio.
	 */

	let bienvenida = true; // Estado que controla la visibilidad de la pantalla de bienvenida
	let crearRutina = false; // Estado que controla la visibilidad de la pantalla de creación de rutinas
	let mostrarRutina = false; // Estado que controla la visibilidad de la pantalla de confirmación de rutina
	let edicion = false; // Estado que controla el comportamiento de edicion de la pantalla `crearRutina`

	// Funcion switcher que alterna entre la pantalla de bienvenida y la pantalla de crear rutina.
	function desmontarBienvenida() {
		bienvenida = !bienvenida;
		crearRutina = !crearRutina;
	}

	// Funcion switcher que alterna entre la pantalla de crear rutina y la pantalla de confirmación de rutina.
	function desmontarNuevaRutina() {
		crearRutina = !crearRutina;
		mostrarRutina = !mostrarRutina;
	}

	// Funcion que activa el modo edición de la pantalla `crearRutina`.
	function modoEdicion() {
		mostrarRutina = false;
		edicion = true;
		crearRutina = true;
	}

	// Estas funciones se guardan en el store de Svelte y son disponibles para cualquier pantalla o componente.
	setContext('desmontarBienvenida', desmontarBienvenida);
	setContext('desmontarNuevaRutina', desmontarNuevaRutina);
	setContext('modoEdicion', modoEdicion);
</script>

<!-- Se activa la visibilidad de las pantallas dependiendo del estado de las variables -->
<body>
	{#if bienvenida}
		<Bienvenida />
	{/if}

	{#if crearRutina}
		<NuevaRutina {edicion} />
	{/if}

	{#if mostrarRutina}
		<PresentarRutina />
	{/if}
</body>

<!-- debug! -->
<div class="debug">
	<button
		on:click={() => {
			guardarDatos('primeraVez', 0), console.log(leerDatos('primeraVez'));
		}}>primera vez</button
	>
	<button on:click={desmontarBienvenida}>bienvenida</button>
	<button on:click={desmontarNuevaRutina}>mostrar rutina</button>
</div>

<style>
	body {
		background: linear-gradient(161.15deg, #262b2c 12.73%, #181b1b 72.95%);
		min-width: 100vw;
		min-height: 100vh;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.debug {
		position: absolute;
		display: flex;
		bottom: 45px;
		width: 100vw;
		align-items: center;
		justify-content: center;
	}
</style>
