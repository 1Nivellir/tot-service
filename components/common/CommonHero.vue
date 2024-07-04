<template>
	<section class="hero">
		<div class="container hero__container">
			<div class="hero__wrapper">
				<h1 class="hero__title">{{ title }} в Москве и МО</h1>
				<ul class="hero__list">
					<li class="hero__item">Бесплатный выезд и диагностика</li>
					<li class="hero__item">Возможен срочный ремонт</li>
					<li class="hero__item">Гарантия на ремонт 12 месяцев</li>
					<li class="hero__item">Скидка 20% студентам и пенсионерам</li>
				</ul>
			</div>

			<div class="hero__wrapper-img">
				<img src="/img/hero-circle.png" class="hero__img" alt="hero" />
				<img :src="`/img/${img}.png`" class="hero__img-home" alt="hero" />
			</div>
			<div class="hero__form-wrapper">
				<div class="hero__success" v-if="success">
					<h2 class="hero__success-title subtitle">
						Ваша заявка принята. Наш специалист свяжется с вами в течение 15
						минут.
					</h2>
				</div>
				<div class="hero__legend" v-if="!success">
					<img src="/svg/washing.svg" alt="" class="hero__legend-img" />
					<div class="hero__form-content">
						<h2 class="hero__legend-title">Оставьте заявку на ремонт</h2>
						<span class="hero__legend-descr">
							И наш специалист свяжется с вами в течение 15 минут</span
						>
					</div>
				</div>
				<form class="hero__form" @submit.prevent="submit" v-if="!success">
					<input
						type="text"
						placeholder="Ваше имя"
						name="name"
						v-model="formValues.name"
						class="hero__input"
					/>
					<PrimeInputMask
						id="basic"
						class="hero__input"
						v-model="formValues.phone"
						mask="+7 (999) 999-99-99"
						placeholder="+7 (999) 999-99-99"
					/>
					<label class="hero__label">
						<input
							type="checkbox"
							class="hero__checkbox"
							name="policy"
							v-model="formValues.policy"
						/>
						<span class="hero__policy">
							Я соглашаюсь с
							<a href="#" class="hero__link"
								>политикой конфиденциальности</a
							></span
						>
					</label>
					<button class="btn-reset hero__btn" type="submit">
						Отправить заявку
						<span></span>
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
const success = ref(false)
const loading = ref('none')
interface FormValues {
	name: string
	phone: string
	policy: boolean
}
const formValues = ref<FormValues>({
	name: '',
	phone: '',
	policy: false,
})

const mail = useMail()
const submit = async () => {
	if (!formValues.value.policy) {
		alert('Вы не согласились с политикой конфиденциальности')
		return
	} else {
		try {
			loading.value = 'block'
			await mail.send({
				html: `<p>Вопрос по: ${props.title}</p><p>От: ${formValues.value.name}</p><p>Телефон: ${formValues.value.phone}`,
				from: emailNuxtMailer,
				subject: props.title,
			})
			success.value = true
		} catch (error) {
			success.value = false
			throw error
		}
	}
}
const props = defineProps<{
	title: string
	img: string
}>()
</script>

