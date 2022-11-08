<script>
	import water from '$lib/assets/watercomp.png';
	import Contact from '../../../lib/components/contact.svelte';
	import Contactsent from '../../../lib/components/contactsent.svelte';
	let sent = true;
</script>

<div
	class="cont"
	style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url({water});"
>
	{#if !sent}
		<Contact />
	{:else}
		<Contactsent />
	{/if}
</div>

<style>
	.cont {
		height: fit-content;
		min-height: calc(100vh - 3.5rem);
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
