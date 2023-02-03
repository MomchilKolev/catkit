<nav>
	<a href="/">Home</a>
	<a href="/favorites">Favorites</a>
</nav>

<main class="container">
	<slot />
</main>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		padding: 2rem 3rem;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
	}

	.container {
		padding: 2rem 3rem;
	}
</style>
