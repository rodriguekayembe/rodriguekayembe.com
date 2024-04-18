<script lang="ts">
	import { isOmnivoreError, type Item, Omnivore } from '@omnivore-app/api';
	import { onMount } from 'svelte';

	let items: Item[] = [];

	onMount(async () => {
		const omnivore: Omnivore = new Omnivore({
			apiKey: '',
			timeoutMs: 100000 // 10 seconds
		});

		try {
			const response = await omnivore.items.search({
				after: 0,
				first: 10,
				format: 'highlightedMarkdown',
				includeContent: true,
				query: ``
			});
			items = response.edges.map((e) => e.node);

		} catch (e) {
			if (isOmnivoreError(e)) {
				console.log(e);
			}

		}

	});
</script>


{#each items?.filter(item => item.highlights && item.highlights.length > 0) as item}  <p>
	<a href={item.url}>
		{item.title}
	</a>
</p>
{/each}



