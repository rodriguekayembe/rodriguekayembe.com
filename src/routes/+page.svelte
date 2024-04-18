<script>
	import Feed from '../components/Feed.svelte';
	import Contact from '../components/Contact.svelte';
</script>
<div>
	<div class="content">
		<div class="title">Rodrigue Kayembe</div>
		<div class="section bio">
			I'm a software engineer, previously worked at <a
			href="https://www.alfasystems.com/"
			target="_blank">Alfa</a
		><br /><br />
			I was born in Tshikapa, and grew up in Dublin, I am a part-time Londoner and part-time wanderer.
		</div>
		<div class="section projects" id="projects">
			<b> Projects </b>
			<ul class="misc-list">
				<li><a href="https://forgottentapes.com" target="_blank" rel="noopener noreferrer"> Forgotten Tapes - Transfer library across Apple Music/Spotify </a></li>
			</ul>
		</div>
		<div class="section writing" id="writing">
			<b><a href="/">Writing</a></b>
		</div>

		<div class="section reading" id="reading">
			<b> Bookshelf </b>
			<br>
			Reading: Madeline Miller ~ Circe
		</div>

		<div>
			<Contact/>
		</div>

		<div>
			<Feed/>
		</div>

	</div>
</div>