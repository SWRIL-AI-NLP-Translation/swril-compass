<script lang="ts">
	import compassLogo from '$lib/images/compassLogo.png';
	import { goto } from '$app/navigation';
</script>

<article>
	<img src={compassLogo} alt="logo" />
	<header>
		<h1>Chatbot</h1>
	</header>
	<button on:click={() => goto("/chatbot")}>
		<p></p>
		<p>Let's Go</p>
		<p>></p>
	</button>

</article>

<style lang="scss">
	article {
		img {
			margin-top: 4rem;
		}
		header {
			margin-top: 2rem;
			margin-bottom: 5rem;
			h1 {
				font-size: 2rem;
				text-align: center;
			}
		}
		button {
			width: 60%;
			display: flex;
			justify-content: space-between;
			padding: 0.3rem 1rem;
			border: 0.1rem solid navy;
			background-color: white;
			border-radius: 1rem;
			p {
				font-size: 1.5rem;
			}
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
