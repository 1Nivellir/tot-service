<template>
	<ul class="footer__social">
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<NuxtImg class="footer__icon" src="/svg/insta.svg"></NuxtImg>
			</a>
		</li>
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<NuxtImg class="footer__icon" src="/svg/facebook.svg"></NuxtImg>
			</a>
		</li>
		<li class="footer__item-social">
			<a href="/" class="footer__link-social">
				<NuxtImg class="footer__icon" src="/svg/vk.svg"></NuxtImg>
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
}
</style>
