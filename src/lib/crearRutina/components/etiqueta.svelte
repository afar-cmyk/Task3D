<script>
	export let tituloEtiqueta;
	export let borrarFrases;
</script>

<div class="contenedor-tag">
	<div class="tag">{tituloEtiqueta}</div>
	<div class="boton-x" on:click={borrarFrases}>X</div>
</div>

<style>
	.contenedor-tag {
		display: flex;
		flex-direction: row;
		background-color: #6b787b;
		width: fit-content;
		height: 30px;
		align-items: center;
		align-content: center;
		padding-left: 8px;
		border-radius: 4px;
	}

	.tag {
		font-family: 'Inter';
		font-weight: 200;
		font-size: 14px;
		color: #ffffff;
		padding-right: 8px;
	}

	.boton-x {
		font-family: 'Inter';
		font-weight: 600;
		font-size: 12px;
		color: hsl(0deg 100% 13%);
		background-color: #958484;
		width: 28px;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: nowrap;
		border-radius: 4px;
		cursor: pointer;
		user-select: none;
	}

	.boton-x:hover {
		background-color: #ac9f9f;
		color: #850000;
	}

	.boton-x:active {
		background-color: #7b6a6b;
		color: #1f0000;
	}
</style>
