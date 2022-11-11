<script>
	import map from '$lib/assets/game/Pokemon Mapz.png';
	import playerDown from '$lib/assets/game/playerDown.png';
	import { onMount } from 'svelte';
	let canvas;
	onMount(() => {
		const c = canvas.getContext('2d');

		c.fillStyle = 'white';
		c.fillRect(0, 0, canvas.width, canvas.height);
		console.log(c);
		const image = new Image();
		const playerImage = new Image();

		image.src = map;
		playerImage.src = playerDown;

		image.onload = () => {
			c.drawImage(image, -475, -350);
		};
		playerImage.onload = () => {
			c.drawImage(
				playerImage,
				0,
				0,
				playerImage.width / 4,
				playerImage.height,
				canvas.width / 2 - playerImage.width / 4,
				canvas.height / 2 - playerImage.height,
				playerImage.width / 4,
				playerImage.height
			);
		};
	});
</script>

<canvas bind:this={canvas} width="1024" height="576" />

<style>
</style>
