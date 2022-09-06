<script>
	export let textoBoton;
</script>

<button on:click class="boton">
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
</style>
