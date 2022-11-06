<script>
	import firstapp from '$lib/assets/firstappcomp.png';
	import got from '$lib/assets/gotcomp.png';
	import goog from '$lib/assets/googcomp.png';
	import mov from '$lib/assets/moviecomp.png';
	import blog from '$lib/assets/blogcomp.png';
	import water from '$lib/assets/water.png';
	import Projects from '../../../../lib/components/projects.svelte';
	const categories = [
		{
			name: 'Pokemon',
			description: 'Pokemon in vanilla JS',
			img: firstapp,
			url: 'https://gleeful-khapse-7c66aa.netlify.app/'
		},
		{
			name: 'Snake',
			description: 'The classic Snake Game built using my favorite UI framework',
			img: goog,
			url: 'https://luxury-kitten-251e2f.netlify.app/'
		},
		{
			name: 'Card Matching Game',
			description: 'A simple card matching game built using my favorite UI framework',
			img: got,
			url: 'https://go-t-edewindt.vercel.app/'
		}
	];
</script>

<div
	class="cont"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({water});"
>
	<section>
		<h2>Front-end</h2>
		<div class="categories">
			{#each categories as { name, description, img, url }}
				<Projects {name} {description} {img} {url} />
			{/each}
		</div>
	</section>
</div>

<style>
	.cont {
		height: calc(100vh - 3.5rem);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	h2 {
		font-size: 3rem;
		color: var(--light);
		margin-bottom: 2rem;
		text-align: center;
	}
	section {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 4.5rem;
	}
	.categories {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 1rem;
	}
</style>
