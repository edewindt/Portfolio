<script>
	import hero from '$lib/assets/space.jpg';
</script>

<section
	class="cont"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
>
	<div class="inner">
		<h2 class="hero-text">Resume</h2>
		<h3>Profile</h3>
		<p>
			I like to defy people's expectations, and learn everything I can about anything I'm interested
			in. I have an extreme passion for Art and Programming.
		</p>
	</div>
</section>

<style>
	.cont {
		height: fit-content;
		min-height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		overflow: hidden;
	}
	.inner {
		display: grid;
		max-width: 50rem;
		width: 100vw;
	}
	.hero-text {
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	h3 {
		color: var(--light);
		text-align: center;
	}
	p {
		color: var(--light);
		margin: 1rem;
	}
</style>
