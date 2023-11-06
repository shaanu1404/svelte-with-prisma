<script lang="ts">
	import type { PageServerData } from './$types';
	import { dateFormat } from '$lib/utils/format';
	export let data: PageServerData;
</script>

<div>
	<h2>{data.post.title}</h2>
	<h4>{dateFormat(data.post.createdAt)}</h4>
	<p>{data.post.content}</p>
</div>
