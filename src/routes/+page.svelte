<script>
	import { setContext } from 'svelte';
	import Bienvenida from '../lib/bienvenida/bienvenida.svelte';
	import NuevaRutina from '../lib/crearRutina/nuevaRutina.svelte';
	import PresentarRutina from '../lib/crearRutina/presentarRutina.svelte';
	import { guardarDatos, leerDatos } from '../stores/store';

	let bienvenida = true;
	let crearRutina = false;
	let mostrarRutina = false;

	function desmontarBienvenida() {
		bienvenida = !bienvenida;
		crearRutina = !crearRutina;
	}

	function desmontarNuevaRutina() {
		crearRutina = !crearRutina;
		mostrarRutina = !mostrarRutina;
	}

	setContext('desmontarBienvenida', desmontarBienvenida);
</script>

<body>
	{#if bienvenida}
		<Bienvenida />
	{/if}

	{#if crearRutina}
		<NuevaRutina />
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
