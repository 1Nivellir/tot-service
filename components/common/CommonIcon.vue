<script lang="ts" setup>
const props = defineProps<{
	iconName: string
	fill?: string
	width?: string
	height?: string
	bcg?: string
}>()

const iconComponent = defineAsyncComponent(
	() => import(`~/components/icon/IconI${props.iconName}.vue`)
)
</script>

<template>
	<component
		:is="iconComponent"
		:fill="fill"
		:width="width"
		:height="height"
		:bcg="bcg"
	/>
</template>

<style></style>
