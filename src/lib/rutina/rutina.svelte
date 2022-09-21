<script>
	import TareaAnterior from './components/tareaAnterior.svelte';
</script>

<main>
	<h1>Titulo de la rutina</h1>
	<TareaAnterior />
	<div>Trapear la casa caliente picante</div>
	<button>ver rutina</button>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 22px;
		padding-right: 22px;
		padding-top: 38px;
		gap: 38px;
		box-sizing: border-box;
	}

	h1 {
		margin: 0;
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 61px;
		color: #ffffff;
		text-align: center;
	}
</style>
