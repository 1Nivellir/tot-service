<template>
	<footer class="footer">
		<FooterForm v-if="isShowForm" />
		<div class="container footer__container">
			<FooterInfo />
			<FooterAddress />
			<FooterContacts />
			<FooterSocial />
			<NuxtLink to="/" class="footer__link"
				>Политика конфиденциальности</NuxtLink
			>
			<div class="footer__preblock">
				<h2 class="footer__link">ООО "ТОТ-Сервис"</h2>
				<p class="footer__link">ИНН 7730668957</p>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
const isShowForm = ref(false)
const route = useRoute()
onMounted(() => {
	if (route.path === '/') {
		isShowForm.value = false
	} else {
		isShowForm.value = true
	}
})
watch(
	() => route.path,
	(newVal) => {
		if (newVal === '/') {
			isShowForm.value = false
		} else {
			isShowForm.value = true
		}
	}
)
</script>

<style lang="scss">
.footer {
	padding: 30px 0;
	background: var(--c-bg);

	&__container {
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 30px;

		@media screen and (width > 480px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 38px;
		}

		@media screen and (width > 960px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	&__preblock {
		display: flex;
		flex-direction: column;
		gap: 8px;

		@media screen and (width > 960px) {
			grid-column: 2/4;
		}
	}

	&__block {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 8px;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__link {
		cursor: pointer;
		color: var(--c-white-secondary);
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
		text-decoration: none;
	}

	&__title {
		color: var(--c-white);
		font-size: 14px;
		font-weight: 700;
		line-height: 140%;
	}
}
</style>
