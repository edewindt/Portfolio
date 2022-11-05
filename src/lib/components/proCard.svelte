<script>
	export let name;
	export let img;
	export let description;
</script>

<div class="card">
	<h3>{name}</h3>
	<img src={img} alt="" />
	<p>{description}</p>
</div>

<style>
	img {
		height: 15rem;
		width: 17rem;
		padding: 2rem;
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
		padding: 2rem;
		border-radius: 2rem;
	}
	.card p {
		font-size: 1.25rem;
		text-align: center;
	}
	.card h3 {
		font-size: 2.5rem;
	}
</style>
