import { writable } from 'svelte/store';
import { browser } from '$app/env';

// Función que guarda información en el LocalStorage del explorador
// Esta función recibe una clave y un valor
export const guardarDatos = (clave, datos) => {
	const valores = writable(datos);

	valores.subscribe((info) => browser && localStorage.setItem(clave, JSON.stringify(info)));
};

// Función que retorna la informacion guardada en el LocalStorage del explorador
// Esta función recibe una clave
export const leerDatos = (clave) => {
	return JSON.parse(browser && localStorage.getItem(clave));
};
