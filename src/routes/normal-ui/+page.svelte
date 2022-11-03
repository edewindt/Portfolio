<script>
	import Type from '../../lib/components/type.svelte';
	import hero from '$lib/assets/lavacomp.png';
</script>

<section
	class="hero"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
>
	<h2 class="hero-text">My name is Elias and <Type /></h2>
</section>

<style>
	.hero {
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.hero-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 4rem;
	}
</style>
