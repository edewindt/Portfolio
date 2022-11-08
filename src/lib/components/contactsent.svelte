<section>
	<h2>Contact</h2>

	<div class="contact">
		<p>Thanks for contacting me</p>
		<p>We'll be in touch soon!</p>
	</div>
</section>

<style>
	h2 {
		color: white;
		font-size: 2.5rem;
	}
	section {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 0rem 2rem;
		padding: 2rem 0rem;
	}
	.contact {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 70rem;
		max-width: 100%;
		background-color: rgba(0, 0, 0, 0.676);
		padding: 4rem;
		color: var(--light);
		padding-bottom: 3.5rem;
		font-size: 20px;
		border-radius: 1rem;
		height: 30rem;
	}
	.contact p {
		margin: 1rem;
	}
	@media only screen and (max-width: 1300px) {
		.contact {
			max-width: calc(100vw - 15rem);
		}
	}
	@media only screen and (max-width: 900px) {
		.contact {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40rem;
			max-width: 100%;
			flex-direction: column;
			background-color: var(--dark);
			padding: 1rem;
			color: var(--light);
			overflow: hidden;
		}
	}
</style>
