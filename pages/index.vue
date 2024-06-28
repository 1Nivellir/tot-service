<template>
	<div>
		<HomeHero />
		<HomeServices />
		<HomeAboutDef />
		<HomeAdvantagesDef />
		<HomeQuestionsDef />
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'main',
})
const HomeAboutDef = defineAsyncComponent(
	() => import('@/components/home/HomeAbout.vue')
)
const HomeAdvantagesDef = defineAsyncComponent(
	() => import('@/components/home/HomeAdvantages.vue')
)
const HomeQuestionsDef = defineAsyncComponent(
	() => import('@/components/home/HomeQuestions.vue')
)
</script>

<style lang="scss"></style>
