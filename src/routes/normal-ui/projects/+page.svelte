<script>
	import reactlogo from '$lib/assets/react.png';
	import nodelogo from '$lib/assets/node.png';
	import gamelogo from '$lib/assets/game.png';
	import water from '$lib/assets/water.png';
	import ProCard from '../../../lib/components/proCard.svelte';
	const categories = [
		{
			name: 'Front-end',
			description:
				'The HTML, CSS, and JavaScript, Everything that makes up the UI, including Libraies and Frameworks',
			img: reactlogo,
			url: '/normal-ui/projects/front-end'
		},
		{
			name: 'Games',
			description: 'For experimentation, and fun, but building games also teaches me a lot',
			img: gamelogo,
			url: '/normal-ui/projects/games'
		},
		{
			name: 'Back-end',
			description:
				'The stuff that no one sees or appreciates that makes an application truly complex',
			img: nodelogo,
			url: '/normal-ui/projects/back-end'
		}
	];
</script>

<div
	class="cont"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({water});"
>
	<section>
		<h2>Projects</h2>
		<div class="categories">
			{#each categories as { name, description, img, url }}
				<ProCard {name} {description} {img} {url} />
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
