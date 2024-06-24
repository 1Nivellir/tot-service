<template>
	<nav class="header__nav">
		<ul class="header__list">
			<li class="header__item header__item-active">
				<NuxtLink class="header__nav-link">Наши услуги</NuxtLink>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/price">Цены на ремонт</NuxtLink>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/questions"
					>Вопросы и ответы</NuxtLink
				>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/contacts">Контакты</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.header {
	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
	}

	&__item {
		border-left: 1px solid rgba(52, 52, 52, 0.1);
		border-right: 1px solid rgba(52, 52, 52, 0.1);
		padding: 5px 19px;

		&-active {
			display: flex;
			align-items: center;
			border-left: 1px solid rgb(255, 217, 10);
			border-right: 1px solid rgb(255, 217, 10);

			&::after {
				content: '';
				background-image: url('/svg/black-arrow.svg');
				background-repeat: no-repeat;
				background-size: contain;
				background-position: center;
				width: 6px;
				height: 6px;
				margin-left: 4px;
			}
		}
	}

	&__nav-link {
		text-decoration: none;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}
}
</style>
