<script lang="ts">
	import { formatDate } from '$lib/utils/dateFormatting.js';


	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>
<body class= content>
	<article>
		<!-- Title -->
		<hgroup>
			<h1>{data.meta.title}</h1>
			<p>Published at {formatDate(data.meta.date)}</p>
		</hgroup>
	
		<!-- Post -->
		<div class="prose">
			<svelte:component this={data.content} />
		</div>
	</article>
</body>