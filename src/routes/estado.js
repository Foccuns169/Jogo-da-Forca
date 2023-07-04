import { writable } from 'svelte/store'

export let estado = writable('menu');

// @ts-ignore
export function trocarEstadoDoJogo(novoEstado) {
	estado.set(novoEstado)
}