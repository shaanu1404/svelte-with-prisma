<script lang="ts">
	import { page } from '$app/stores';
	import { dateFormat } from '$lib/utils/format';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
</script>

<h1>Welcome, {$page.data.user?.name}!</h1>
<div>
	<a href="/create">Create new post</a>
</div>
<ul>
	{#each data.posts as post}
		<li>
			<h2><a href={`/${post.id}`}>{post.title}</a></h2>
			<h3>- {post.author?.name ?? 'N/A'}</h3>
			<h4>{dateFormat(post.createdAt)}</h4>
			<p>{post.content}</p>
		</li>
	{/each}
</ul>
