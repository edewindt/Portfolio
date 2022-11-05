<script>
	import reactlogo from '$lib/assets/react.png';
	import nodelogo from '$lib/assets/node.png';
	import gamelogo from '$lib/assets/game.png';
	import ProCard from '../../../lib/components/proCard.svelte';
	const categories = [
		{
			name: 'Front-end',
			description:
				'The HTML, CSS, and JavaScript, Everything that makes up the UI, including Libraies and Frameworks',
			img: reactlogo
		},
		{
			name: 'Games',
			description: 'For experimentation, and fun, but building games also teaches me a lot',
			img: gamelogo
		},
		{
			name: 'Back-end',
			description:
				'The stuff that no one sees or appreciates that makes an application truly complex',
			img: nodelogo
		}
	];
</script>

<section>
	<h2>Projects</h2>
	<div class="categories">
		{#each categories as { name, description, img }}
			<ProCard {name} {description} {img} />
		{/each}
	</div>
</section>

<style>
	h2 {
		font-size: 3rem;
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
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
</style>
