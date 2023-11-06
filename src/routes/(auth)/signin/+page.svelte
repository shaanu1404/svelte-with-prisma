<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div>
	<h3>Signin</h3>
	{#if form}
		<div>
			<p class="error">{form?.message}</p>
		</div>
	{/if}
	<form method="post" action="" use:enhance>
		<div>
			<label for="email">Email address</label>
			<input type="emai" id="email" name="email" placeholder="Enter email address" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="*****" />
		</div>
		<button type="submit">Signin</button>
	</form>
</div>

<style>
	.error {
		color: red;
	}
</style>
