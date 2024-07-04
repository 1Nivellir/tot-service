<template>
	<section class="about">
		<div class="container about__container">
			<h2 class="about__title subtitle">Почему мы?</h2>
			<p class="about__descr">
				Потому что с нами удобно. Специалистам «TOT-Service» под силу ремонт
				бытовой техники любой сложности. Они с удовольствием приедут по вашей
				заявке на дом и в офис. Простая поломка может быть устранена на месте,
				т.к. основные запчасти у мастеров всегда при себе.
			</p>
			<ul class="about__list">
				<li class="about__item">
					<div class="about__img-wrapper">
						<img
							src="/svg/bg-auto.svg"
							class="about__img-bg"
							alt="Автомобиль"
						/>
					</div>

					<div class="about__content">
						<h3 class="about__subtitle">
							Вам не придется везти технику в сервисный центр без крайней
							необходимости.
						</h3>
						<p class="about__subdescr">
							Опыт работы от 3-х лет с бытовой техникой разных производителей
							позволяет нашим специалистам точно диагностировать причину
							неисправности и устранить её в кратчайшие сроки.
						</p>
					</div>
				</li>
				<li class="about__item">
					<div class="about__img-wrapper">
						<img src="/svg/bg-clock.svg" class="about__img-bg" alt="Часы" />
					</div>

					<div class="about__content">
						<h3 class="about__subtitle">С нами вы сэкономите время.</h3>
						<p class="about__subdescr">
							Мастера «TOT-Service» используют в ремонте бытовой техники только
							оригинальные запчасти. По окончании работ специалист выписывает
							квитанцию с указанием полного перечня запчастей и гарантийного
							срока каждой из них.
						</p>
					</div>
				</li>
				<li class="about__item">
					<div class="about__img-wrapper">
						<img src="/svg/bg-star.svg" class="about__img-bg" alt="Звезда" />
					</div>

					<div class="about__content">
						<h3 class="about__subtitle">
							Вы можете быть уверены в качестве и надёжности ремонта, а также
							долговечности вашей бытовой техники.
						</h3>
						<p class="about__subdescr">
							Мы делаем свою работу не на скорость, а на результат. После нашего
							вмешательства, поломка вашей техники будет устранена и не
							проявится в будущем.
						</p>
					</div>
				</li>
			</ul>
			<div class="about__wrapper">
				<img src="/img/hero-circle.png" class="about__img-bottom" alt="Круг" />
				<img src="/img/about-bg.png" class="about__img-2" alt="Мастер" />
			</div>
			<div class="about__block">
				<div class="about__content-2">
					<img
						src="/img/about-bg-1.png"
						width="128px"
						height="128px"
						alt="Картинка 1"
					/>
					<h3 class="about__subtitle-2">Подключение бытовой техники</h3>
					<NuxtLink to="/" class="about__link">Смотреть инструкцию</NuxtLink>
				</div>
				<div class="about__content-2">
					<img
						src="/img/about-bg-2.png"
						width="128px"
						height="128px"
						alt="Картинка 2"
					/>
					<h3 class="about__subtitle-2">Интернет-магазин запчастей</h3>
					<NuxtLink to="/" class="about__link">Перейти в магазин</NuxtLink>
				</div>
				<div class="about__content-2">
					<img
						src="/img/about-bg-3.png"
						width="128px"
						height="128px"
						alt="Картинка 3"
					/>
					<h3 class="about__subtitle-2">Статьи и рекомендации</h3>
					<NuxtLink to="/" class="about__link">Читать статьи</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.about {
	position: relative;
	padding-top: 60px;
	padding-bottom: 352px;
	background: var(--c-bg);

	@media screen and (width > 960px) {
		padding-bottom: 140px;
	}

	&__container {
		@media screen and (width > 960px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: start;
			gap: 20px;
			grid-template-rows: repeat(3, auto);
		}
		@media screen and (width > 1200px) {
			grid-template-columns: repeat(6, 1fr);
			grid-template-rows: repeat(2, auto);
		}
	}
	&__content-2 {
		display: flex;
		align-items: center;
		flex-direction: column;
		row-gap: 14px;
	}

	&__subtitle-2 {
		flex-shrink: 0;
		align-items: flex-start;
		color: rgb(0, 137, 233);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 700;
		line-height: 140%;
		text-align: center;
	}

	&__link {
		text-decoration: none;
		font-size: 16px;
		width: 100%;
		max-width: 280px;
		text-align: center;
		padding: 16px 0;
		font-weight: 500;
		line-height: 140%;
		color: var(--c-primary);
		border: 1px solid rgb(0, 137, 233);
		border-radius: 5px;
	}

	&__block {
		max-width: 460px;
		display: flex;
		flex-direction: column;
		row-gap: 30px;
		padding: 30px 28px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.14);
		position: absolute;
		border-radius: 10px;
		bottom: 0;
		transform: translate(-50%, 57%);
		left: 50%;
		width: 95%;
		background: var(--c-white);
		min-height: 798px;

		@media screen and (width > 960px) {
			flex-direction: row;
			max-width: 1160px;
			align-items: center;
			justify-content: space-around;
			min-height: 306px;
		}
	}

	&__wrapper {
		position: relative;
		width: 100%;

		@media screen and (width > 1200px) {
			grid-column: 4/7;
		}
	}
	&__img-bottom {
		width: 100%;
	}

	&__img-2 {
		position: absolute;
		width: 90%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	&__title {
		align-self: start;
		grid-column: 1/2;
		grid-row: 1/2;
		margin-bottom: 20px;
		color: var(--c-white);

		@media screen and (width > 1200px) {
			grid-column: 1/3;
		}
	}

	&__item {
		display: flex;
		gap: 12px;
	}

	&__img-wrapper {
		flex-shrink: 0;
	}

	&__img-bg {
		transform: translateY(8px);
		width: 36px;

		@media screen and (width > 480px) {
			width: 44px;
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		row-gap: 30px;

		@media screen and (width > 960px) {
			grid-row: 1/4;
		}
		@media screen and (width > 1200px) {
			grid-row: 2/4;
			grid-column: 1/4;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		row-gap: 6px;
	}

	&__descr {
		margin-bottom: 30px;
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;
		color: var(--c-white-secondary);

		@media screen and (width > 960px) {
			grid-row: 2/3;
			grid-column: 1/2;
		}

		@media screen and (width > 1200px) {
			grid-row: 1 / 2;
			grid-column: 3 / 7;
		}
	}

	&__subtitle {
		color: var(--c-white);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 700;
		line-height: 140%;
	}

	&__subdescr {
		color: var(--c-white-secondary);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
	}
}
</style>
