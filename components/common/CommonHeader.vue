<template>
	<header class="header">
		<div class="container header__container">
			<CommonLogo />
			<HeaderText v-if="!$viewport.isLessThan('mobileMedium')" />
			<HeaderContacts v-if="!$viewport.isLessThan('tablet')" />
			<HeaderButton
				v-if="$viewport.isLessThan('tablet')"
				@openMenu="showMenu = $event"
			/>
		</div>

		<div class="header__bottom" v-if="!$viewport.isLessThan('tablet')">
			<div class="container header__bottom-container">
				<HeaderNavigation v-if="!$viewport.isLessThan('tabletMedium')" />
				<NuxtLink to="/magazine" class="header__link"
					>Магазин запчастей</NuxtLink
				>
				<HeaderButton
					v-if="
						!$viewport.isLessThan('tablet') &&
						$viewport.isLessThan('tabletMedium')
					"
					@openMenu="showMenu = $event"
				/>
			</div>
		</div>
	</header>
	<ClientOnly>
		<Teleport to="#_main">
			<Transition name="header-menu" mode="out-in">
				<CommonMobileMenu v-if="showMenu" @closeMenu="showMenu = false" />
			</Transition>
		</Teleport>
	</ClientOnly>
</template>

<script lang="ts" setup>
const showMenu = ref(false)
</script>

<style scoped lang="scss">
.header {
	@media screen and (width > 480px) {
		padding: 19px 0;
	}
	&__container {
		display: flex;
		align-items: center;

		@media screen and (width > 480px) {
			display: grid;
			grid-template-columns: 100px minmax(50px, 226px) auto;
		}

		@media screen and (width > 640px) {
			margin-bottom: 19px;

			grid-template-columns: 130px minmax(50px, 226px) auto;
		}
	}

	&__link {
		text-decoration: none;
		color: var(--c-primary);
		border: 1px solid rgb(255, 217, 10);
		border-radius: 5px;
		padding: 13px 25px;
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}

	&__bottom {
		padding-top: 19px;
		border-top: 1px solid rgba(52, 52, 52, 0.1);

		&-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
}

.header-menu-enter-active,
.header-menu-leave-active {
	transition: transform 0.3s ease;
}
.header-menu-enter-from,
.header-menu-leave-to {
	transform: translateX(150%);
}
</style>
