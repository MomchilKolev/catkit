<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log('data', data);
</script>

<div>
	{#each data.facts as fact (fact.id)}
		<div class="fact">
			<p>{fact.text}</p>
		</div>
	{/each}
</div>

<style>
	.fact {
		padding: 2rem;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
