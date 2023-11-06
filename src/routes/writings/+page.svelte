<script lang="ts">
	import { formatDate } from '$lib/utils/dateFormatting'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<!-- Posts -->   
<body>
    <div class= "outer markdown">
        <a href='/' class='pb12 caps h6 db'>
         <strong>
          &lt; Back
         </strong>
       </a>
   <div class="content">
   <div class="section writing">
    <h1 class="writing-heading">Writings</h1>
       <ul class="writing-list">
           {#each data.writings as writing}
               <b><a href={writing.slug}>{writing.title + " || " + formatDate(writing.date)}</a></b>
           {/each}
       </ul>    
   </div>
   </div>
</body>


<style>
    .writing-heading {
        font-family: -apple-system, BlinkMacSystemFont, 'Source Sans Pro', sans-serif;
        margin-top: 20px;
        margin-bottom: 40px;
	}
</style>