<script>
	import Logo from '../lib/logo.svelte';
</script>

<body>
	<div class="contenedor-logo">
		<Logo />
	</div>
</body>

<style>
	body {
		background: linear-gradient(161.15deg, #262b2c 12.73%, #181b1b 72.95%);
		min-width: 100vw;
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}
	.contenedor-logo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
</style>
