<template>
	<address class="footer__address footer__block">
		<h2 class="footer__title">Адрес</h2>
		<p class="footer__link footer__descr">
			121170, г. Москва, ул. Поклонная, д. 11, стр. 1, офис 16, метро Парк
			Победы
		</p>
	</address>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__address {
	font-style: normal;

	@media screen and (width > 960px) {
		grid-column: 2/3;
	}
}
.footer__descr {
	max-width: 50%;
}
</style>
