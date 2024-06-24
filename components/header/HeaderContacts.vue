<template>
	<div class="header__contacts">
		<span class="header__time">Работаем с 09:00 до 21:00</span>
		<a href="tel:74992816783" class="header__phone"
			>+7&nbsp;(499)&nbsp;281-67-83</a
		>
		<a href="tel:74956693559" class="header__phone">+7 (495) 669-35-59</a>
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.header {
	&__time {
		display: block;
		text-align: right;
		color: rgba(52, 52, 52, 0.5);
		font-size: 14px;
		font-weight: 400;
		line-height: 130%;
	}

	&__phone {
		text-decoration: none;
		display: block;
		text-align: right;
		color: var(--c-primary);
		font-size: 24px;
		font-weight: 500;
		line-height: 120%;
	}
}
</style>
