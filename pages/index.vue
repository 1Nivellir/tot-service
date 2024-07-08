<template>
	<div>
		<HomeHero />
		<HomeServices />
		<HomeAboutDef />
		<HomeAdvantagesDef />
		<HomeQuestionsDef :list="accordList" />
	</div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData<FetchResult>('faq', () =>
	$fetch<any>(
		'https://tot-market.ru/api/faq?type=getList&params[pageNum]=1&params[pageSize]=200',
		{
			headers: {
				mode: 'no-cors',
			},
		}
	)
)
interface List {
	CODE: string
	ID: string
	NAME: string
	PREVIEW_PICTURE: string
	PREVIEW_TEXT: string
	SORT: string
}
interface FetchResult {
	data: {
		result: List[]
	}
	total: number
	errors: string[]
}

// const { data: accFaq } = await useFetch<FetchResult>(
// 	'https://tot-market.ru/api/faq?type=getList&params[pageNum]=1&params[pageSize]=200'
// )

const accordList = computed(() => data.value?.data.result || [])

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
