<script>
	import Logo from '../logo.svelte';
	import Footer from '../footer.svelte';
	import { leerDatos } from '../../stores/store';
	import { onMount } from 'svelte';

	// Funcion que devuelve True o False si es la primera vez en el sitio
	const comprobarPrimeraVez = () => {
		return !leerDatos('primeraVez');
	};

	// Comprueba al entrar al sitio si es la primera vez en este
	onMount(() => {
		comprobarPrimeraVez();
	});
</script>

{#if comprobarPrimeraVez()}
	<div class="contenedor-logo">
		<Logo />
	</div>
{:else}
	<p>Pagina inicio descripcion y boton</p>
{/if}

<Footer />

<style>
	.contenedor-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
