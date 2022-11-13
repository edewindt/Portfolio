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

		let backgroundImage = {
			position: {
				x: -475,
				y: -350
			},
			image,
			draw() {
				c.drawImage(this.image, this.position.x, this.position.y);
			}
		};

		const animate = () => {
			window.requestAnimationFrame(animate);
			backgroundImage.image.onload = () => {
				backgroundImage.draw();
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
		};
		animate();
	});
	const keyPress = (e) => {
		console.log(keys);
		switch (e.key) {
			//awsd constrols
			case 'w':
				keys.w.pressed = true;
				break;
			case 'a':
				keys.a.pressed = true;
				break;
			case 's':
				keys.s.pressed = true;
				break;
			case 'd':
				keys.d.pressed = true;
				break;
			//arrow controls
			case 'ArrowUp':
				keys.w.pressed = true;
				break;
			case 'ArrowLeft':
				keys.a.pressed = true;
				break;
			case 'ArrowDown':
				keys.s.pressed = true;
				break;
			case 'ArrowRight':
				keys.d.pressed = true;
				break;
			default:
				break;
		}
	};

	const keys = {
		w: {
			pressed: false
		},
		a: {
			pressed: false
		},
		s: {
			pressed: false
		},
		d: {
			pressed: false
		}
	};
</script>

<canvas bind:this={canvas} width="1024" height="576" />
<svelte:window on:keydown={keyPress} />

<style>
</style>
