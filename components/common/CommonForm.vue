<template>
	<section class="form">
		<div class="container">
			<div class="form__success" v-if="success">
				<h2 class="form__success-title subtitle">
					Ваша заявка принята. Наш специалист свяжется с вами в течение часа.
				</h2>
			</div>
			<form class="form__form" @submit.prevent="submitForm" v-else>
				<h2 class="form__title">У вас сломалась стиральная машина?</h2>
				<p class="form__descr">
					Опишите Вашу проблему и отправьте заявку. Мы свяжемся с вами для её
					решения!
				</p>
				<input
					type="text"
					placeholder="Ваше имя"
					v-model="userName"
					class="form__input"
				/>
				<PrimeInputMask
					id="basic"
					v-model="userPhone"
					class="form__input"
					mask="+7 (999) 999-99-99"
					placeholder="+7 (999) 999-99-99"
				/>
				<input
					type="text"
					v-model="userModel"
					placeholder="Название модели (напр., BOSCH WFF1201/01)*"
					class="form__input"
				/>
				<input
					type="text"
					v-model="userSerial"
					placeholder="Серийный номер (напр., 305521333 06 10)*"
					class="form__input"
				/>
				<textarea
					type="text"
					v-model="userProblems"
					placeholder="Опишите вашу проблему*"
					class="form__input form__textarea"
				/>
				<input
					v-model="userAddress"
					placeholder="Ваш точный адрес*"
					type="text"
					class="form__input"
				/>
				<label class="form__label">
					<input type="checkbox" class="form__checkbox" v-model="userPolicy" />
					<span class="form__policy">
						Я соглашаюсь с
						<a href="#" class="form__link"
							>политикой конфиденциальности</a
						></span
					>
				</label>

				<button class="btn-reset form__btn" type="submit">
					Отправить заявку
					<span></span>
				</button>
			</form>
		</div>
	</section>
</template>

<script lang="ts" setup>
const loading = ref('none')
const userName = ref('')
const userPhone = ref('')
const userAddress = ref('')
const userProblems = ref('')
const userModel = ref('')
const userSerial = ref('')
const userPolicy = ref(false)
const success = ref(false)
const mail = useMail()
const submitForm = async () => {
	if (!userPolicy.value) {
		alert('Вы не согласились с политикой конфиденциальности')
		return
	} else {
		try {
			loading.value = 'block'
			await mail.send({
				html: `<p>Вопрос по: Ремонт стиральных машин</p><p>От: ${userName.value}</p><p>Телефон: ${userPhone.value}<p>Адрес: ${userAddress.value}<p>Модель: ${userModel.value}<p>Серийный номер: ${userSerial.value}<p>Проблема: ${userProblems.value}`,
				from: 'master@tot-service.ru',
				subject: 'Ремонт стиральных машин',
			})
			success.value = true
		} catch (error) {
			success.value = false
			throw error
		}
	}
}
// const props = defineProps<{
// 	title: string
// 	img: string
// }>()
</script>

<style scoped lang="scss">
.form {
	padding-bottom: 40px;

	&__form {
		border-radius: 10px;
		padding: 24px 24px;
		display: grid;
		grid-gap: 10px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.14);

		@media screen and (width > 640px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__textarea {
		resize: none;
		height: 94px;

		@media screen and (width > 640px) {
			grid-column: 1/3;
			grid-row: 5/6;
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
			max-width: 430px;
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

	&__input {
		color: rgba(52, 52, 52);
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
		padding: 10px 12px;
		border: 1px solid rgba(52, 52, 52, 0.1);
		border-radius: 5px;
		outline: none;
		transition: border 0.3s ease-in-out;

		&:hover:not(:focus) {
			border-color: rgba(52, 52, 52, 0.1) !important;
		}

		@media screen and (width > 640px) {
			&:nth-of-type(5) {
				grid-column: 1/3;
				grid-row: 6/7;
			}
		}

		&::placeholder {
			color: rgba(52, 52, 52, 0.3);
			font-size: 14px;
			font-weight: 400;
			line-height: 140%;
		}

		&:focus {
			outline: none;
			border: 1px solid rgba(52, 52, 52, 0.8);
		}
	}

	&__success {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
		min-height: 100px;
		padding: 30px;
		background: var(--c-white);
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	&__success-title {
		text-align: center;
		color: var(--c-primary);
	}

	&__label {
		padding-bottom: 8px;
		display: flex;
		align-items: flex-start;
		gap: 6px;
		position: relative;

		@media screen and (width > 640px) {
			grid-column: 1/3;
			grid-row: 7/8;
		}
	}

	&__title {
		color: rgb(0, 137, 233);
		font-size: clamp(26px, 3.5vw, 42px);
		font-weight: 700;
		line-height: 110%;

		@media screen and (width > 640px) {
			grid-column: 1/3;
		}
	}

	&__descr {
		padding-bottom: 8px;
		color: rgba(52, 52, 52, 0.6);
		font-size: clamp(14px, 2.5vw, 18px);
		font-weight: 500;
		line-height: 140%;

		@media screen and (width > 640px) {
			grid-column: 1/3;
			grid-row: 2/3;
		}
	}

	&__checkbox {
		opacity: 0;
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
}
</style>
