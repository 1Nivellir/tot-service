<template>
	<keep-alive>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</keep-alive>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('services', () =>
	$fetch<any>(
		'https://tot-market.ru/api/service?type=getList&params[pageNum]=1&params[pageSize]=200',
		{
			headers: {
				mode: 'no-cors',
			},
		}
	)
)
const listLinks = computed(() => data.value?.data.result || [])
provide('linksItems', listLinks.value)
</script>
