<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { PageData, ActionData } from './$types';

	export let form: ActionData;

	export let data: PageData;

	let loading = false;

	const fav: SubmitFunction = () => {
		// do something before the form submits
		loading = true;

		return async ({ update }) => {
			// do something after the form submits
			loading = false;
			await update();
		};
	};
</script>

<div class="facts">
	{#each data.facts as { text, _id } (_id)}
		<form method="POST" action="?/favorite" class="form" use:enhance={fav}>
			<input type="hidden" name="text" value={text} />
			<input type="hidden" name="id" value={_id} />
			<p class="fact">{text}</p>
			<button type="submit" aria-busy={loading} class:secondary={loading}>Favorite</button>
		</form>
	{/each}
</div>

<style>
	.facts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 2rem;
	}
	.form {
		padding: 2rem;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
