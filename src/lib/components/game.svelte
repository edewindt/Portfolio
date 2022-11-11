<script>
	import map from '$lib/assets/game/Pokemon Mapz.png';
	import { onMount } from 'svelte';
	let canvas;
	onMount(() => {
		const c = canvas.getContext('2d');

		c.fillStyle = 'white';
		c.fillRect(0, 0, canvas.width, canvas.height);
		console.log(c);
		const image = new Image();
		image.src = map;
		console.log(image);

		image.onload = () => {
			c.drawImage(image, -450, -375);
		};
	});
</script>

<canvas bind:this={canvas} width="1024" height="576" />

<style>
</style>
