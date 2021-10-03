<script>
	import { onMount } from 'svelte';
	
	export let address;

	let textarea;
	
	onMount(() => {
		textarea.select();
		document.execCommand('copy');
	});
</script>

<textarea bind:value={address} bind:this={textarea}></textarea>