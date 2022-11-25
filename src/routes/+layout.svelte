<script>

</script>

<section id="pageContainer">
	<main>
		<slot />
	</main>
</section>

<style global lang="scss">
	body,
	html {
		min-height: 100vh;
		background-color: color('background');
	}
	main {
		min-height: 95%;
		width: 100%;
	}
</style>