<style lang="scss" scoped>
.hero {
	overflow: visible;
	position: relative;
	background: var(--c-bg);

	@media screen and (width > 960px) {
		height: 504px;
	}

	&__success {
		min-height: 150px;
		padding: 30px;
		background: var(--c-white);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	&__success-title {
		color: var(--c-primary);
		text-align: center;
	}

	&__label {
		display: flex;
		align-items: flex-start;
		gap: 6px;
		position: relative;

		@media screen and (width > 640px) {
			grid-row: 2/3;
			grid-column: 2/3;
		}
		@media screen and (width > 1200px) {
			grid-column: 1/2;
			grid-row: 2/3;
		}
	}

	&__policy {
		display: inline-block;
		color: rgba(52, 52, 52, 0.5);
		font-size: 12px;
		font-weight: 400;
		line-height: 140%;

		&::before {
			content: '';
			position: absolute;
			display: inline-block;
			width: 14px;
			height: 14px;
			top: 2px;
			left: 0;
			border-radius: 50%;
			border: 1px solid rgb(255, 217, 10);
		}

		&::after {
			content: '';
			position: absolute;
			display: inline-block;
			width: 6px;
			height: 6px;
			top: 6px;
			left: 4px;
			opacity: 0;
			border-radius: 50%;
			transition: opacity 0.3s ease;
			background-color: rgb(255, 217, 10);
		}
	}

	&__legend-img {
		display: none;

		@media screen and (width > 480px) {
			display: block;
			width: 103px;
			height: 120px;
		}
	}

	&__checkbox:checked + &__policy::after {
		opacity: 1;
	}

	&__link {
		color: rgba(52, 52, 52, 0.5);
		font-size: 12px;
		font-weight: 400;
		line-height: 140%;
	}

	&__form-wrapper {
		z-index: 2;
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 95%;
		transform: translate(-50%, 90%);
		border-radius: 10px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.14);

		@media screen and (width > 960px) {
			display: flex;
			background-color: var(--c-white);
		}

		@media screen and (width > 480px) {
			transform: translate(-50%, 81%);
		}
		@media screen and (width > 960px) {
			transform: translate(-50%, 60%);
		}
	}

	&__checkbox {
		opacity: 0;
	}

	&__form {
		background-color: var(--c-white);
		padding: 30px 20px;
		display: grid;
		row-gap: 10px;
		border-radius: 0px 0px 10px 10px;

		@media screen and (width > 640px) {
			grid-template-columns: 1fr 1fr;
			gap: 10px;
		}
		@media screen and (width > 960px) {
			border-radius: 0px 10px 10px 0;
		}
		@media screen and (width > 1200px) {
			grid-template-columns: repeat(3, 1fr);
			gap: 10px;
		}
	}

	&__input {
		border: 1px solid rgb(255, 217, 10);
		border-radius: 5px;
		padding: 8px 14px;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 400;
		line-height: 140%;
		outline: none;
		transition: border 0.3s ease;

		&:hover:not(:focus) {
			border-color: rgb(255, 217, 10) !important;
		}

		&::placeholder {
			color: rgba(52, 52, 52, 0.5);
			font-size: 16px;
			font-weight: 400;
			line-height: 140%;
		}

		&:focus {
			outline: none;
			border: 1px solid rgb(135, 135, 135);
		}
	}

	&__btn {
		position: relative;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
		border-radius: 5px;
		padding: 9px 0;
		background: rgb(255, 217, 10);

		@media screen and (width > 640px) {
			grid-column: 1/2;
			grid-row: 2/3;
		}
		@media screen and (width > 1200px) {
			grid-column: 3/4;
			grid-row: 1/2;
		}

		& span {
			display: v-bind(loading);
			position: absolute;
			bottom: 0;
			left: 0;
			border-radius: 10px;
			width: 100%;
			height: 2px;
			z-index: 1;
			background: #fc0000;
			animation: load 2s infinite;
		}

		@keyframes load {
			0% {
				width: 0%;
			}
			100% {
				width: 100%;
			}
		}
	}

	&__wrapper-img {
		position: relative;
		width: 100%;
		max-width: 500px;
		margin: 0 auto;

		@media screen and (width > 960px) {
			position: absolute;
			top: 0;
			right: 0;
			width: 598px;
			height: 598px;
		}
	}

	&__legend {
		display: flex;
		align-items: center;
		gap: 26px;
		padding: 30px 20px;
		background-image: url('/img/form-bg.png');
		background-repeat: no-repeat;
		background-size: 200%;
		background-position: center;
		border-radius: 10px 10px 0px 0px;

		@media screen and (width > 480px) {
			padding: 30px 42px;
		}

		@media screen and (width > 960px) {
			border-radius: 10px 0 0 10px;
			background-size: 100% 100%;
			background-color: var(--c-white);
			padding: 30px 36px;
		}
		@media screen and (width > 1200px) {
			max-width: 481px;
		}
	}

	&__legend-title {
		border-bottom: 1px solid rgba(52, 52, 52, 0.2);
		padding-bottom: 4px;
		color: var(--c-primary);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 700;
		line-height: 140%;
		text-transform: uppercase;
		margin-bottom: 4px;
	}

	&__legend-descr {
		display: block;
		color: var(--c-primary);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
	}

	&__wrapper {
		position: relative;
		z-index: 1;
		max-width: 60%;
	}
	&__title {
		margin-bottom: 20px;
		color: var(--c-white);
		font-size: clamp(32px, 5.5vw, 54px);
		font-weight: 700;
		line-height: 110%;
	}

	&__container {
		overflow: visible;
		position: relative;
		padding-top: 60px;
		padding-bottom: 86px;

		@media screen and (width > 960px) {
			display: flex;
			justify-content: space-between;
			height: 504px;
		}
	}

	&__img {
		width: 100%;

		@media screen and (width > 960px) {
			height: 504px;
		}

		&-home {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 95%;
			height: 95%;
			object-fit: contain;

			@media screen and (width > 960px) {
				width: 75%;
				height: 75%;
			}
		}
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 5px;
		margin-bottom: 30px;
	}

	&__item {
		color: var(--c-white);
		font-size: clamp(14px, 3.5vw, 18px);
		font-weight: 500;
		line-height: 140%;
		padding-left: 5px;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			display: inline-block;
			width: 4px;
			height: 4px;
			margin-right: 10px;
			background-color: var(--c-white);
			border-radius: 50%;
		}
	}
}
</style>
