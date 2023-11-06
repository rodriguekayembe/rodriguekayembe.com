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
<body>
	<div class= "outer markdown">
		<a href='/writings' class='pb12 caps h6 db'>
		 <strong>
		  &lt; Back
		 </strong>
	   </a>

	<div class="content">
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
	</div>
</body>