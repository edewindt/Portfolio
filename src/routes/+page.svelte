<script>
	import { flip } from 'svelte/animate';
	import { Howl, Howler } from 'howler';
	const buttsound = new Howl({
		src: ['/src/lib/ButtonSound.mp3'],
		volume: 0.1
	});
	let instructions = true;
	let buttons = [{ txt: 'Normal UI' }, { txt: 'Game UI' }, { txt: 'Creative UI' }];
	const play = (sound) => {
		sound.play();
		// Clear listener after first call.

		// Fires when the sound finishes playing.
		sound.on('end', function () {
			console.log('Finished!');
		});
	};
</script>

<main>
	<section id="buttons">
		{#if instructions}
			<div class="instructs-wrapper">
				<div class="instructs">
					Choose from the following options for different experiences.<br />
					Note: To bring up navigation at any point in time press ESC
				</div>
				<button
					id="close-instructs"
					on:click={() => {
						instructions = false;
					}}>X</button
				>
			</div>
		{/if}
		{#each buttons as { txt }}
			<button
				class="butt"
				on:focus={() => {
					buttsound.play();
				}}
				on:mouseover={() => {
					buttsound.play();
				}}
			>
				{txt}</button
			>
		{/each}
	</section>
</main>

<style>
	.instructs-wrapper {
		display: flex;
		justify-content: center;
	}
	.instructs {
		border: 2px solid var(--light);
		border-radius: 0.5rem;
		width: fit-content;
		padding: 2rem;
		font-size: 20px;
		position: relative;
		bottom: 10rem;
	}
	main {
		min-height: 100vh;
		height: 100%;
		width: 100vw;
		background-color: var(--dark);
		color: var(--light);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#buttons {
		height: 100%;
		width: 100%;
		text-align: center;
	}
	#buttons .butt {
		padding: 1rem;
		border-radius: 0.8rem;
		background: transparent;
		color: pink;
		border: 3px solid var(--light);
		margin: 0.5rem;
		font-size: 2rem;
		cursor: pointer;
	}
	#close-instructs {
		position: relative;
		bottom: 10rem;
		right: 2rem;
		height: 2rem;
		font-size: 1rem;
		padding: 0.35rem;
		background: transparent;
		color: var(--light);
		display: inline-block;
		transform: scale(1, 0.8);
	}
	.butt:hover.butt::before {
		content: '';
		position: absolute;
		background-color: var(--light);
		top: 120%;
		width: 100%;
		height: 100%;
		transform: perspective(1em) rotateX(30deg) scale(1, 0.5);
		filter: blur(1em);
		pointer-events: none;
	}
	.butt:hover {
		--light: red;
		font-size: 2rem;
		background-color: transparent;
		color: var(--light);
		border: solid 0.125em var(--light);
		padding: 0.3em;
		border-radius: 15%;
		text-shadow: 0 0 0.25em var(--light);
		box-shadow: inset 0 0 0.3em var(--light), 0 0 0.3em var(--light);
		position: relative;
		cursor: pointer;
	}
</style>
