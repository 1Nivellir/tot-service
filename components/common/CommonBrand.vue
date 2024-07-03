<template>
	<section class="brand">
		<div class="container">
			<h2 class="brand__title subtitle">
				Ремонтируем варочные панели всех известных брендов
			</h2>
			<Swiper
				v-if="$viewport.isLessThan('tabletMedium')"
				:modules="[SwiperPagination]"
				:pagination="{ clickable: true }"
				:slides-per-view="1"
				:space-between="50"
				@swiper="initSwiper"
				:loop="true"
			>
				<SwiperSlide
					v-for="(chunk, index) in chunkedItems"
					:key="index"
					class="brand__wrapper"
				>
					<div class="brand__wrapper">
						<ul class="brand__list list-reset">
							<li class="brand__item" v-for="item in chunk">
								<NuxtLink class="brand__link" to="/">{{ item }}</NuxtLink>
							</li>
						</ul>
					</div>
				</SwiperSlide>
			</Swiper>
			<ul class="brand__list list-reset" v-else>
				<li class="brand__item" v-for="item in items">
					<NuxtLink class="brand__link" to="/">{{ item }}</NuxtLink>
				</li>
			</ul>
		</div>
	</section>
</template>

<script lang="ts" setup>
import 'swiper/css/pagination'
const initSwiper = (instance: any) => {
	swiperInstance.value = instance
	swiperInstance.value.on('slideChangeTransitionEnd', () => {
		currentSlide.value = swiperInstance.value.activeIndex
	})
}

const chunkArray = (array: any, chunkSize: any) => {
	return array.reduce((resultArray: any, item: any, index: any) => {
		const chunkIndex = Math.floor(index / chunkSize)
		if (!resultArray[chunkIndex]) {
			resultArray[chunkIndex] = []
		}
		resultArray[chunkIndex].push(item)
		return resultArray
	}, [])
}
const items = [
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
	'BOSCH',
]
const chunkedItems = chunkArray(items, 10)

const swiperInstance = ref<any>({})
const currentSlide = ref(0)
</script>

<style lang="scss" scoped>
.brand {
	overflow: hidden;
	padding-top: 40px;
	padding-bottom: 20px;

	&__title {
		color: var(--c-primary);
		margin-bottom: 30px;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;

		@media screen and (width > 960px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	&__item {
		padding: 8px 10px;
		border: 2px solid rgb(0, 137, 233);
	}

	&__link {
		display: block;
		text-align: center;
		color: rgb(0, 137, 233);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 700;
		line-height: 140%;
		text-decoration: none;
	}
}
</style>
