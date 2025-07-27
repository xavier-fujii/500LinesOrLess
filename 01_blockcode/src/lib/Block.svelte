<script lang="ts">
	import {
		draggable,
		dropTargetForElements
	} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
	import clsx from 'clsx';
	import Block from './Block.svelte';
	import type { GeneralBlock } from './block.type';

	interface Props {
		block: GeneralBlock;
		variant: 'script' | 'menu';
	}

	let blockElement: HTMLDivElement;
	let childrenContainerElement: HTMLDivElement;

	let { block, variant: mode }: Props = $props();

	let value = $state('value' in block ? block.value : 0);
	const hasChildren = 'children' in block;

	$effect(() => {
		const cleanup = draggable({
			element: blockElement,
			getInitialData: () => {
				return { block, type: 'block' };
			}
		});
		return cleanup;
	});

	$effect(() => {
		if (hasChildren && childrenContainerElement) {
			const cleanup = dropTargetForElements({
				element: childrenContainerElement,
				getData: () => {
					return {
						type: 'children'
					};
				},
				canDrop: ({ source }) => source.data.type === 'block',
				onDrop: ({ source, location }) => {}
			});
			return cleanup;
		}
	});
</script>

<div
	class={clsx({
		'bg-orange-200': mode === 'menu',
		'bg-indigo-200': mode === 'script'
	})}
	bind:this={blockElement}
>
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

	<div class={clsx('ps-3 border-l', { hidden: !('children' in block) })}>
		<div
			class={clsx('h-6 rounded-tl rounded-bl border-l border-t border-b', {
				'bg-amber-50': mode === 'menu',
				'bg-indigo-50': mode === 'script'
			})}
			bind:this={childrenContainerElement}
		>
			{#if 'children' in block}
				{#each block.children as child (child.nanoid)}
					<Block block={child} variant="script" />
				{/each}
			{/if}
		</div>
	</div>
	<div class="border-b h-2 border-l border-r rounded-bl rounded-br"></div>
</div>
