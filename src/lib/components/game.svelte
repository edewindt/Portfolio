<script>
	import map from '$lib/assets/game/Pokemon Mapz.png';
	import { onMount } from 'svelte';
	let canvas;
	onMount(() => {
		const c = canvas.getContext('2d');

		c.fillStyle = 'white';
		c.fillRect(0, 0, canvas.width, canvas.height);
		console.log(c);
	});
</script>

<canvas bind:this={canvas} width="1024" height="576" />

<style>
</style>
