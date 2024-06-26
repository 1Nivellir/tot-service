<template>
	<div class="footer__block">
		<h2 class="footer__title">Контакты</h2>
		<ul class="footer__list">
			<li class="footer__item">
				<a href="tel:74992816783" class="footer__link">+7 (499) 281-67-83</a>
			</li>
			<li class="footer__item">
				<a href="tel:74956693559" class="footer__link">+7 (495) 669-35-59</a>
			</li>
			<li class="footer__item">
				<a href="mailto:example@test.com" class="footer__link"
					>example@test.com</a
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.footer__block {
	@media screen and (width > 480px) {
		grid-row: 1 / 2;
		grid-column: 2 / 3;
	}

	@media screen and (width > 960px) {
		grid-row: 1 / 2;
		grid-column: 3 / 4;
	}
}
</style>
