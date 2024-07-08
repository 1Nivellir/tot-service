<template>
	<section class="price">
		<div class="container price__container">
			<h2 class="price__title subtitle">{{ title }}</h2>
			<ul class="list-reset price__list">
				<li class="price__item" v-for="{ NAME, PREVIEW_TEXT } in list">
					<h3 class="price__subtitle">{{ NAME }}</h3>
					<span class="price__count">
						{{ PREVIEW_TEXT }}
					</span>
				</li>
			</ul>
			<button class="btn-reset price__btn">Показать больше услуг</button>
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps<{
	list: any
	title: string
}>()
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
