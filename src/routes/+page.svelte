<main>
	<section id="buttons">
		<div class="instructs-wrapper">
			<div class="instructs">
				Choose from the following options for different experiences.<br />
				Note: To bring up navigation at any point in time press ESC
			</div>
		</div>
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
		padding: 1rem;
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
	#buttons button {
		padding: 1rem;
		border-radius: 0.8rem;
		background: transparent;
		color: var(--light);
		border: 3px solid var(--light);
		margin: 0.5rem;
		font-size: 2rem;
	}
</style>
