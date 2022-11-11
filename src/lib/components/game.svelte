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
	const keyPress = (e) => {
		console.log(e.key);
		switch (e.key) {
			//awsd constrols
			case 'w':
				console.log('Up');
				break;
			case 'a':
				console.log('left');
				break;
			case 's':
				console.log('down');
				break;
			case 'd':
				console.log('right');
				break;
			//arrow controls
			case 'ArrowUp':
				console.log('Up');
				break;
			case 'ArrowLeft':
				console.log('left');
				break;
			case 'ArrowDown':
				console.log('down');
				break;
			case 'ArrowRight':
				console.log('right');
				break;

			default:
				break;
		}
	};
</script>

<canvas bind:this={canvas} width="1024" height="576" />
<svelte:window on:keydown={keyPress} />

<style>
</style>
