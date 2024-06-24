<template>
	<section class="hero">
		<div class="container hero__container">
			<Swiper :slides-per-view="1" @swiper="initSwiper">
				<SwiperSlide>
					<h1 class="hero__title">Ремонт стиральных машин в Москве и МО!</h1>
					<ul class="hero__list">
						<li class="hero__item">Бесплатный выезд и диагностика</li>
						<li class="hero__item">Возможен срочный ремонт</li>
						<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
						<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
					</ul>
					<button class="btn-reset hero__btn">Оставить заявку</button>
					<div class="hero__wrapper-img">
						<NuxtImg src="/img/hero-circle.png" class="hero__img" alt="hero" />
						<NuxtImg
							src="/img/hero-home.png"
							class="hero__img-home"
							alt="hero"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide v-for="{ title, img } in menuLinks">
					<h1 class="hero__title">{{ title }} в Москве и МО</h1>
					<ul class="hero__list">
						<li class="hero__item">Бесплатный выезд и диагностика</li>
						<li class="hero__item">Возможен срочный ремонт</li>
						<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
						<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
					</ul>
					<button class="btn-reset hero__btn">Оставить заявку</button>
					<div class="hero__wrapper-img">
						<NuxtImg src="/img/hero-circle.png" class="hero__img" alt="hero" />
						<NuxtImg
							:src="`/img/${img}.png`"
							class="hero__img-home"
							alt="hero"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
			<div class="wrapper__pagination">
				<span
					v-for="(n, i) in menuMobileLinks.length + 1"
					class="swiper__pagination"
					:class="{ active: currentSlide === i }"
				></span>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const swiperInstance = ref<any>({})
const currentSlide = ref(0)
const menuLinks = [...menuMobileLinks]
menuLinks.splice(0, 1)
const initSwiper = (instance: any) => {
	swiperInstance.value = instance
	swiperInstance.value.on('slideChangeTransitionEnd', () => {
		currentSlide.value = swiperInstance.value.activeIndex
	})
}

// const response = await useCustomFetch('1/iblock.Element.list.json?IBLOCK_ID=9')

// await console.log(response)
</script>

<style lang="scss" scoped>
.hero {
	background: var(--c-bg);

	&__container {
		position: relative;
		padding-top: 60px;
		padding-bottom: 86px;
	}

	&__btn {
		margin-bottom: 30px;
		border-radius: 5px;
		background: rgb(255, 217, 10);
		padding: 16px 24px;
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
		color: var(--c-primary);
	}

	&__wrapper-img {
		position: relative;
		width: 100%;
	}
	&__title {
		margin-bottom: 20px;
		color: var(--c-white);
		font-size: 32px; // 32px;
		font-weight: 700;
		line-height: 110%;

		@media (width > 480px) {
			font-size: 46px;
		}

		@media (width > 640px) {
			font-size: 54px;
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 30px;
	}

	&__item {
		display: flex;
		align-items: center;
		color: var(--c-white);
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;

		@media screen and (width > 480px) {
			font-size: 16px;
		}

		@media screen and (width > 640px) {
			font-size: 18px;
		}

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
}

.wrapper__pagination {
	display: flex;
	justify-content: center;
	width: 100%;
	position: absolute;
	bottom: 44px;
	left: 50%;
	transform: translateX(-50%);
}

.swiper__pagination {
	position: relative;
	display: inline-block;
	width: 10px;
	height: 10px;
	background-color: var(--c-white);
	border-radius: 50%;
	margin: 0 5px;

	&.active::before {
		opacity: 1;
	}

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 16px;
		height: 16px;
		opacity: 0;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
	}
}
</style>
