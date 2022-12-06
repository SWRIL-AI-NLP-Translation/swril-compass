<script lang="ts">
	import { COLORS } from "$lib/styles/colors";
	import { languages, type LanguageType } from "$lib/types/languages";
	import Settings from "./icons/settings.svelte";
	export let language: LanguageType;
	let menuDisplay = false;
</script>

<div class='container'>
	<div on:click={()=>{console.log("hi"); menuDisplay = !menuDisplay}} class="settingsButton">
		<Settings  color={COLORS.primary}/>
	</div>
	<div class="languageSelect" style={`display: ${menuDisplay?'flex':'none'}`}>
		<label for='language'>Language</label>
		<select id="languageInput" name='language' value={language} on:change={() => {menuDisplay = false}}>
			{#each languages as language}
				<option value={language}>{language}</option>
			{/each}
		</select>
	</div>
</div>

<style lang="scss">
	.container {
		position: relative;
	}
	.settingsButton {
		height: 2rem;
		width: 2rem;
		cursor: pointer;
	}
	.languageSelect {
		cursor: pointer;
		position: absolute;
		right: 0;
		width: 6rem;
		// background-color: white;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		label {
			font-size: 0.8rem;
			text-align: center;
			width: calc(100% - 1.5rem);
			background-color: color('_mediumGrey');
			color: white;
			padding: 0.2rem 0.8rem;
			border-radius: 1rem 1rem 0 0;
		}
		select {
			font-size: 0.8rem;
			text-align: center;
			width: 100%;
			background-color: white;
			color: color('font');
			padding: 0.2rem 0.8rem;
		}
		z-index: 100;
	}
</style>