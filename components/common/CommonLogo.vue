<template>
	<NuxtLink to="/" class="logo">
		<NuxtImg src="/logo.png" class="logo" alt="logo" densities="x1 x2" />
	</NuxtLink>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.logo {
	width: 80px;
	height: 80px;
	text-decoration: none;

	@media screen and (width > 640px) {
		width: 100px;
		height: 100px;
	}

	@media screen and (width > 960px) {
		width: 124px;
		height: 124px;
	}
}
</style>
