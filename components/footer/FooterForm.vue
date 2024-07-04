<template>
	<div class="container footer-form" v-if="success">
		<h2 class="footer-form__success subtitle">
			Ваша заявка принята. Наш специалист свяжется с вами в течение часа.
		</h2>
	</div>
	<div class="container footer-form" v-else>
		<h2 class="footer-form__title subtitle">Есть вопрос?</h2>
		<p class="footer-form__descr">
			Опишите Ваш вопрос, мы свяжемся с вами и ответим на него!
		</p>
		<form class="footer-form__form" @submit.prevent="submitForm">
			<input
				type="text"
				class="footer-form__input"
				v-model="userName"
				placeholder="Ваше имя"
			/>
			<PrimeInputMask
				id="basic"
				v-model="userPhone"
				class="footer-form__input"
				mask="+7 (999) 999-99-99"
				placeholder="+7 (999) 999-99-99"
			/>
			<textarea
				type="text"
				class="footer-form__input footer-form__textarea"
				placeholder="Опишите подробно ваш вопрос"
				v-model="userQuestion"
			/>
			<label class="footer-form__label">
				<input
					type="checkbox"
					class="footer-form__checkbox"
					v-model="userPolicy"
				/>
				<span class="footer-form__policy">
					Я соглашаюсь с
					<a href="#" class="footer-form__link"
						>политикой конфиденциальности</a
					></span
				>
			</label>

			<button class="btn-reset footer-form__btn" type="submit">
				Отправить заявку
				<span></span>
			</button>
		</form>
	</div>
</template>

<script lang="ts" setup>
const loading = ref('none')
const success = ref(false)
const userPolicy = ref(false)
const userName = ref('')
const userPhone = ref('')
const userQuestion = ref('')
const mail = useMail()
const submitForm = async () => {
	if (!userPolicy.value) {
		alert('Вы не согласились с политикой конфиденциальности')
		return
	} else {
		try {
			loading.value = 'block'
			await mail.send({
				html: `<p>Есть вопрос по: Ремонт стиральных машин</p><p>От: ${userName.value}</p><p>Телефон: ${userPhone.value}`,
				from: emailNuxtMailer,
				subject: 'Ремонт стиральных машин',
			})
			success.value = true
		} catch (error) {
			success.value = false
			throw error
		}
	}
}
</script>

<style scoped lang="scss">
.footer-form {
	padding-top: 30px;
	padding-bottom: 60px;
	background: var(--c-bg);

	&__form {
		display: grid;
		align-items: start;
		gap: 10px;

		@media screen and (width > 640px) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(3, auto);
		}
	}

	&__textarea {
		resize: none;
		height: 94px;

		@media screen and (width > 640px) {
			grid-column: 2/3;
			grid-row: 1/3;
			height: 100%;
		}
	}

	&__input {
		color: rgb(255, 255, 255);
		font-size: clamp(14px, 2.5vw, 16px);
		font-weight: 400;
		line-height: 140%;
		padding: 10px 12px;
		background-color: transparent;
		border: 1px solid rgba(255, 255, 255, 0.6);
		border-radius: 5px;
		outline: none;
		transition: border 0.3s ease-in-out;

		&::placeholder {
			color: rgba(255, 255, 255, 0.6);
			font-size: clamp(14px, 2.5vw, 16px);
			font-weight: 400;
			line-height: 140%;
		}

		&:hover:not(:focus) {
			border-color: rgba(255, 255, 255, 0.6) !important;
		}

		&:focus {
			border: 1px solid rgb(255, 255, 255);
			outline: none;
		}
	}

	&__title {
		margin-bottom: 6px;
		color: var(--c-white);
	}

	&__success {
		color: var(--c-white);
		text-align: center;
	}

	&__descr {
		margin-bottom: 20px;
		color: rgba(255, 255, 255, 0.6);
		font-size: clamp(14px, 2.5vw, 18px);
		font-weight: 500;
		line-height: 140%;
	}

	&__label {
		padding-bottom: 8px;
		display: flex;
		align-items: flex-start;
		gap: 6px;
		position: relative;

		@media screen and (width > 640px) {
			grid-column: 1/3;
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
			grid-column: 1/3;
		}
		@media screen and (width > 960px) {
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

	&__checkbox {
		opacity: 0;
	}

	&__checkbox:checked + &__policy::after {
		opacity: 1;
	}

	&__link {
		color: rgba(255, 255, 255, 0.6);
		font-size: 12px;
		font-weight: 400;
		line-height: 140%;
	}

	&__policy {
		display: inline-block;

		color: rgba(255, 255, 255, 0.6);
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
