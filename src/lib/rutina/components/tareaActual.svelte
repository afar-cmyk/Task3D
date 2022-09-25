<script>
	import { leerDatos } from '../../../stores/store';

	let tareaActual = leerDatos('contenidoRutina');
	console.log(tareaActual);
</script>

<div class="contenedor-principal">
	<div class="seccion-superior">
		<h4>Nueva tarea:</h4>
		<h4>{tareaActual.indexOf(tareaActual[0]) + 1} / {tareaActual.length}</h4>
	</div>
	<div class="seccion-central">
		<span>{tareaActual[0]}</span>
	</div>
</div>

<style>
	.contenedor-principal {
		margin-bottom: 38px;
	}
	.seccion-superior {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #ffffff;
	}

	h4 {
		margin: 0 0 9px 0;
		padding: 0;
	}

	.seccion-central {
		height: 100%;
		background: #475052;
		border-radius: 8px;
		padding: 2ex;
		display: flex;
	}

	.seccion-central span {
		width: 100%;
		font-family: 'Dosis';
		font-style: normal;
		font-weight: 700;
		font-size: 48px;
		line-height: 61px;
		color: #f0f6fb;
		text-align: center;
		margin: 0;
		padding: 0;
	}
</style>
