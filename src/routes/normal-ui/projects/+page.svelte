<script>
	import reactlogo from '$lib/assets/react.png';
	import ProCard from '../../../lib/components/proCard.svelte';
	const categories = [
		{
			name: 'Front-end',
			description:
				'The HTML, CSS, and JavaScript, Everything that makes up the UI, including Libraies and Frameworks',
			img: reactlogo
		},
		{ name: 'Games', description: '', img: '' },
		{ name: 'Back-end', description: '', img: '' }
	];
</script>

<section>
	<h1>Projects</h1>
	<div class="categories">
		{#each categories as { name, description, img }}
			<ProCard {name} {description} {img} />
		{/each}
	</div>
</section>
