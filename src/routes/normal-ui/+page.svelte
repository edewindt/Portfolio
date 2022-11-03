<script>
	import hero from '$lib/assets/lavacomp.png';
</script>

<section
	class="hero"
	style="  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url({hero});"
/>

<style>
	.hero {
		height: 100vh;
		background-size: cover;
	}
	.hero::before {
		content: '';
		position: absolute;
		top: 0px;
	}
</style>
