<script>
	import { setContext } from 'svelte';
	import Bienvenida from '../lib/bienvenida/bienvenida.svelte';
	import NuevaRutina from '../lib/crearRutina/nuevaRutina.svelte';
	import PresentarRutina from '../lib/crearRutina/presentarRutina.svelte';
	import Rutina from '../lib/rutina/rutina.svelte';

	import { guardarDatos, leerDatos } from '../stores/store';

	let mostrarBienvenida = true;
	let crearRutina = false;
	let mostrarPresentacionRutina = false;
	let mostrarRutina = false;
	let edicion = false;

	// Funcion switcher que alterna entre la pantalla de bienvenida y la pantalla de crear rutina.
	function alternarBienvenida() {
		mostrarBienvenida = !mostrarBienvenida;
		crearRutina = !crearRutina;
	}

	// Funcion switcher que alterna entre la pantalla de crear rutina y la pantalla de confirmación de rutina.
	function alternarNuevaRutina() {
		crearRutina = !crearRutina;
		mostrarPresentacionRutina = !mostrarPresentacionRutina;
	}

	function alternarRutina() {
		mostrarBienvenida = !mostrarBienvenida;
		mostrarRutina = !mostrarRutina;
	}

	// Funcion que activa el modo edición de la pantalla `crearRutina`.
	function modoEdicion() {
		mostrarPresentacionRutina = false;
		edicion = true;
		crearRutina = true;
	}

	// Estas funciones se guardan en el store de Svelte y son disponibles para cualquier pantalla o componente.
	setContext('alternarBienvenida', alternarBienvenida);
	setContext('alternarNuevaRutina', alternarNuevaRutina);
	setContext('modoEdicion', modoEdicion);
</script>

<body>
	{#if mostrarBienvenida}
		<Bienvenida />
	{/if}

	{#if crearRutina}
		<NuevaRutina {edicion} />
	{/if}

	{#if mostrarPresentacionRutina}
		<PresentarRutina />
	{/if}

	{#if mostrarRutina}
		<Rutina />
	{/if}
</body>

<!-- debug! -->
<div class="debug">
	<button
		on:click={() => {
			guardarDatos('primeraVez', 0), console.log(leerDatos('primeraVez'));
		}}>primera vez</button
	>
	<button on:click={alternarBienvenida}>bienvenida</button>
	<button on:click={alternarNuevaRutina}>mostrar presentacion rutina</button>
	<button on:click={alternarRutina}>mostrar rutina</button>
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
