<script>
	import { guardarDatos, leerDatos } from '../../../stores/store';

	import Etiqueta from './etiqueta.svelte';
	export let edicion;
	export let etiquetasVacias = true;

	let textoEtiqueta = '';
	let arrayEtiquetas = edicion ? leerDatos('contenidoRutina') : [];

	function agregarFrases(e) {
		if (e.key === 'Enter' || e.key === ',') {
			arrayEtiquetas = [...arrayEtiquetas, textoEtiqueta.replace(/\s{2}|\,/g, '')];
			arrayEtiquetas = arrayEtiquetas.filter(Boolean);
			guardarDatos('contenidoRutina', arrayEtiquetas);
			etiquetasVacias = !arrayEtiquetas.length;
			textoEtiqueta = '';
		}
	}

	function borrarFrase(i) {
		arrayEtiquetas.splice(i, 1);
		arrayEtiquetas = arrayEtiquetas;
		guardarDatos('contenidoRutina', arrayEtiquetas);
		etiquetasVacias = !arrayEtiquetas.length;
	}
</script>

<div class="seccion-etiquetas">
	{#each arrayEtiquetas as etiquetas, i}
		<Etiqueta tituloEtiqueta={etiquetas} borrarFrases={() => borrarFrase(i)} />
	{/each}
	<input
		type="text"
		name="introducir-etiquetas"
		id="input-tags"
		placeholder="Agrega una palabra o una frase"
		bind:value={textoEtiqueta}
		on:keyup|preventDefault={agregarFrases}
		on:blur={guardarDatos('contenidoRutina', arrayEtiquetas)}
	/>
</div>

<style>
	.seccion-etiquetas {
		background: #475052;
		border-radius: 8px;
		padding: 8px;
		display: flex;
		flex-wrap: wrap;
		row-gap: 8px;
		column-gap: 8px;
	}

	.seccion-etiquetas:focus-within {
		border: none;
		outline: 1px solid #3e8971;
	}

	#input-tags {
		flex: 1;
		width: fit-content;
		padding: 0;
		border: none;
		background: none;
		outline: none;
		font-family: 'Inter';
		font-weight: 200;
		font-size: 14px;
		color: #ffffff;
	}

	#input-tags::placeholder {
		color: #ffffff50;
	}
</style>
