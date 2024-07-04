<template>
	<address class="footer__address footer__block">
		<h2 class="footer__title">Адрес</h2>
		<p class="footer__link footer__descr">
			119620, г.Москва, ул.Волынская д.9, пом.IV, Метро Говорово
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
