<script>
	export let textoBoton;
	export let deshabilitado = false;
	export let variante = '';
</script>

<button on:click class={`boton ${variante}`} disabled={deshabilitado}>
	{textoBoton}
</button>

<style>
	.boton {
		background: #6dbea4;
		border-radius: 32px;
		width: 100%;
		font-family: 'Dosis';
		font-weight: 600;
		font-size: 18px;
		line-height: 20px;
		padding: 10px 0 10px 0;
		color: #262b2c;
		border: none;
	}
	.boton:hover {
		background: #80c6b0;
		color: #343b3c;
	}
	.boton:active {
		background: #4dac8e;
		color: #181b1b;
	}
	.boton:disabled {
		background: #262b2c;
		color: #343b3c;
	}
	.secundario {
		background: #6eb0bf;
	}
	.secundario:hover {
		background: #80bac6;
	}
	.secundario:active {
		background: #4d9bac;
	}
</style>
