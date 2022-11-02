<script>
	import css from '$lib/app.css';
	let light = 'aliceblue';
	let dark = 'black';
</script>

<body style="--light:{light};--dark:{dark};">
	<slot />
</body>
