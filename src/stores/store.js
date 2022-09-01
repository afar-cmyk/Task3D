import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const guardarDatos = (clave, datos) => {
	const valores = writable(datos);

	valores.subscribe((info) => browser && localStorage.setItem(clave, JSON.stringify(info)));
};

export const leerDatos = (clave) => {
	return JSON.parse(browser && localStorage.getItem(clave));
};
