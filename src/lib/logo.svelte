<script>
	import '@fontsource/dosis/400.css';
	import '@fontsource/dosis/600.css';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { guardarDatos } from '../stores/store';

	export let desmontarLogo;

	let primeraVez = false;

	onMount(() => {
		setTimeout(() => (primeraVez = !primeraVez), 1000);
		setTimeout(() => guardarDatos('primeraVez', 1), 4000);
		setTimeout(desmontarLogo, 5500);
	});
</script>

<h1 class="tituloPrueba">
	{#if primeraVez}
		<div in:fade={{ duration: 2500 }} out:fade={{ duration: 1000 }}>
			<span class="tituloPrimero">TASK</span><span class="tituloSegundo">3D</span>
		</div>
	{/if}
</h1>

<style>
	h1 {
		user-select: none;
	}
	.tituloPrueba {
		font-family: 'Dosis', sans-serif;
		font-size: 64px;
		margin: 0;
	}
	.tituloPrimero {
		font-weight: 400;
		color: #f0f6fb;
	}
	.tituloSegundo {
		font-weight: 600;
		color: #6dbea4;
	}
</style>
