<template>
	<section class="about">
		<div class="container about__container">
			<h2 class="subtitle about__title">
				Ремонт стиральных машин в Москве и Области компанией «TOT-Service»
			</h2>
			<div class="about__content">
				<p class="about__descr">
					Компания «TOT-Service» предлагает жителям Москвы и области ремонт
					стиральных машин на дому по низким ценам. Ремонт стиральных машин на
					дому выполняют квалифицированные мастера, имеющие многолетний опыт по
					ремонту стиральных машин, с гарантией качества и долговечности работы
					стиральной машины. Наличие современного специализированного
					оборудования позволяет нашим мастерам выполнять ремонт стиральных
					машин на дому. Быстро, качественно, удобно, не дорого! Если в вашем
					доме случилась неприятность, и у вас сломалась стиральная машина —
					обращайтесь к нам в компанию, и наши мастера моментально отреагируют
					на вашу заявку. Приедут в назначенное время, произведут диагностику, в
					короткий срок устранят неисправность стиральной машины, установят
					качественные и оригинальные запчасти именно для вашей модели
					стиральной машины. По завершении работ мастер предоставит гарантию на
					ремонт стиральной машины до 12 месяцев. Звоните нам, и наши мастера
					качественно и в короткий срок отремонтируют вашу стиральную машину!
				</p>
				<div class="about__wrapper-img">
					<img src="/img/hero-circle.png" class="about__img" alt="hero" />
					<img :src="`/img/washing.png`" class="about__img-home" alt="hero" />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
	padding-top: 30px;
	padding-bottom: 60px;

	@media screen and (width > 960px) {
		min-height: 632px;
	}

	&__container {
		position: relative;
	}
	&__title {
		color: var(--c-primary);
		margin-bottom: 30px;
	}

	&__descr {
		max-width: 560px;
		color: rgb(0, 0, 0);
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
		margin-bottom: 30px;
	}
	&__wrapper-img {
		position: relative;
		width: 100%;
		flex-shrink: 0;

		@media screen and (width > 960px) {
			position: absolute;
			top: 0;
			right: -20%;
		}
	}

	&__content {
		@media screen and (width > 960px) {
			display: flex;
		}
	}
	&__img {
		width: 100%;

		&-home {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 75%;
			height: 75%;
			object-fit: contain;

			@media screen and (width > 960px) {
				width: 100%;
				height: 85%;
				transform: translate(-58%, -50%);
			}
		}
	}
}
</style>
