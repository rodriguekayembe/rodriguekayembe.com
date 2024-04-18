<script lang="ts">
	import { Github, Mail } from 'lucide-svelte';
	const emailAddress = `contact (at) rodriguekayembe (dot) com`;
	const githubURL = 'https://github.com/rodriguekayembe';
</script>
<div class="section contact" id="contact">
	<b>Contact/Miscellaneous</b>
	<ul class="contact-list">
		<li>
			<a href={githubURL} target="_blank" rel="noopener noreferrer">
				<Github size="20" />
				Github
			</a>
		</li>
		<li>
			<Mail size="20" />
			E: {emailAddress}
		</li>
	</ul>
</div>