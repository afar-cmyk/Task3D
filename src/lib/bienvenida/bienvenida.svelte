<script>
	import Logo from '../logo.svelte';
	import Footer from '../footer.svelte';
	import PaginaInicial from './paginaInicial.svelte';
	import { leerDatos, guardarDatos } from '../../stores/store';
	import { getContext, setContext, onMount } from 'svelte';

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
		<PaginaInicial />
	{/if}
{:else}
	<PaginaInicial />
{/if}

<div class="debug">
	<button
		on:click={() => {
			guardarDatos('primeraVez', 0), console.log(leerDatos('primeraVez'));
		}}>primera vez</button
	>
	{primeraVez}
</div>
<Footer />

<style>
	.contenedor-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
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
