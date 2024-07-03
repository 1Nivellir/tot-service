<template>
	<section class="form">
		<div class="container">
			<form class="form__form">
				<h2 class="form__title">У вас сломалась стиральная машина?</h2>
				<p class="form__descr">
					Опишите Вашу проблему и отправьте заявку. Мы свяжемся с вами для её
					решения!
				</p>
				<input type="text" placeholder="Ваше имя" class="form__input" />
				<input type="text" placeholder="Номер телефона*" class="form__input" />
				<input
					type="text"
					placeholder="Название модели (напр., BOSCH WFF1201/01)*"
					class="form__input"
				/>
				<input
					type="text"
					placeholder="Серийный номер (напр., 305521333 06 10)*"
					class="form__input"
				/>
				<textarea
					type="text"
					placeholder="Опишите вашу проблему*"
					class="form__input form__textarea"
				/>
				<input
					placeholder="Ваш точный адрес*"
					type="text"
					class="form__input"
				/>
				<label class="form__label">
					<input type="checkbox" class="form__checkbox" />
					<span class="form__policy">
						Я соглашаюсь с
						<a href="#" class="form__link"
							>политикой конфиденциальности</a
						></span
					>
				</label>

				<button class="btn-reset form__btn">Отправить заявку</button>
			</form>
		</div>
	</section>
</template>

<script lang="ts" setup>
const items = [{}]
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
		max-height: 94px;

		@media screen and (width > 640px) {
			grid-column: 1/3;
			grid-row: 5/6;
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
			max-width: 430px;
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
