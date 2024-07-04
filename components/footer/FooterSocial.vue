<template>
	<ul class="footer__social">
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<img class="footer__icon" src="/svg/insta.svg" alt='Мы в инстаграм'></img>
			</a>
		</li>
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<img class="footer__icon" src="/svg/facebook.svg" alt='Мы в фейсбук'></img>
			</a>
		</li>
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<img class="footer__icon" src="/svg/vk.svg" alt='Мы вконтакте'></img>
			</a>
		</li>
	</ul>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.footer__icon {
	width: 26px;
	height: 26px;
}
.footer__social {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	gap: 25px;

	@media screen and (width > 960px) {
		justify-content: flex-end;
	}

	@media screen and (width > 960px) {
		justify-content: center;
	}
}
</style>
