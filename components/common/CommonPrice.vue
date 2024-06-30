<template>
	<section class="price">
		<div class="container price__container">
			<h2 class="price__title subtitle">Цены на ремонт стиральных машин</h2>
			<ul class="list-reset price__list">
				<li class="price__item" v-for="{ title, descr } in items">
					<h3 class="price__subtitle">{{ title }}</h3>
					<span class="price__count">
						{{ descr }}
					</span>
				</li>
			</ul>
			<button class="btn-reset price__btn">Показать больше услуг</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
const items = [
	{
		title: 'Выезд и диагностика стиральной машины за пределами МКАД',
		descr: '40 руб. за 1 км.',
	},
	{
		title: 'Выезд и диагностика стиральной машины в пределах МКАД',
		descr: '500 руб.',
	},
	{
		title: 'Демонтаж и монтаж встроенной стиральной машины',
		descr: '600 руб.',
	},
	{
		title: 'Замена амортизатора в стиральной машине',
		descr: '950 руб.',
	},
	{
		title: 'Замена бака с барабаном в стиральной машине',
		descr: '3 000 руб.',
	},
	{
		title: 'Замена барабана в стиральной машине',
		descr: '3 500 руб.',
	},
	{
		title: 'Замена бункера для порошка в стиральной машине',
		descr: '1 400 руб.',
	},
	{
		title: 'Замена верхнего противовеса в стиральной машине',
		descr: '800 руб.',
	},
]
</script>

<style scoped lang="scss">
.price {
	background: var(--c-bg);
	padding-top: 60px;
	padding-bottom: 60px;

	&__container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	&__title {
		color: var(--c-white);
		margin-bottom: 30px;
	}

	&__subtitle {
		color: var(--c-white);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
	}

	&__count {
		display: block;
		color: var(--c-white);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
		text-align: end;
		max-width: 150px;
		width: 100%;
	}

	&__btn {
		max-width: max-content;
		color: var(--c-primary);
		padding: 8px 14px;
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
		border-radius: 5px;
		background: rgb(255, 217, 10);
	}

	&__list {
		width: 100%;
		margin-bottom: 30px;
	}

	&__item {
		padding: 12px 10px;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		column-gap: 30px;
		display: flex;
		justify-content: space-between;

		&:last-child {
			border-bottom: 1px solid rgba(255, 255, 255, 0.5);
		}
	}
}
</style>
