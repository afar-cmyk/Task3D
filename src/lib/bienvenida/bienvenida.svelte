<script>
	import Logo from '../logo.svelte';
	import Footer from '../footer.svelte';
	import PaginaInicial from './paginaInicial.svelte';
	import { leerDatos } from '../../stores/store';

	// Comprueba si es la primera vez en el sitio
	let primeraVez = leerDatos('primeraVez') === 0 || leerDatos('primeraVez') === null;
	let EstadoLogoPrimeraVez = true;

	function desmontarLogo() {
		EstadoLogoPrimeraVez = false;
	}
</script>

{#if primeraVez}
	{#if EstadoLogoPrimeraVez}
		<div class="contenedor-logo">
			<Logo logoPrimeraVez="true" {desmontarLogo} />
		</div>
	{:else}
		<PaginaInicial normal={false} primeraVez={true} />
	{/if}
{:else}
	<PaginaInicial normal={true} primeraVez={false} />
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
