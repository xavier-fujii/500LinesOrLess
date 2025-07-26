<script lang="ts">
	import clsx from 'clsx';
	import type { GeneralBlock } from './block.type';
	interface Props {
		block: GeneralBlock;
	}

	let { block }: Props = $props();

	let value = $state('value' in block ? block.value : 0);
	const hasChildren = 'children' in block;
</script>

<div class="bg-orange-200">
	<div
		class={clsx(
			'py-2 px-2',
			'flex gap-2 justify-start flex-wrap',
			hasChildren ? 'border-t rounded-tl rounded-tr border-l border-r' : 'border rounded'
		)}
	>
		<h3 class="font-medium">
			{block.type}
		</h3>
		{#if 'value' in block}
			<input
				class={clsx('bg-white px-1 border min-w-0 w-24 max-w-full')}
				type="number"
				bind:value
			/>
		{/if}
		{#if 'unit' in block}
			<span>{block.unit}</span>
		{/if}
	</div>

	{#if hasChildren}
		<div class="ps-3 border-l">
			<div class="h-6 rounded-tl rounded-bl bg-amber-50 border-l border-t border-b"></div>
		</div>
		<div class="border-b h-2 border-l border-r rounded-bl rounded-br"></div>
	{/if}
</div>
