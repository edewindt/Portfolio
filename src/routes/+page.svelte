<script>
	let instructions = true;
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
		<button class="butt"> Normal UI </button>
		<button class="butt"> Game UI </button>
		<button class="butt"> Creative UI </button>
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
		color: var(--light);
		border: 3px solid var(--light);
		margin: 0.5rem;
		font-size: 2rem;
		cursor: pointer;
		transform: 1s;
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
