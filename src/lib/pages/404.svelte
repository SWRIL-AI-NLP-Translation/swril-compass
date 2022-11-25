<script lang="ts">
	import gif404 from '$lib/images/404.gif';
</script>

<section id="container404">
	<header>
		<h1>404: Page not found</h1>
	</header>
	<img id="gif404" style="z-index: 250;" src={gif404} alt="not found" />
</section>

<style lang="scss">
	#container404 {
		position: relative;
		overflow: hidden;
		height: 100vh;
		> * {
			position: absolute;
			user-select: none;
		}
		header {
			z-index: 300;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			h1 {
				font-size: 4rem;
				margin: 2rem;
				text-shadow: textOutline(0.1rem, black);
			}
		}
		#gif404 {
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(calc(-50% + 4rem));
			height: 80%;
		}
	}
</style>
