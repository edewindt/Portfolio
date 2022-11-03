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
	let nav = [
		{ name: 'Home', url: '/' },
		{ name: 'Projects', url: '/normal-ui/projects' },
		{ name: 'Bio', url: '/' },
		{ name: 'CV/Resume', url: '/Resume' },
		{ name: 'Contact', url: '/normal-ui/contact' },
		{ name: 'Design', url: '/normal-ui/design' }
	];
</script>

<nav transition:fly={{ delay: 250, duration: 1000, y: 500, opacity: 0 }}>
	<section class="inner-container">
		<div class="menu">
			<ul>
				{#each nav as { name, url }}
					<li><a href={url}>{name}</a></li>{/each}
			</ul>
		</div>
	</section>
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
	a {
		font-size: 1.75rem;
		color: var(--light);
		transition: 0.4s;
	}
	a:hover {
		opacity: 0.4;
	}
</style>
