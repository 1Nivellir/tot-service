<template>
	<HeaderMobile v-if="$viewport.isLessThan('tabletMedium')" />
	<HeaderDesktop v-else />
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#app'
const { $viewport } = useNuxtApp()
</script>

<style></style>
