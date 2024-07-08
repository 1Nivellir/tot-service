<template>
	<div>
		<CommonHero
			:title="dataServer.NAME"
			:img="dataServer.PREVIEW_PICTURE"
			:prevText="dataServer.PREVIEW_TEXT"
			:imgForm="dataServer.IMG_FORM1"
		/>
		<CommonComfort :list="dataServer.ADVANTAGES" />
		<CommonSings :list="dataServer.SIGN" :title="dataServer.TITLE_BLOCK_SIGN" />
		<CommonPrice
			:list="dataServer.PRICE_USLUGI"
			:title="dataServer.TITLE_BLOCK_PRICE"
		/>
		<CommonAbout :img="dataServer.DETAIL_PICTURE" />
		<CommonForm :title="dataServer.TITLE_BLOCK_FORM" />
		<CommonBrand
			:title="dataServer.TITLE_BLOCK_BRANDS"
			:listItems="dataServer.BUNDLE_BRANDS"
		/>
		<CommonReviews :list="dataServer.REVIEWS" />
		<HomeQuestions :list="dataServer.FAQ" />
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = Number(route.params.slug)

const { data } = await useAsyncData('oneService', () =>
	$fetch<any>(
		`https://tot-market.ru/api/service?type=getById&params[id]=${slug}`,
		{
			headers: {
				mode: 'no-cors',
			},
		}
	)
)
const dataServer = computed(() => data.value?.data.result[slug])
useHead({
	title: () => dataServer.value.NAME,
	meta: () => [
		{
			name: 'description',
			content: dataServer.value.IPROPERTY_VALUES.ELEMENT_META_DESCRIPTION,
		},
		{
			name: 'keywords',
			content: dataServer.value.IPROPERTY_VALUES.ELEMENT_META_KEYWORDS,
		},
		{
			name: 'title',
			content: dataServer.value.IPROPERTY_VALUES.ELEMENT_META_TITLE,
		},
	],
})
</script>

<style></style>
