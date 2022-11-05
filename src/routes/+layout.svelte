<script>
	import css from '$lib//assets/app.css';
	import Nav from '../lib/components/nav.svelte';
	let light = 'aliceblue';
	let dark = 'black';
	let nav = false;
	function onKeyDown(e) {
		if (e.keyCode === 27) {
			nav = !nav;
		}
	}
	const ToggleNav = () => {
		nav = !nav;
	};
</script>

<svelte:window on:dblclick={ToggleNav} on:keydown={onKeyDown} />
{#if nav}
	<Nav on:click={ToggleNav} />
{/if}
<body style="--light:{light};--dark:{dark};">
	<slot />
</body>
