<script>
	import got from '$lib/assets/Got.png';
	import water from '$lib/assets/water.png';
	import Backend from '../../../../lib/components/backend.svelte';
	const categories = [
		{
			name: 'The GoT API',
			description:
				'A backend project that I had a lot of fun with. Displays Game Of Thrones data, quotes, houses, and media',
			img: got,
			url: 'https://the-got-api-production.up.railway.app/'
		}
	];
</script>

<div
	class="cont"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({water});"
>
	<section>
		<h2>Back-end</h2>
		<div class="categories">
			{#each categories as { name, description, img, url }}
				<Backend {name} {description} {img} {url} />
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
		grid-gap: 1rem;
	}
</style>
