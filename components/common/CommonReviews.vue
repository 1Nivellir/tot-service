<template>
	<section class="reviews">
		<div class="container">
			<h2 class="reviews__title subtitle">Отзывы наших клиентов</h2>
			<ClientOnly>
				<Swiper
					navigation
					:modules="[SwiperNavigation]"
					:space-between="50"
					:slides-per-view="$viewport.isLessThan('tabletMedium') ? 1 : 2"
					ref="swiperRef"
					class="mySwiper"
				>
					<SwiperSlide v-for="{ NAME, PREVIEW_TEXT } in list">
						<div class="reviews__wrapper">
							<h3 class="reviews__subtitle">
								{{ NAME }}
							</h3>
							<p class="reviews__descr">
								{{ PREVIEW_TEXT }}
							</p>
						</div>
					</SwiperSlide>
					<!-- 
				<button
					@click="swiperRef.swiper.slidePrev()"
					class="swiper-button-prev"
					ref="prevEl"
				></button>
				<button class="swiper-button-next" ref="nextEl"></button> -->
				</Swiper>
			</ClientOnly>
		</div>
	</section>
</template>

<script lang="ts" setup>
import 'swiper/css'

defineProps<{
	list: any
}>()

const prevEl = ref<any>(null)
const nextEl = ref<any>(null)
// Создаем экземпляр Swiper
const swiperRef = ref<any>(null)
onMounted(() => {
	// Убедитесь, что ссылки на элементы обновлены после монтирования компонента
	prevEl.value = document.querySelector('.swiper-button-prev')
	nextEl.value = document.querySelector('.swiper-button-next')
})
</script>

<style scoped lang="scss">
.reviews {
	overflow: hidden;
	padding-top: 60px;
	padding-bottom: 60px;

	&__wrapper {
		border: 1px solid rgb(0, 137, 233);
		border-radius: 10px;
		padding: 20px;
	}

	&__title {
		color: var(--c-primary);
		margin-bottom: 30px;
	}

	&__subtitle {
		margin-bottom: 10px;
		color: rgb(0, 137, 233);
		font-size: 16px;
		font-weight: 700;
		line-height: 140%;
		text-align: center;
	}

	&__descr {
		color: rgb(52, 52, 52);
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		text-align: center;
	}
}
</style>
<style lang="scss">
.swiper {
	overflow: visible;
	padding-bottom: 60px;

	@media screen and (width > 480px) {
		padding: 0 40px;
		overflow: hidden;
	}
}
.swiper-button-prev::after {
	color: transparent;
	background: url('/svg/swiperLeft.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}
.swiper-button-prev {
	left: 40%;
	top: 90%;
	margin-right: 20px;

	@media screen and (width > 480px) {
		left: 0;
		top: 50%;
	}
}

.swiper-button-next {
	right: 40%;
	top: 90%;

	@media screen and (width > 480px) {
		right: 0;
		top: 50%;
	}
}
.swiper-button-next::after {
	color: transparent;
	background: url('/svg/swiperRight.svg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
