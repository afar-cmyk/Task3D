<script>
	import Etiqueta from './etiqueta.svelte';
	let textoEtiqueta = '';
</script>

<div class="seccion-etiquetas">
	<Etiqueta tituloEtiqueta="Barrer la casa" />
	<Etiqueta tituloEtiqueta="Trapear el piso" />
	<Etiqueta tituloEtiqueta="Quitar el polvo" />
	<Etiqueta tituloEtiqueta={textoEtiqueta} />
	<input type="text" name="introducir-etiquetas" id="input-tags" bind:value={textoEtiqueta} />
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
</style>
