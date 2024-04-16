<script lang="ts">
	import { type Item, Omnivore } from '@omnivore-app/api';
	import { onMount } from 'svelte';

	let items: Item[] = [];

	onMount(async () => {
		console.log("im here")
		const omnivore : Omnivore = new Omnivore({
			apiKey: '598ded3e-4021-4bdf-ab¬fgb0-f0268274fe0c',
			baseUrl: 'https://api-prod.omnivore.app',
			timeoutMs: 100000 // 10 seconds
		});

		const response = await omnivore.items.search({
			after: 0,
			first: 10,
			format: "html",
			includeContent: true,
			query: ``
		})

		items = response.edges.map((e) => e.node)
	});


</script>


{#each items?.filter(item => item.highlights && item.highlights.length > 0) as item}	<p>
		<a href={item.url}>
			{item.title}
		</a>
	</p>
{/each}



