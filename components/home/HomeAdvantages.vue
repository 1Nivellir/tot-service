<template>
	<section class="advantages">
		<div class="container advantages__container">
			<h2 class="advantages__title subtitle">
				Преимущества универсального подхода
			</h2>
			<p class="advantages__descr">
				Рекламные газеты пестрят объявлениями «ремонт бытовой техники». На деле
				же часто оказывается, что доморощенные мастер печально разводит руками:
				“нет запчастей” или “ремонту не подлежит”. Нередко за этим скрывается
				недостаток знаний и опыта. В итоге, разочарованные клиенты все равно
				звонят нам, потому что у специалистов «TOT-Service» всегда в достатке
				нужные детали, а также знания и навыки, необходимые для оперативного
				устранения неисправностей.
			</p>
			<ul class="advantages__list">
				<li class="advantages__item">
					<img
						src="/svg/adva-1.svg"
						width="36px"
						class="advantages__icon"
						alt="Иконка"
					/>
					<div class="advantages__content">
						<h2 class="advantages__subtitle">
							Нашим мастерам не знакомо слово НЕТ
						</h2>
						<p class="advantages__subdescr">
							Неприятность может произойти с любым агрегатом. В любом случае, в
							«TOT-Service» вам обязательно помогут!
						</p>
					</div>
				</li>
				<li class="advantages__item">
					<img
						src="/svg/adva-2.svg"
						width="36px"
						class="advantages__icon"
						alt="Иконка"
					/>
					<div class="advantages__content">
						<h2 class="advantages__subtitle">
							Индивидуальный подход к каждому бренду.
						</h2>
						<p class="advantages__subdescr">
							Зная особенности всей техники любых брендом, мы сразу понимаем в
							чём проблема и устраняем её.
						</p>
					</div>
				</li>
				<li class="advantages__item">
					<img
						src="/svg/adva-3.svg"
						width="36px"
						class="advantages__icon"
						alt="Иконка"
					/>
					<div class="advantages__content">
						<h2 class="advantages__subtitle">
							Абсолютно всё — от диагностики до быстрого и качественного ремонта
							ЛЮБОЙ крупной бытовой техники.
						</h2>
						<p class="advantages__subdescr">
							Мастерам «TOT-Service» хорошо знакомы отличительные особенности
							техники Bosch, Ariston, повадки Candy и прочие «фокусы» бытовой
							техники любых марок. Проверенные решения технологии ремонта в
							сумме с оригинальными запчастями позволяют нам успешно
							реализоывать всё на практике.
						</p>
					</div>
				</li>
			</ul>
			<div class="advantages__wrapper">
				<img
					src="/img/hero-circle.png"
					class="advantages__img-bottom"
					alt="Круг"
				/>
				<img
					src="/img/adva-master.png"
					class="advantages__img-2"
					alt="Мастер"
				/>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.advantages {
	padding-bottom: 30px;
	padding-top: 510px;

	@media screen and (width > 960px) {
		padding-top: 200px;
	}

	&__container {
		@media screen and (width > 960px) {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			align-items: start;
			gap: 30px;
			grid-template-rows: repeat(2, auto);
		}

		@media screen and (width > 1200px) {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(2, auto);
		}
	}

	&__wrapper {
		position: relative;
		width: 100%;

		@media screen and (width > 960px) {
			grid-row: 2/3;
		}

		@media screen and (width > 1200px) {
			grid-column: 1/4;
		}
	}

	&__img-2 {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 93%;
	}

	&__img-bottom {
		width: 100%;
	}

	&__title {
		align-self: start;
		margin-bottom: 20px;
		color: var(--c-primary);
		max-width: 90%;

		@media screen and (width > 960px) {
			grid-column: 1/2;
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin-bottom: 30px;

		@media screen and (width > 960px) {
			grid-column: 2/4;
		}

		@media screen and (width > 1200px) {
			grid-column: 4/7;
		}
	}

	&__subtitle {
		color: var(--c-primary);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 700;
		line-height: 140%;
	}

	&__subdescr {
		color: var(--c-primary);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
	}

	&__icon {
		flex-shrink: 0;
		transform: translateY(8px);

		@media screen and (width > 480px) {
			width: 44px;
		}

		@media screen and (width > 640px) {
			width: 60px;
		}
	}

	&__item {
		display: flex;
		gap: 14px;
		align-items: flex-start;
	}

	&__descr {
		margin-bottom: 30px;
		color: var(--c-secondary);
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;

		@media screen and (width > 960px) {
			grid-column: 2/4;
		}

		@media screen and (width > 1200px) {
			grid-column: 2/7;
		}
	}
}
</style>
