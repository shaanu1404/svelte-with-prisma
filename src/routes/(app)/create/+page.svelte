<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	let form: ActionData;
	let formLoading = false;
</script>

<h1>Create a post</h1>

{#if formLoading}
	<h2>Loading...</h2>
{/if}

<div>
	{#if form?.message}
		<p>{form?.message}</p>
	{/if}
	{#if form?.error}
		<p>{form?.error}</p>
	{/if}
</div>

<form
	action="?/createpost"
	method="post"
	use:enhance={() => {
		formLoading = true;
		return async ({ update }) => {
			await update();
			formLoading = false;
		};
	}}
>
	<div>
		<input type="text" name="title" id="title" placeholder="Enter title" />
	</div>
	<div>
		<textarea name="content" id="content" rows="10" placeholder="Your content here" />
	</div>
	<button type="submit">Create</button>
</form>
