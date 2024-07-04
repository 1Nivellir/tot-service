<template>
	<div class="contacts">
		<div class="contacts__container">
			<h1>Контакты</h1>
			<ul class="contacts__items list-reset">
				<li class="contacts__item">
					<div class="contacts__item-img">
						<img src="/svg/phone.svg" alt="Иконка адреса" />
					</div>
					<div class="contacts__item-text">
						<h3>Телефон</h3>
						<div class="contacts__item-container">
							<div class="contacts__item-container--left">
								<p>Справочная информация</p>
								<a href="tel:+74992816783" target="_blank"
									>+7 (499) 281-67-83</a
								>
								<a href="tel:+74956693559" target="_blank"
									>+7 (495) 669-35-59</a
								>
							</div>
							<div class="contacts__item-container--right">
								<p>Факс:</p>
								<a href="tel:+74991487376" target="_blank"
									>+7 (499) 148-73-76</a
								>
							</div>
						</div>
					</div>
				</li>
				<li class="contacts__item">
					<div class="contacts__item-img">
						<img src="/svg/address.svg" alt="Иконка адреса" />
					</div>
					<div class="contacts__item-text">
						<h3>Адрес сервиса</h3>
						<div class="contacts__item-container">
							<div class="contacts__item-container--left">
								<p>121170, г. Москва, ул. Поклонная, д. 11, стр. 1, офис 16</p>
							</div>
							<div class="contacts__item-container--right">
								<p>Метро:<br />Парк Победы</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div class="contacts__wrap">
		<div class="contacts__time">
			<h2>График работы</h2>
			<div class="contacts__time-list">
				<div class="contacts__time-item">
					<div class="contacts__time-item-img">
						<img src="/svg/time.svg" alt="Иконка адреса" />
					</div>
					<div class="contacts__time-item-text">
						<p>График работы диспетчерской</p>
						<span>Пн-Вск: с 10:00 до 20:00</span>
					</div>
				</div>
				<div class="contacts__time-item">
					<div class="contacts__time-item-img">
						<img src="/svg/grafic.svg" alt="Иконка адреса" />
					</div>
					<div class="contacts__time-item-text">
						<p>График приема и выдачи техники</p>
						<span>Пн-Пт: с 10:00 до 18:00</span>
						<span>Сб-Вск: выходной</span>
					</div>
				</div>
				<div class="contacts__time-item">
					<div class="contacts__time-item-img">
						<img src="/svg/master.svg" alt="Иконка адреса" />
					</div>
					<div class="contacts__time-item-text">
						<p>Выезд мастеров</p>
						<span>Пн-Сб: с 10:00 до 20:00</span>
						<span>Вск: выходной</span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="contacts__what">
		<h3>Как добраться?</h3>
		<img src="/img/maps.png" alt="" />
	</div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.contacts {
	background: #0089e9;
}

.contacts__container {
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 100px;
	padding-bottom: 200px;
}

.contacts__container h1 {
	color: #fff;
	font-size: clamp(32px, 5.5vw, 54px);
	font-weight: 700;
	line-height: 110%;
	margin-bottom: 20px;
	margin: 0;
	margin-bottom: 40px;
}

.contacts__items {
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	justify-content: space-between;
}

.list-reset {
	list-style: none;
	padding: 0;
	margin: 0;
}

.contacts__item-img {
	width: 60px;
}

.contacts__item {
	display: flex;
	gap: 14px;
}

.contacts__item-text h3 {
	color: #fff;
	margin: 0;
	font-weight: 700;
	font-size: 16px;
	line-height: 140%;
}

.contacts__item-container {
	display: flex;
	gap: 20px;
}

.contacts__item-container--left p,
.contacts__item-container--right p,
.contacts__item-container--left a,
.contacts__item-container--right a {
	color: #fff;
	font-size: 16px;
	line-height: 140%;
	display: block;
	margin: 0;
	font-weight: 400;
	text-decoration: none;
	max-width: 270px;
}

.contacts__time {
	max-width: 1040px;
	margin: 0 auto;
	margin-bottom: 100px;
	margin-top: -90px;
	padding: 60px;
	background: #fff;
	box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14);
	border-radius: 10px;
}

.contacts__time h2 {
	font-weight: 700;
	font-size: 42px;
	line-height: 110%;
	color: #0089e9;
	margin: 0;
	margin-bottom: 40px;
}

.contacts__time-list {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 30px;
}

.contacts__time-item {
	display: flex;
	gap: 14px;
}

.contacts__time-item-text {
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 196px;
}

.contacts__time-item-text p {
	font-weight: 700;
	font-size: 16px;
	line-height: 140%;
	color: #0089e9;
	margin: 0;
}

.contacts__time-item-text span {
	font-weight: 400;
	font-size: 16px;
	line-height: 140%;
	color: #343434;
}

.contacts__what {
	max-width: 1160px;
	margin: 0 auto;
	margin-bottom: 100px;
}

.contacts__what h3 {
	font-weight: 700;
	font-size: 42px;
	line-height: 110%;
	color: #343434;
	margin: 0;
	margin-bottom: 40px;
}

.contacts__what img {
	width: 100%;
}

@media (max-width: 1140px) {
	.contacts__container,
	.contacts__wrap,
	.contacts__what {
		padding-left: 10px;
		padding-right: 10px;
	}

	.contacts__time-item-text {
		max-width: 160px;
	}
}

@media (max-width: 654px) {
	.contacts__time-item-text {
		max-width: 1000px;
	}

	.contacts__time {
		padding: 30px;
	}
}

@media (max-width: 640px) {
	.contacts__time {
		margin-bottom: 80px;
	}

	.contacts__what {
		margin-bottom: 80px;
	}
}

@media (max-width: 479px) {
	.contacts__time {
		margin-bottom: 60px;
	}

	.contacts__what {
		margin-bottom: 60px;
	}

	.contacts__container h1 {
		font-weight: 700;
		font-size: 46px;
		line-height: 110%;
		color: #fff;
	}

	.contacts__item-container {
		flex-direction: column;
		gap: 6px;
	}
}
</style>
