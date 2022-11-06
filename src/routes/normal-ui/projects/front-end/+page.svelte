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
			name: 'My First App',
			description: 'The first application I ever created',
			img: firstapp,
			url: 'https://project.edewindt.com'
		},
		{
			name: 'Google Interface Clone',
			description: 'An interface clone of Google',
			img: goog,
			url: 'https://luxury-kitten-251e2f.netlify.app/'
		},
		{
			name: 'Game Of Thrones',
			description: 'The front-end to my backend project, a site for Game of Thrones data',
			img: got,
			url: 'https://go-t-edewindt.vercel.app/'
		},
		{
			name: 'Movie App',
			description: 'A front-end that pulls from themoviedb.org',
			img: mov,
			url: 'https://fabulous-narwhal-0242f1.netlify.app/'
		},
		{
			name: 'My Blog',
			description: 'A blog where I talk about whatever I want, 99% programming',
			img: blog,
			url: 'https://edewindt.com/'
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
