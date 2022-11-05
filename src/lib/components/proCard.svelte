<script>
	export let name;
	export let img;
	export let description;
</script>

<div class="card">
	<h1>{name}</h1>
	<img src={img} alt="" />
	<p>{description}</p>
</div>

<style>
	img {
		height: 15rem;
		width: 17rem;
	}
	.card {
		background-color: var(--dark);
		color: var(--light);
		width: 26rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		object-fit: scale-down;
	}
</style>
