<template>
	<section class="services">
		<div class="container services__container">
			<h2 class="subtitle services__title">Наши услуги</h2>
			<p class="services__descr">
				Наша сервисная компания оказывает услуги по профессиональному ремонту
				бытовой техники и промышленного оборудования частным лицам и
				организациям в Москве и Московской области.
			</p>
			<ul class="services__list">
				<li class="services__item" v-for="{ NAME, CODE, ID } in itemsLinks">
					<NuxtLink :to="`/services/${ID}`" class="services__link" />
					<CommonIcon :iconName="CODE" />
					{{ NAME }}
				</li>
			</ul>
			<div class="services__wrapper">
				<img
					src="/img/blue-circle.png"
					class="services__img-bottom"
					alt="services"
				/>
				<img
					src="/img/master.png"
					class="services__img-master"
					alt="services"
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const itemsLinks = inject('linksItems')
</script>

<style lang="scss" scoped>
.services {
	overflow: hidden;
	padding: 60px 0;
	padding-bottom: 0;

	&__container {
		position: relative;
		@media screen and (width > 960px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(12, auto);
			align-items: start;
			column-gap: 20px;
		}
		@media screen and (width > 1200px) {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	&__wrapper {
		position: relative;
		width: 100%;

		@media screen and (width > 1200px) {
			position: absolute;
			bottom: -134px;
			left: 0;
			z-index: -1;
			width: 598px;
			height: 598px;
		}
	}
	&__title {
		align-self: start;
		grid-column: 1/2;
		grid-row: 1/2;
		margin-bottom: 20px;
		color: var(--c-primary);

		@media screen and (width > 1200px) {
			grid-column: 1/3;
		}
	}

	&__descr {
		grid-column: 1/2;
		grid-row: 2/3;
		margin-bottom: 30px;
		color: var(--c-secondary);
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;

		@media screen and (width > 1200px) {
			grid-column: 3/7;
			grid-row: 1/2;
		}
	}

	&__list {
		grid-row: 1/11;
		margin-bottom: 30px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;

		@media screen and (min-width: 480px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 640px) {
			gap: 20px;
		}
		@media screen and (min-width: 1200px) {
			grid-template-columns: repeat(3, 1fr);
			grid-row: 2/13;
			grid-column: 3/7;
		}
	}

	&__img {
		width: 36px;

		&-bottom {
			width: 100%;
		}

		&-master {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 70%;

			@media screen and (width > 1200px) {
				transform: translate(-50%, -63%);
				width: 53%;
			}
		}
	}

	&__item {
		position: relative;
		height: 68px;
		padding: 16px;
		border-radius: 8px;
		display: flex;
		border: 1px solid transparent;
		align-items: center;
		gap: 15px;
		background: var(--c-bg);
		color: var(--c-white);
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
		transition: background 0.3s ease-in-out, color 0.3s ease-in-out,
			border 0.3s ease-in-out;

		&:hover {
			background: var(--c-white);
			border: 1px solid var(--c-bg);
			color: var(--c-bg);
		}

		@media screen and (width > 960px) {
			height: auto;
		}
		@media screen and (width > 1200px) {
			height: 86px;
		}
	}

	&__link {
		text-decoration: none;
		color: inherit;
		position: absolute;
		top: 0;
		border-radius: 8px;
		outline: none;
		left: 0;
		border: 1px solid transparent;
		width: 100%;
		height: 100%;
		z-index: 1;
		transition: border 0.3s ease-in-out;

		&:hover + .services__item {
			background: var(--c-white);
			border: 1px solid var(--c-bg);
			color: var(--c-bg);
		}

		&:focus-visible {
			border: 1px solid var(--c-white);
		}
	}
}
</style>
