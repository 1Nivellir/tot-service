<template>
	<div>
		<ClientOnly>
			<HomeHero />
		</ClientOnly>
		<HomeServices />
		<HomeAbout />
		<HomeAdvantages />
		<HomeQuestions />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'main',
})
</script>

<style lang="scss"></style>
