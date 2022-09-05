<script>
	import Logo from '../logo.svelte';
	import BotonPrincipal from '../botonPrincipal.svelte';
</script>

<main>
	<Logo --tamaño-texto="48px" logoNormal="true" />
	<span class="texto-principal">
		<p>¿Quieres crear una nueva rutina y no sabes por donde comenzar?</p>
		<p>¡Los estudios revelan que solo necesitas 30 dias para comenzar una rutina!</p>
	</span>

	<BotonPrincipal textoBoton="Nueva rutina" />
</main>

<style>
	.texto-principal {
		font-family: 'Inter', sans-serif;
		font-weight: 200;
		font-size: 16px;
		line-height: 19px;
		color: #ffffff;
	}
</style>
