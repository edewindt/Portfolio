<script>
	import Type from '../../lib/components/type.svelte';
	import hero from '$lib/assets/lavacomp.png';
	let buttons = [
		{ name: 'Projects', url: '/normal-ui/projects' },
		{ name: 'Resume', url: '/normal-ui/resume' },
		{ name: 'Contact', url: '/normal-ui/contact' },
		{ name: 'Design', url: '/normal-ui/design' }
	];
</script>

<section
	class="hero"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
>
	<h2 class="hero-text">My name is Elias and <Type /></h2>
	<div id="buttons">
		{#each buttons as { name, url }}
			<a href={url}><button class="butt">{name}</button></a>
		{/each}
	</div>
</section>

<style>
	.hero {
		height: fit-content;
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: grid;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.hero-text {
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	#buttons {
		height: 100%;
		width: 100%;
		text-align: center;
	}
	#buttons .butt {
		padding: 1rem;
		border-radius: 0.8rem;
		background: transparent;
		color: pink;
		border: 3px solid var(--light);
		margin: 0.5rem;
		font-size: 2rem;
		cursor: pointer;
		transition: 0.6s;
	}
	.butt:hover {
		--light: red;
		font-size: 2rem;
		background-color: transparent;
		color: var(--light);
		border: solid 0.125em var(--light);
		padding: 0.3em;
		border-radius: 15%;
		text-shadow: 0 0 0.25em var(--light);
		box-shadow: inset 0 0 0.9em var(--light), 0 0 0.7em var(--light);
		position: relative;
		cursor: pointer;
	}
	@media only screen and (max-width: 400px) {
		.hero-text {
			color: white;
			font-size: 2.5rem;
			text-align: center;
		}
	}
</style>
