<script>
	import { getContext } from 'svelte';
	import Logo from '../logo.svelte';
	import BotonPrincipal from '../botonPrincipal.svelte';
	import '@fontsource/inter';

	let alternarBienvenida = getContext('alternarBienvenida');
</script>

<main>
	<Logo logoPrimeraVez={false} desmontarLogo={null} --tamaño-texto="48px" logoNormal="true" />
	<span class="texto-principal">
		<p class="primer-texto">¿Quieres crear una nueva rutina y no sabes por donde comenzar?</p>
		<p>¡Los estudios revelan que solo necesitas 30 dias para comenzar una rutina!</p>
	</span>

	<BotonPrincipal on:click={alternarBienvenida} textoBoton="Nueva rutina" />
</main>

<style>
	main {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 22px;
		padding-right: 22px;
		gap: 34px;
	}
	.texto-principal {
		font-family: 'Inter', sans-serif;
		font-weight: 200;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
		margin: 0;
	}
	.texto-principal p {
		margin-bottom: 0;
	}
	.primer-texto {
		margin-top: 0;
	}
</style>
