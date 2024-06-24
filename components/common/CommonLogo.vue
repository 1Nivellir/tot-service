<template>
	<NuxtLink to="/" class="logo">
		<img src="/logo.png" class="logo" alt="logo" densities="x1 x2" />
	</NuxtLink>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.logo {
	width: 80px;
	height: 80px;
	text-decoration: none;
	margin-right: auto;
	flex-shrink: 0;

	@media screen and (width > 480px) {
		margin-right: 10px;
	}

	@media screen and (width > 640px) {
		margin-right: 20px;
		width: 100px;
		height: 100px;
	}

	@media screen and (width > 960px) {
		width: 124px;
		height: 124px;
	}
}
</style>
