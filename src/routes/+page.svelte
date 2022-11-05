<script>
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	import { Howl, Howler } from 'howler';
	import { instructions } from '$lib/stores/instructs.js';
	const clicksound = new Howl({
		src: ['/src/lib//assets/click.wav'],
		volume: 0.1
	});
	const buttsound = new Howl({
		src: ['/src/lib//assets/ButtonSound.mp3'],
		volume: 0.1
	});
	let buttons = [
		{ txt: 'Normal UI', url: 'normal-ui' },
		{ txt: 'Game UI', url: 'game-ui' },
		{ txt: 'Creative UI', url: 'creative-ui' }
	];
	let instructs = [
		`This application is keyboard accessible<br />
					Note: To bring up navigation at any point in time <br/> press ESC or double click/tap<br />`,
		`Choose from the following options for different experiences.<br />
					Mobile users should pick the Normal UI for the best experience.<br />`
	];
	let i = 0;
	let end = false;
	let instruction = instructs[i];
	const swapinstructs = () => {
		i++;
		instruction = instructs[i];
		if (i + 2 > instructs.length) {
			end = true;
		}
	};
</script>

<main>
	<section id="buttons" in:fade>
		{#if $instructions}
			<div class="instructs-wrapper" transition:fade|local>
				<div class="instructs">
					{@html instruction}
					{#if !end}<button
							on:click={() => {
								clicksound.play();
								swapinstructs();
							}}
							class="next">Next</button
						>{:else}<button
							on:click={() => {
								instructions.set(false);
							}}
							class="next">Close</button
						>{/if}
				</div>
				<button
					id="close-instructs"
					on:click={() => {
						instructions.set(false);
					}}>X</button
				>
			</div>
		{/if}
		{#each buttons as { txt, url }}
			<a href={url}>
				<button
					class="butt"
					on:mouseover={() => {
						buttsound.play();
					}}
					on:focus={() => {
						buttsound.play();
					}}
				>
					{txt}</button
				>
			</a>
		{/each}
	</section>
</main>

<style>
	.next {
		background-color: transparent;
		border: 2px solid var(--light);
		border-radius: 0.5rem;
		color: var(--light);
		font-size: 1.5rem;
		padding: 0 1rem;
		margin-top: 1rem;
		cursor: pointer;
	}
	.next:hover {
		box-shadow: inset 0 0 0.3em var(--light), 0 0 0.3em var(--light);
	}
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
