<script>
	import { leerDatos } from '../../stores/store';

	import BotonPrincipal from '../botonPrincipal.svelte';
	import Footer from '../footer.svelte';

	let nombreRutina = leerDatos('tituloRutina');
</script>

<main>
	<h1>{nombreRutina}</h1>
	<BotonPrincipal textoBoton="Conocer tarea" />
</main>
<Footer />

<style>
	main {
		height: 100vh;
		width: 100%;
		padding-left: 22px;
		padding-right: 22px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		gap: 16px;
	}
	h1 {
		margin: 0;
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 61px;
		color: #ffffff;
	}
</style>
