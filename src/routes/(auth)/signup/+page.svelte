<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<div>
	<h3>Signup</h3>
	{#if form}
		<div>
			<p class="error">{form?.message}</p>
		</div>
	{/if}
	<form method="post" action="" use:enhance>
		<div>
			<label for="name">Name</label>
			<input type="text" id="name" name="name" placeholder="Enter your name" />
		</div>
		<div>
			<label for="email">Email address</label>
			<input type="email" id="email" name="email" placeholder="Enter email address" />
		</div>
		<div>
			<label for="password">Password</label>
			<input type="password" id="password" name="password" placeholder="*****" />
		</div>
		<div>
			<label for="confirm_password">Confirm Password</label>
			<input type="password" id="confirm_password" name="confirm_password" placeholder="*****" />
		</div>
		<button type="submit">Signup</button>
	</form>
</div>
