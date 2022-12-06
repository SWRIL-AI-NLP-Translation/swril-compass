<script lang="ts">
	import robot from '$lib/images/robot.png';
	import SettingsMenu from '$lib/components/SettingsMenu.svelte';
	import type { MessageType } from '$lib/types/message';
	import Message from './message.svelte';
	import { graphql } from '$lib/data/graphql';
	import { CHAT_RESPONSE } from '$lib/data/queries/chatResponse';
	import type { LanguageType } from '$lib/types/languages';

	let messages: MessageType[] = [{
		text: 'How can I help you?',
		bot: true
	}];

	let language:LanguageType = 'English'

	const sendMessage = async () => {
		const textInput:HTMLInputElement|null = document.querySelector("#textInput");
		const languageInput:HTMLInputElement|null = document.querySelector("#languageInput");
		let text;
		if (textInput && languageInput) {
			text = textInput.value;
			language = languageInput.value as LanguageType;
		}
		else return
		if (text.length === 0) return
		messages.push({
			text
		});
		messages = messages
		textInput.value = '';

		try {
			const res = await graphql.request(CHAT_RESPONSE, {
				data: {
					message: text,
					previousMessages: messages,
					language
				},
			})
			console.log(res)
			const data = res.getChatResponse
			if (!data) {
				console.error(res.errors)
			} else {
				messages.push({
					text: data.message,
					bot: true
				})
				messages = messages
			}
		} catch (e) {
			console.error(e)
		}
	}
</script>

<article>
	<header>
		<img src={robot} alt="robot" />
		<h1>Chatbot</h1>
		<div>
			<SettingsMenu language={language} />
		</div>
	</header>
	<section class="dialogue">
		<div class="bubbleArrow"></div>
		{#each messages as message}
			<Message message={message} />
		{/each}
		<div class="chatInput">
			<input 
				id="textInput" 
				type="text" 
				placeholder="Type here" 
				on:keydown={(e) => {if (e.key === 'Enter') sendMessage()}}
			/>
			<button on:click={sendMessage}>SEND</button>
		</div>
	</section>
</article>

<style lang="scss">
	article {
		header {
			display:flex;
			justify-content: space-between;
			align-items: center;
			width: calc(100% - 2rem);
			margin: 1rem 1rem 1rem;
			h1 {
				font-size: 2rem;
				text-align: center;
			}
			div,img {
				height: 2rem;
				width: 2rem;
			}
		}
		

		.dialogue {
			position: relative;
			.bubbleArrow {
				position: absolute;
				top: -1.5rem;
				left: 1.5rem;
				border-left: 0.5rem solid transparent;
				border-right: 1rem solid transparent;
				border-bottom: 1.5rem solid color('primary');
			}
			border: 0.2rem solid color('primary');
			width: 90%;
			border-radius: 1rem;
			padding: 1rem;
			.chatInput {
				padding: 0 1rem;
				display: flex;
				justify-content: space-between;
				input {
					border-width: 0;
					padding: 0.5rem;
					width: 100%;
					border-radius: 0.3rem;
				}
				button {
					width: 5rem;
					font-weight: bold;
					border-width: 0;
					background-color: transparent;
				}
			}
		}
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		* {
			max-width: 25rem;
		}
	}
</style>
