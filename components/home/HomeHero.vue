<template>
	<section class="hero">
		<div class="container hero__container">
			<Swiper :slides-per-view="1" @swiper="initSwiper" space-between="30px">
				<SwiperSlide class="hero__wrapper">
					<div class="hero__wrapper-slide">
						<h1 class="hero__title">Ремонт стиральных машин в Москве и МО!</h1>
						<ul class="hero__list">
							<li class="hero__item">Бесплатный выезд и диагностика</li>
							<li class="hero__item">Возможен срочный ремонт</li>
							<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
							<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
						</ul>
						<button class="btn-reset hero__btn">Оставить заявку</button>
					</div>
					<div class="hero__wrapper-img">
						<img src="/img/hero-circle.png" class="hero__img" alt="hero" />
						<img src="/img/hero-home.png" class="hero__img-home" alt="hero" />
					</div>
				</SwiperSlide>
				<SwiperSlide v-for="{ title, img } in menuLinks" class="hero__wrapper">
					<div class="hero__wrapper-slide">
						<h1 class="hero__title">{{ title }} в Москве и МО</h1>
						<ul class="hero__list">
							<li class="hero__item">Бесплатный выезд и диагностика</li>
							<li class="hero__item">Возможен срочный ремонт</li>
							<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
							<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
						</ul>
						<button class="btn-reset hero__btn">Оставить заявку</button>
					</div>
					<div class="hero__wrapper-img">
						<img src="/img/hero-circle.png" class="hero__img" alt="hero" />
						<img :src="`/img/${img}.png`" class="hero__img-home" alt="hero" />
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
// const { data, error } = await useServerFetch('1/iblock&IBLOCK_ID=9')

// console.log(data.value)
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
</script>

<style lang="scss" scoped>
.hero {
	background: var(--c-bg);

	&__container {
		position: relative;
		padding-top: 60px;
		padding-bottom: 86px;

		@media screen and (width > 960px) {
			padding-top: 0;
			padding-bottom: 0;
		}
	}

	&__wrapper-slide {
		@media screen and (width > 960px) {
			max-width: 50%;
			padding-top: 100px;
			padding-bottom: 86px;
		}

		@media screen and (width > 1200px) {
			max-width: 70%;
		}
	}
	&__wrapper {
		@media screen and (width > 960px) {
			display: flex;
			height: 656px;
		}
		@media screen and (width > 1200px) {
			display: flex;
			height: 547px;
		}
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

		@media screen and (width > 960px) {
			margin-bottom: 0;
		}
	}

	&__wrapper-img {
		position: relative;
		width: 100%;

		@media screen and (width > 960px) {
			z-index: -1;
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			height: 100%;
			width: 598px;
			overflow: visible;
		}
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

			@media screen and (width > 960px) {
				width: 100%;
				height: 100%;
				transform: translate(-50%, -39%);
			}
		}
	}
}

.wrapper__pagination {
	z-index: 10;
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
