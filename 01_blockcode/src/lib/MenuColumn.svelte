<script lang="ts">
	import Block from './Block.svelte';
	import type { GeneralBlock } from './block.type';

	const candidatesDictionary: Record<GeneralBlock['type'], GeneralBlock> = {
		repeat: {
			type: 'repeat',
			value: 5,
			children: []
		},
		left: {
			type: 'left',
			value: 5,
			unit: 'degrees'
		},
		right: {
			type: 'right',
			value: 5,
			unit: 'degrees'
		},
		forward: {
			type: 'forward',
			value: 10,
			unit: 'steps'
		},
		back: {
			type: 'back',
			value: 10,
			unit: 'steps'
		},
		circle: {
			type: 'circle',
			value: 10,
			unit: 'radius'
		},
		penUp: {
			type: 'penUp'
		},
		penDown: {
			type: 'penDown'
		},
		backToCenter: {
			type: 'backToCenter'
		},
		hideTurtle: {
			type: 'hideTurtle'
		},
		showTurtle: {
			type: 'showTurtle'
		}
	};
	const candidates = Object.values(candidatesDictionary);
</script>

<div class="col-span-1">
	<h2 class="text-xl font-semibold mb-4">Menu</h2>
	<div class="flex flex-col gap-2 border p-2 bg-amber-50 rounded">
		{#each candidates as blockCandidate (blockCandidate.type)}
			<Block block={blockCandidate} />
		{/each}
	</div>
</div>

<style>
	/* styles go here */
</style>
