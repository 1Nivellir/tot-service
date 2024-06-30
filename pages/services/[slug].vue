<template>
	<div>
		<CommonHero :title="getTitle(slug.toString())" :img="slug.toString()" />
		<CommonComfort />
		<CommonSings />
		<CommonPrice />
		<CommonAbout />
	</div>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug

const getTitle = (slug: string) => {
	const res = menuMobileLinks.find((item) => item.link === slug)

	return res ? res.title : ''
}
useHead({
	title: () => getTitle(slug.toString()),
})
</script>

<style></style>
