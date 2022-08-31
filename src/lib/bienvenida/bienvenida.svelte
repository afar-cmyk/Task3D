<script>
	import Logo from '../logo.svelte';
	import Footer from '../footer.svelte';
</script>

<div class="contenedor-logo">
	<Logo />
</div>
<Footer />

<style>
	.contenedor-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
