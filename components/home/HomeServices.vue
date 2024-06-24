<template>
	<section class="services">
		<div class="container">
			<h2 class="subtitle services__title">Наши услуги</h2>
			<p class="services__descr">
				Наша сервисная компания оказывает услуги по профессиональному ремонту
				бытовой техники и промышленного оборудования частным лицам и
				организациям в Москве и Московской области.
			</p>
			<ul class="services__list">
				<li
					class="services__item"
					:class="className"
					v-for="{ title, img, className } in menuMobileLinks"
				>
					<img :src="`/svg/${img}.svg`" :alt="title" class="services__img" />
					{{ title }}
				</li>
			</ul>
			<div class="services__wrapper">
				<img
					src="/img/blue-circle.png"
					class="services__img-bottom"
					alt="services"
				/>
				<img
					src="/img/master.png"
					class="services__img-master"
					alt="services"
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.services {
	overflow: hidden;
	padding: 60px 0;
	padding-bottom: 0;

	&__wrapper {
		position: relative;
		width: 100%;
	}
	&__title {
		margin-bottom: 20px;
		color: var(--c-primary);
	}

	&__descr {
		margin-bottom: 30px;
		color: var(--c-secondary);
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;
	}

	&__list {
		margin-bottom: 30px;
		display: grid;
		grid-template-columns: 1fr;
		gap: 10px;

		@media screen and (min-width: 480px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__img {
		width: 36px;

		&-bottom {
			width: 100%;
		}

		&-master {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 70%;
		}
	}

	&__item {
		height: 68px;
		padding: 16px;
		border-radius: 8px;
		display: flex;
		align-items: center;
		gap: 15px;
		background: var(--c-bg);
		color: var(--c-white);
		font-size: 14px;
		font-weight: 500;
		line-height: 140%;
	}
}
.active {
	background: transparent;
	border: 1px solid var(--c-bg);
	color: var(--c-bg);
}
</style>
