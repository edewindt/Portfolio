<script>
	export let name;
	export let img;
	export let description;
	export let url;
</script>

<a href={url}>
	<div class="card">
		<h3>{name}</h3>
		<img src={img} alt="" />
		<p>{description}</p>
	</div>
</a>

<style>
	img {
		height: 10rem;
		width: 20rem;
		padding: 2rem;
	}
	.card {
		background-color: rgba(0, 0, 0, 0.676);
		color: var(--light);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		object-fit: scale-down;
		padding: 2rem;
		border-radius: 2rem;
	}
	.card:hover {
		box-shadow: 0 0 0.5rem var(--light);
		background-color: var(--dark);
	}
	.card p {
		font-size: 1.25rem;
		text-align: center;
		max-width: 20rem;
	}
	.card h3 {
		font-size: 2.5rem;
	}
</style>
