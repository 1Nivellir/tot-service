<template>
	<section class="sings">
		<div class="container">
			<h2 class="sings__title subtitle">
				Основные признаки, когда стиральной машине требуется ремонт
			</h2>
			<ul class="list-reset sings__list">
				<li class="sings__item" v-for="(item, index) in items">
					<span class="sings__count">
						{{ getNull(index + 1) }}
					</span>
					<span class="sings__descr">
						{{ item }}
					</span>
				</li>
			</ul>
		</div>
	</section>
</template>

<script lang="ts" setup>
const getNull = (num: number) => (num < 10 ? `0${num}` : num)
const items = [
	'Не включается',
	'Отключается при стирке',
	'Не открывается дверца',
	'Не набирает воду',
	'Не греет воду',
	'Не отжимает',
	'Не сливает воду',
	'Протекает',
]
</script>

<style scoped lang="scss">
.sings {
	padding-top: 30px;
	padding-bottom: 60px;

	&__count {
		text-align: center;
		display: block;
		color: rgb(0, 137, 233);
		font-size: 42px;
		font-weight: 700;
		line-height: 110%;
	}

	&__title {
		color: var(--c-primary);
		margin-bottom: 30px;
	}

	&__descr {
		text-align: center;
		display: block;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 700;
		line-height: 140%;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 20px;
		row-gap: 30px;

		@media screen and (width > 480px) {
			grid-template-columns: repeat(3, 1fr);
		}
		@media screen and (width > 640px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}
}
</style>
