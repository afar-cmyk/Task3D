<script>
	import BotonPrincipal from '../botonPrincipal.svelte';
</script>

<span>
	<h1>¿Como funciona?</h1>
	<p>
		Con Task3D puedes ingresar frases o palabras para que una de ella sea seleccionada al azar cada
		diá y puedas llevar un seguimiento de aquello que quieres aprender.
	</p>
</span>

<div>
	<h2>Ingresa el titulo de tu nueva rutina:</h2>
	<input type="text" />
</div>

<div>
	<h2>Escribe cada frase seguida de una coma:</h2>
	<input type="text" />
</div>

<div>
	<BotonPrincipal />
	<sub><strong>¡Atencion!</strong> al borrar el cache del explorador perderas todos tus datos!</sub>
</div>

<style>
</style>
