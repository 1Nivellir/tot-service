<template>
	<section class="hero">
		<div class="container hero__container">
			<h1 class="hero__title">{{ title }} в Москве и МО</h1>
			<ul class="hero__list">
				<li class="hero__item">Бесплатный выезд и диагностика</li>
				<li class="hero__item">Возможен срочный ремонт</li>
				<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
				<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
			</ul>
			<div class="hero__wrapper-img">
				<NuxtImg src="/img/hero-circle.png" class="hero__img" alt="hero" />
				<NuxtImg :src="`/img/${img}.png`" class="hero__img-home" alt="hero" />
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
	background: var(--c-bg);
	&__wrapper-img {
		position: relative;
		width: 100%;
	}

	&__title {
		margin-bottom: 20px;
		color: var(--c-white);
		font-size: clamp(32px, 5vw, 54px); // 32px;
		font-weight: 700;
		line-height: 110%;
	}

	&__container {
		position: relative;
		padding-top: 60px;
		padding-bottom: 86px;
	}

	&__img {
		width: 100%;

		&-home {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 75%;
			height: 75%;
			object-fit: contain;
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 30px;
		color: var(--c-white);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}

	&__item {
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
