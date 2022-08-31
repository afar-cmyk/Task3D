<script>
	import '@fontsource/dosis/400.css';
	import '@fontsource/dosis/600.css';
	import { fade } from 'svelte/transition';
	let primeraVez = false;
	setTimeout(() => (primeraVez = !primeraVez), 1000);
</script>

<h1 class="tituloPrueba">
	{#if primeraVez}
		<div transition:fade={{ duration: 2500 }}>
			<span class="tituloPrimero">TASK</span><span class="tituloSegundo">3D</span>
		</div>
	{:else}
		<div />
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
