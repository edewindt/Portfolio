<script>
	import lava from '$lib/assets/lavacomp.png';
	import water from '$lib/assets/water.png';
	import water2 from '$lib/assets/watercomp.png';
	import building from '$lib/assets/buildingcomp.png';
	import hero from '$lib/assets/hero.webp';
	import sm from '$lib/assets/s&m.webp';
	import plant from '$lib/assets/Plant.png';
	import violet from '$lib/assets/violet.png';
	import space from '$lib/assets/space.jpg';
	import Design from '../../../lib/components/design.svelte';
	const categories = [
		{
			name: 'Smoke and Mirrors',
			description: 'A composite of roses and artifitial smoke',
			img: sm
		},
		{
			name: 'Violet',
			description: 'A digital rendering of one of my favorite anime characters Violet Evergarden',
			img: violet
		},
		{
			name: 'Plant',
			description: 'A digital rendering of a plant lady',
			img: plant
		},
		{
			name: 'Lava',
			description: 'A compisite of water and lava',
			img: lava
		},
		{
			name: 'No name',
			description: 'The hero image used on my blog',
			img: hero
		},
		{
			name: 'No name',
			description: 'Composite of jellyfish and a girl in the winter',
			img: water2
		},
		{
			name: 'No name',
			description: 'Composite of a woman outside in a violet storm',
			img: water
		},
		{
			name: 'No name',
			description: 'Composite of skyscrapers upside down',
			img: building
		}
	];
</script>

<div
	class="cont"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({space});"
>
	<section>
		<h2>Design</h2>
		<div class="categories">
			{#each categories as { name, description, img, style }, i}
				<Design {name} {description} {img} {style} {i} />
			{/each}
		</div>
	</section>
</div>

<style>
	.cont {
		height: fit-content;
		min-height: calc(100vh - 3.5rem);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
		background-attachment: fixed;
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
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		grid-template-rows: 240px;
		grid-gap: 0.5rem;
		margin: 1rem;
	}
</style>
