<script>
	import Normnav from '../../lib/components/normnav.svelte';
</script>

<header>
	<Normnav />
</header>
<main>
	<slot />
</main>

<style>
	main {
		padding-top: 3.5rem;
	}
</style>
