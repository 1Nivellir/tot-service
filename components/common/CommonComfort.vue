<template>
	<section class="comfort">
		<div class="container">
			<h2 class="comfort__title subtitle">Нам важен ваш комфорт</h2>
			<ul class="comfort__list">
				<li class="comfort__item" v-for="{ title, descr } in items">
					<img src="/svg/adva-1.svg" alt="" class="comfort__icon" />
					<h3 class="comfort__subtitle">{{ title }}</h3>
					<p class="comfort__descr">
						{{ descr }}
					</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<script lang="ts" setup>
const items = [
	{
		title: 'Выезд в день обращения',
		descr:
			'Мастер выезжает сразу после получения заявки или в удобное для вас время',
	},
	{
		title: 'Ремонт любой сложности',
		descr:
			'Каждый наш мастер имеет опыт работы более 3-х лет с бытовой техникой разных производителей',
	},
	{
		title: 'Скидка на ремонт',
		descr:
			'Мы предоставляем скидку 20% студентам, пенсионерам, инвалидам и участникам ВОВ',
	},
	{
		title: 'Гарантия 12 месяцев',
		descr:
			'Гарантия на все виды работ вне зависимости от сложности и длительности устранения поломки',
	},
]
</script>

<style scoped lang="scss">
.comfort {
	overflow: visible;
	padding-top: 403px;
	padding-bottom: 30px;

	@media screen and (width > 480px) {
		padding-top: 384px;
	}
	@media screen and (width > 640px) {
		padding-top: 329px;
	}
	@media screen and (width > 960px) {
		padding-top: 200px;
	}

	&__title {
		margin-bottom: 30px;
		color: var(--c-primary);
	}

	&__descr {
		color: var(--c-primary);
		text-align: center;
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
	}

	&__icon {
		justify-self: center;
		margin-bottom: 20px;
		width: 60px;
		height: 60px;
	}

	&__item {
		justify-self: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 260px;
	}

	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr;
		row-gap: 30px;

		@media screen and (width > 480px) {
			grid-template-columns: repeat(2, 1fr);
			column-gap: 20px;
		}

		@media screen and (width > 1200px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	&__subtitle {
		margin-bottom: 6px;
		color: rgb(0, 137, 233);
		font-size: 16px;
		font-weight: 700;
		line-height: 140%;
	}
}
</style>
