<script lang="ts">
	import { nanoid } from 'nanoid';
	import Block from './Block.svelte';
	import type { GeneralBlock } from './block.type';

	const candidatesDictionary: Record<GeneralBlock['type'], GeneralBlock> = {
		repeat: {
			type: 'repeat',
			value: 5,
			nanoid: nanoid(),
			children: []
		},
		left: {
			type: 'left',
			value: 5,
			nanoid: nanoid(),
			unit: 'degrees'
		},
		right: {
			type: 'right',
			value: 5,
			nanoid: nanoid(),
			unit: 'degrees'
		},
		forward: {
			type: 'forward',
			value: 10,
			nanoid: nanoid(),
			unit: 'steps'
		},
		back: {
			type: 'back',
			value: 10,
			nanoid: nanoid(),
			unit: 'steps'
		},
		circle: {
			type: 'circle',
			value: 10,
			nanoid: nanoid(),
			unit: 'radius'
		},
		penUp: {
			type: 'penUp',
			nanoid: nanoid()
		},
		penDown: {
			type: 'penDown',
			nanoid: nanoid()
		},
		backToCenter: {
			type: 'backToCenter',
			nanoid: nanoid()
		},
		hideTurtle: {
			type: 'hideTurtle',
			nanoid: nanoid()
		},
		showTurtle: {
			type: 'showTurtle',
			nanoid: nanoid()
		}
	};
	const candidates = Object.values(candidatesDictionary);
</script>

<div class="col-span-1">
	<h2 class="text-xl font-semibold mb-4">Menu</h2>
	<div class="flex flex-col gap-2 border p-2 bg-amber-50 rounded">
		{#each candidates as blockCandidate (blockCandidate.type)}
			<Block variant="menu" block={blockCandidate} />
		{/each}
	</div>
</div>

<style>
	/* styles go here */
</style>
