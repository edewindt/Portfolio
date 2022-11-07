<script>
	import hero from '$lib/assets/lavacomp.png';
</script>

<section
	class="cont"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
>
	<div class="inner">
		<h2 class="hero-text">Resume</h2>
		<h3>Profile</h3>
		<p>
			I like to break people's expectations, and learn everything I can about anything I'm
			interested in.
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
		justify-content: center;
		flex-direction: column;
	}
	.hero-text {
		color: white;
		font-size: 4rem;
		text-align: center;
	}
	h3 {
		color: var(--light);
	}
	p {
		color: var(--light);
	}
</style>
