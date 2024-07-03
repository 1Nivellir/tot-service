<template>
	<div class="container footer-form">
		<h2 class="footer-form__title subtitle">Есть вопрос?</h2>
		<p class="footer-form__descr">
			Опишите Ваш вопрос, мы свяжемся с вами и ответим на него!
		</p>
		<form class="footer-form__form">
			<input type="text" class="footer-form__input" placeholder="Ваше имя" />
			<input
				type="text"
				class="footer-form__input"
				placeholder="Номер телефона"
			/>
			<textarea
				type="text"
				class="footer-form__input footer-form__textarea"
				placeholder="Опишите подробно ваш вопрос"
			/>
			<label class="footer-form__label">
				<input type="checkbox" class="footer-form__checkbox" />
				<span class="footer-form__policy">
					Я соглашаюсь с
					<a href="#" class="footer-form__link"
						>политикой конфиденциальности</a
					></span
				>
			</label>

			<button class="btn-reset footer-form__btn">Отправить заявку</button>
		</form>
	</div>
</template>

<script lang="ts" setup></script>

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

		&:focus {
			border: 1px solid rgb(255, 255, 255);
			outline: none;
		}
	}

	&__title {
		margin-bottom: 6px;
		color: var(--c-white);
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
