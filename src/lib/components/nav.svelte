<script>
	import { fly } from 'svelte/transition';
	import { Howl, Howler } from 'howler';
	import { onMount } from 'svelte';
	const navsound = new Howl({
		src: ['/src/lib//assets/Nav.mp3'],
		volume: 0.5
	});
	onMount(() => {
		navsound.play();
	});
</script>

<nav transition:fly={{ delay: 250, duration: 1000, y: 500, opacity: 0.5 }}>
	<section class="inner-container">Hello World</section>
</nav>

<style>
	nav {
		background-color: rgba(0, 0, 0, 0.775);
		height: 100vh;
		width: 100vw;
		position: absolute;
		z-index: 10;
		color: var(--light);
		display: flex;
		justify-content: center;
		align-items: center;
		backdrop-filter: blur(5px);
	}
</style>
