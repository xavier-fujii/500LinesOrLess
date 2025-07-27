<script>
	import MenuColumn from '$lib/MenuColumn.svelte';
	import ScriptColumn from '$lib/ScriptColumn.svelte';
</script>

<h1 class="text-4xl font-bold text-center">Block Code</h1>

<div class="ms-2 grid grid-cols-5 gap-6 mt-8">
	<MenuColumn />

	<ScriptColumn />

	<div class="col-span-2">
		<h2 class="text-xl font-semibold mb-4">Examples</h2>
	</div>
</div>
