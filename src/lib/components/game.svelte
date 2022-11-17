<script>
	import map from '$lib/assets/game/Pokemon Mapz.png';
	import triggers from '$lib/code/triggers.js';
	import map2 from '$lib/assets/game/myMap.png';
	import playerDown from '$lib/assets/game/playerDown.png';
	import playerUp from '$lib/assets/game/playerUp.png';
	import playerRight from '$lib/assets/game/playerRight.png';
	import playerLeft from '$lib/assets/game/playerLeft.png';
	import { onMount } from 'svelte';
	import collision from '$lib/code/collisions2.js';
	import over from '$lib/assets/game/over.png';
	let canvas;

	const collisionsMap = [];
	for (let i = 0; i < collision.length; i += 70) {
		collisionsMap.push(collision.slice(i, 70 + i));
	}

	const triggerZones = [];
	for (let i = 0; i < triggers.length; i += 70) {
		triggerZones.push(triggers.slice(i, 70 + i));
	}
	const boundaries = [];
	const triggers1 = [];
	const triggers2 = [];
	const triggers3 = [];
	const triggers4 = [];
	const triggers5 = [];
	onMount(() => {
		const c = canvas.getContext('2d');

		c.fillStyle = 'white';
		c.fillRect(0, 0, canvas.width, canvas.height);
		const image = new Image();
		const playerImage = new Image();
		const playerImageUp = new Image();
		const playerImageRight = new Image();
		const playerImageLeft = new Image();
		const foreimg = new Image();

		image.src = map2;
		foreimg.src = over;
		playerImage.src = playerDown;
		playerImageUp.src = playerUp;
		playerImageLeft.src = playerLeft;
		playerImageRight.src = playerRight;

		const offset = {
			x: -800,
			y: -700
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

		let foreground = {
			position: {
				x: offset.x,
				y: offset.y
			},
			image: foreimg,
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
				max: 4,
				val: 0,
				elapsed: 0
			},
			image: playerImage,
			width: 192 / 4,
			height: 68,
			moving: false,
			sprites: {
				up: playerImageUp,
				down: playerImage,
				right: playerImageRight,
				left: playerImageLeft
			},
			draw() {
				c.drawImage(
					this.image,
					this.frames.val * 48,
					0,
					this.image.width / this.frames.max,
					this.image.height,
					this.position.x,
					this.position.y,
					this.image.width / this.frames.max,
					this.image.height
				);
				if (!this.moving) return;
				this.frames.elapsed++;

				if (this.frames.elapsed % 10 === 0) {
					if (this.frames.val < this.frames.max - 1) this.frames.val++;
					else this.frames.val = 0;
				}
			}
		};
		class Boundary {
			constructor({ position }) {
				this.position = position;
				this.width = 48;
				this.height = 48;
			}
			draw() {
				c.fillStyle = 'blue';
				c.fillRect(this.position.x, this.position.y, this.width, this.height);
			}
		}

		collisionsMap.forEach((row, i) => {
			row.forEach((symbol, j) => {
				if (symbol === 4097)
					boundaries.push(
						new Boundary({
							position: {
								x: j * 48 + offset.x,
								y: i * 48 + offset.y
							}
						})
					);
			});
		});

		triggerZones.forEach((row, i) => {
			row.forEach((symbol, j) => {
				if (symbol === 4097)
					triggers1.push(
						new Boundary({
							position: {
								x: j * 48 + offset.x,
								y: i * 48 + offset.y
							}
						})
					);
				// } else if (symbol == -2148) {
				// 	triggers2.push(
				// 		new Boundary({
				// 			position: {
				// 				x: j * 48 + offset.x,
				// 				y: i * 48 + offset.y
				// 			}
				// 		})
				// 	);
				// } else if (symbol == -2516) {
				// 	triggers3.push(
				// 		new Boundary({
				// 			position: {
				// 				x: j * 48 + offset.x,
				// 				y: i * 48 + offset.y
				// 			}
				// 		})
				// 	);
				// } else if (symbol == -2260) {
				// 	triggers4.push(
				// 		new Boundary({
				// 			position: {
				// 				x: j * 48 + offset.x,
				// 				y: i * 48 + offset.y
				// 			}
				// 		})
				// 	);
				// } else if (symbol == -2520) {
				// 	triggers5.push(
				// 		new Boundary({
				// 			position: {
				// 				x: j * 48 + offset.x,
				// 				y: i * 48 + offset.y
				// 			}
				// 		})
				// 	);
				// }
			});
		});

		console.log(triggers1);
		console.log(boundaries);
		const movables = [background, ...boundaries, foreground, ...triggers1];

		const rectCollision = ({ rectangle1, rectangle2 }) => {
			return (
				rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
				rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
				rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
				rectangle1.position.y + rectangle1.height >= rectangle2.position.y
			);
		};

		const animate = () => {
			window.requestAnimationFrame(animate);
			let moving = true;
			player.moving = false;
			if (keys.s.pressed && lastkey === 's') {
				player.moving = true;
				player.image = player.sprites.down;
				for (let i = 0; i < boundaries.length; i++) {
					const boundary = boundaries[i];
					if (
						rectCollision({
							rectangle1: player,
							rectangle2: {
								...boundary,
								position: {
									x: boundary.position.x,
									y: boundary.position.y - 6
								}
							}
						})
					) {
						console.log('colliding');
						moving = false;
						break;
					}
				}
				if (moving)
					movables.forEach((mov) => {
						mov.position.y -= 6;
					});
			} else if (keys.a.pressed && lastkey === 'a') {
				player.moving = true;
				player.image = player.sprites.left;
				for (let i = 0; i < boundaries.length; i++) {
					const boundary = boundaries[i];
					if (
						rectCollision({
							rectangle1: player,
							rectangle2: {
								...boundary,
								position: {
									x: boundary.position.x + 6,
									y: boundary.position.y
								}
							}
						})
					) {
						console.log('colliding');
						moving = false;
						break;
					}
				}
				if (moving)
					movables.forEach((mov) => {
						mov.position.x += 6;
					});
			} else if (keys.w.pressed && lastkey === 'w') {
				player.moving = true;
				player.image = player.sprites.up;
				for (let i = 0; i < boundaries.length; i++) {
					const boundary = boundaries[i];
					if (
						rectCollision({
							rectangle1: player,
							rectangle2: {
								...boundary,
								position: {
									x: boundary.position.x,
									y: boundary.position.y + 6
								}
							}
						})
					) {
						console.log('colliding');
						moving = false;
						break;
					}
				}
				if (moving)
					movables.forEach((mov) => {
						mov.position.y += 6;
					});
			} else if (keys.d.pressed && lastkey === 'd') {
				player.moving = true;
				player.image = player.sprites.right;
				for (let i = 0; i < boundaries.length; i++) {
					const boundary = boundaries[i];
					if (
						rectCollision({
							rectangle1: player,
							rectangle2: {
								...boundary,
								position: {
									x: boundary.position.x - 6,
									y: boundary.position.y
								}
							}
						})
					) {
						console.log('colliding');
						moving = false;
						break;
					}
				}
				if (moving)
					movables.forEach((mov) => {
						mov.position.x -= 6;
					});
			}

			background.draw();
			// boundaries.forEach((boundary) => {
			// 	boundary.draw();
			// });

			triggers1.forEach((boundary) => {
				boundary.draw();
			});
			// triggers2.forEach((boundary) => {
			// 	boundary.draw();
			// });
			// triggers3.forEach((boundary) => {
			// 	boundary.draw();
			// });
			// triggers4.forEach((boundary) => {
			// 	boundary.draw();
			// });
			// triggers5.forEach((boundary) => {
			// 	boundary.draw();
			// });

			player.draw();
			foreground.draw();
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
	const cw = 1024;
	const ch = 576;
</script>

<div class="wrap"><canvas bind:this={canvas} width={cw} height={ch} /></div>
<svelte:window on:keydown={keyDown} on:keyup={keyUp} />

<style>
	.wrap {
		display: flex;
		justify-content: center;
		height: 100vh;
		overflow: hidden;
	}
</style>
