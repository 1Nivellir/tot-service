<template>
	<section class="hero">
		<div class="container hero__container">
			<div class="hero__wrapper">
				<h1 class="hero__title">{{ title }} в Москве и МО</h1>
				<ul class="hero__list">
					<li class="hero__item">Бесплатный выезд и диагностика</li>
					<li class="hero__item">Возможен срочный ремонт</li>
					<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
					<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
				</ul>
			</div>

			<div class="hero__wrapper-img">
				<img src="/img/hero-circle.png" class="hero__img" alt="hero" />
				<img :src="`/img/${img}.png`" class="hero__img-home" alt="hero" />
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps<{
	title: string
	img: string
}>()
</script>

<style lang="scss" scoped>
.hero {
	position: relative;
	background: var(--c-bg);

	@media screen and (width > 960px) {
		height: 504px;
	}
	&__wrapper-img {
		position: relative;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;

		@media screen and (width > 960px) {
			position: absolute;
			top: 0;
			right: 0;
			width: 598px;
			height: 598px;
		}
	}

	&__wrapper {
		position: relative;
		z-index: 1;
		max-width: 60%;
	}
	&__title {
		margin-bottom: 20px;
		color: var(--c-white);
		font-size: clamp(32px, 5.5vw, 54px);
		font-weight: 700;
		line-height: 110%;
	}

	&__container {
		position: relative;
		padding-top: 60px;
		padding-bottom: 86px;

		@media screen and (width > 960px) {
			display: flex;
			justify-content: space-between;
			height: 504px;
		}
	}

	&__img {
		width: 100%;

		@media screen and (width > 960px) {
			height: 504px;
		}

		&-home {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 95%;
			height: 95%;
			object-fit: contain;

			@media screen and (width > 960px) {
				width: 75%;
				height: 75%;
			}
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 30px;
	}

	&__item {
		color: var(--c-white);
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;
		padding-left: 5px;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			display: inline-block;
			width: 4px;
			height: 4px;
			margin-right: 10px;
			background-color: var(--c-white);
			border-radius: 50%;
		}
	}
}
</style>
