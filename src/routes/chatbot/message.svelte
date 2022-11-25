<script lang="ts">
	import type { MessageType } from "$lib/types/message";
	import botFace from '$lib/images/botFace.svg';
	import anonFace from '$lib/images/anonFace.svg';


	export let message: MessageType;
</script>

<div class="container">
	<div class="botSender">
		{#if message.bot}
			<img src={botFace} alt="botFace" />
		{/if}
	</div>
	<div class={message.bot?'botContent':'userContent'}>
		<p>
			{message.text}
		</p>
	</div>
	<div class="userSender">
		{#if !message.bot}
			<img src={anonFace} alt="anonFace" />
		{/if}
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		.botSender, .userSender {
			width: 2rem;
		}
		.botContent, .userContent {
			p {
				box-shadow: 0 0.4rem 0.5rem rgba(0,0,0,0.2);
				padding: 0.5rem 1rem;
			}
			width: 100%;
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
		}
		.botContent {
			margin-left: 0.5rem;
			justify-content: flex-start;
			p {
				border-radius: 0.3rem 1rem 1rem 1rem;
				background-color: color('secondary');
			}
		}
		.userContent {
			margin-right: 0.5rem;
			justify-content: flex-end;
			p {
				border-radius: 1rem 0.3rem 1rem 1rem;
				background-color: white;
			}
		}
	}
</style>