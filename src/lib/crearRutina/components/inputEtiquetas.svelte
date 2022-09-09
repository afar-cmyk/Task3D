<script>
	import Etiqueta from './etiqueta.svelte';
</script>

<textarea type="text" class="input-tags" />
<Etiqueta />

<style>
	textarea {
		background: #475052;
		border: 0;
		border-radius: 8px;
		font-family: 'Inter';
		font-weight: 200;
		font-size: 14px;
		width: auto;
		padding-top: 8px;
		padding-bottom: 8px;
		color: #ffffff;
		padding-left: 8px;
		box-sizing: border-box;
		width: 100%;
		min-height: 112px;
		resize: none;
	}
</style>
