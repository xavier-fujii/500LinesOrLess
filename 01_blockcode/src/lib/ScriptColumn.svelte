<script lang="ts">
	import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import type { GeneralBlock } from './block.type';
	import Block from './Block.svelte';
	import clsx from 'clsx';

	const blocks = $state<GeneralBlock[]>([]);

	let containerElement: HTMLDivElement;

	$effect(() => {
		const cleanup = dropTargetForElements({
			element: containerElement
		});
		return cleanup;
	});

	$effect(() => {
		const cleanup = monitorForElements({
			canMonitor: ({ source }) => source.data.type === 'block',
			onDrop: ({ source, location }) => {
				const sourceBlock = source.data.block as GeneralBlock;
				// blocks.push({
				// 	id: crypto.randomUUID(),
				// 	...sourceBlock
				// });
			}
		});
		return cleanup;
	});
</script>

<div class="col-span-2">
	<h2 class="text-xl font-semibold mb-4">Script</h2>
	<!-- container -->
	<div
		class={clsx('min-h-40 bg-indigo-50 border rounded', 'flex flex-col gap-2 pb-10 p-2')}
		bind:this={containerElement}
	>
		{#each blocks as scriptBlock (scriptBlock.nanoid)}
			<Block variant="script" block={scriptBlock} />
		{/each}
	</div>
</div>

<style>
	/* styles go here */
</style>
