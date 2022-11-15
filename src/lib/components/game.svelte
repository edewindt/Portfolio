<script>
	import map from '$lib/assets/game/Pokemon Mapz.png';
	import playerDown from '$lib/assets/game/playerDown.png';
	import { onMount } from 'svelte';
	import collision from '$lib/code/collisions.js';
	let canvas;

	const collisionsMap = [];
	for (let i = 0; i < collision.length; i += 70) {
		collisionsMap.push(collision.slice(i, 70 + i));
	}

	const boundaries = [];

	onMount(() => {
		const c = canvas.getContext('2d');

		c.fillStyle = 'white';
		c.fillRect(0, 0, canvas.width, canvas.height);
		const image = new Image();
		const playerImage = new Image();

		image.src = map;
		playerImage.src = playerDown;
		const offset = {
			x: -475,
			y: -350
		};

		let background = {
			position: {
				x: offset.x,
				y: offset.y
			},
			image,
			draw() {
				c.drawImage(this.image, this.position.x, this.position.y);
			}
		};

		let player = {
			position: {
				x: canvas.width / 2 - 192 / 4 / 2,
				y: canvas.height / 2 - 68 / 2
			},
			frames: {
				max: 4
			},
			image: playerImage,
			width: 192 / 4,
			height: 68,
			draw() {
				c.drawImage(
					this.image,
					0,
					0,
					this.image.width / this.frames.max,
					this.image.height,
					this.position.x,
					this.position.y,
					this.image.width / this.frames.max,
					this.image.height
				);
			}
		};
		class Boundary {
			constructor({ position }) {
				this.position = position;
				this.width = 48;
				this.height = 48;
			}
			draw() {
				c.fillStyle = 'red';
				c.fillRect(this.position.x, this.position.y, this.width, this.height);
			}
		}

		// collisionsMap.forEach((row, i) => {
		// 	row.forEach((symbol, j) => {
		// 		if (symbol === 1025)
		// 			boundaries.push(
		// 				new Boundary({
		// 					position: {
		// 						x: j * 48 + offset.x,
		// 						y: i * 48 + offset.y
		// 					}
		// 				})
		// 			);
		// 	});
		// });
		const testBoundary = new Boundary({
			position: {
				x: 400,
				y: 400
			}
		});

		console.log(boundaries);

		const movables = [background, testBoundary];

		const animate = () => {
			window.requestAnimationFrame(animate);
			if (keys.s.pressed && lastkey === 's') {
				movables.forEach((mov) => {
					mov.position.y -= 6;
				});
			} else if (keys.a.pressed && lastkey === 'a') {
				movables.forEach((mov) => {
					mov.position.x += 6;
				});
			} else if (keys.w.pressed && lastkey === 'w') {
				movables.forEach((mov) => {
					mov.position.y += 6;
				});
			} else if (keys.d.pressed && lastkey === 'd') {
				movables.forEach((mov) => {
					mov.position.x -= 6;
				});
			}

			background.draw();
			// boundaries.forEach((boundary) => {
			// 	boundary.draw();
			// });
			testBoundary.draw();
			player.draw();

			if (
				player.position.x + player.width >= testBoundary.position.x &&
				player.position.x <= testBoundary.position.x + testBoundary.width &&
				player.position.y <= testBoundary.position.y + testBoundary.height &&
				player.position.y + player.height >= testBoundary.position.y
			) {
				console.log('colliding');
			}
		};
		animate();
	});
	let lastkey = '';
	const keyDown = (e) => {
		switch (e.key) {
			//awsd constrols
			case 'w':
				keys.w.pressed = true;
				lastkey = 'w';
				break;
			case 'a':
				keys.a.pressed = true;
				lastkey = 'a';
				break;
			case 's':
				keys.s.pressed = true;
				lastkey = 's';
				break;
			case 'd':
				keys.d.pressed = true;
				lastkey = 'd';
				break;
			//arrow controls
			case 'ArrowUp':
				keys.w.pressed = true;
				lastkey = 'w';
				break;
			case 'ArrowLeft':
				keys.a.pressed = true;
				lastkey = 'a';
				break;
			case 'ArrowDown':
				keys.s.pressed = true;
				lastkey = 's';
				break;
			case 'ArrowRight':
				keys.d.pressed = true;
				lastkey = 'd';
				break;
			default:
				break;
		}
	};

	const keyUp = (e) => {
		switch (e.key) {
			//awsd constrols
			case 'w':
				keys.w.pressed = false;
				break;
			case 'a':
				keys.a.pressed = false;
				break;
			case 's':
				keys.s.pressed = false;
				break;
			case 'd':
				keys.d.pressed = false;
				break;
			//arrow controls
			case 'ArrowUp':
				keys.w.pressed = false;
				break;
			case 'ArrowLeft':
				keys.a.pressed = false;
				break;
			case 'ArrowDown':
				keys.s.pressed = false;
				break;
			case 'ArrowRight':
				keys.d.pressed = false;
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
<svelte:window on:keydown={keyDown} on:keyup={keyUp} />

<style>
</style>
