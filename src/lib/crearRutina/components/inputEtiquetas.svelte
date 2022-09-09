<script>
	import Etiqueta from './etiqueta.svelte';
	let textoEtiqueta = '';
	let arrayEtiquetas = [];

	function agregarFrases(e) {
		if (e.key === 'Enter' || e.key === ',') {
			arrayEtiquetas.push(textoEtiqueta.replace(',', ''));
			arrayEtiquetas = arrayEtiquetas;
			textoEtiqueta = null;
		}
	}
</script>

<div class="seccion-etiquetas">
	{#each arrayEtiquetas as etiquetas}
		<Etiqueta tituloEtiqueta={etiquetas} />
	{/each}
	<input
		type="text"
		name="introducir-etiquetas"
		id="input-tags"
		placeholder="Agrega una palabra o una frase"
		bind:value={textoEtiqueta}
		on:keyup|preventDefault={agregarFrases}
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
