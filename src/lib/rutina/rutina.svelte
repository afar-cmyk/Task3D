<script>
	import { getContext } from 'svelte';
	import { leerDatos } from '../../stores/store';
	import BotonPrincipal from '../botonPrincipal.svelte';
	import Footer from '../footer.svelte';
	import Logo from '../logo.svelte';
	import ProximaTarea from './components/proximaTarea.svelte';
	import TareaActual from './components/tareaActual.svelte';
	import TareaAnterior from './components/tareaAnterior.svelte';
	$: nombreRutina = leerDatos('tituloRutina');
</script>

<nav>
	<Logo logoPrimeraVez={false} desmontarLogo={null} --tamaño-texto="32px" logoNormal="true" />
</nav>
<main>
	<h1>{nombreRutina}</h1>
	<TareaAnterior />
	<TareaActual />
	<BotonPrincipal textoBoton="Ver rutina" />
	<ProximaTarea />
</main>
<Footer />

<style>
	main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding-left: 22px;
		padding-right: 22px;
		padding-top: 38px;
		box-sizing: border-box;
	}

	h1 {
		margin: 0 0 46px 0;
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 400;
		font-size: 48px;
		line-height: 61px;
		color: #ffffff;
		text-align: center;
	}

	nav {
		height: 56px;
		background: #1c2021;
		width: 100%;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
</style>
