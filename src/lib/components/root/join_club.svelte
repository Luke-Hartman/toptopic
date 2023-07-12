<script>
	import { enhance } from '$app/forms';
</script>

<div class="card p-4">
	<header class="card-header">
		<h2 class="h2">Join a club</h2>
	</header>
	<form method="POST" action="?/joinClub" use:enhance>
		<input type="text" name="clubId" placeholder="Invite code" class="input mt-4 mb-2" />
		<div class="flex justify-end">
			<input type="submit" value="Join" class="btn variant-soft-secondary mt-2" />
		</div>
	</form>
</div>
