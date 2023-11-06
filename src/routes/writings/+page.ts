import type { Writing } from "$lib/types"

export async function load({ fetch }) {
	const response = await fetch('api/writings')
	const writings: Writing[] = await response.json()
	return { writings }
}
