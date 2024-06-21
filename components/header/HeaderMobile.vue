<template>
	<header class="header">
		<div class="container header__container">
			<CommonLogo />
			<div class="header__wrapper-menu" @click="openMenu">
				<button class="btn-reset header-btn">Меню</button>
				<div class="header-icon" id="menu-icon" :class="{ open: showMenu }">
					<div class="bar1"></div>
					<div class="bar2"></div>
					<div class="bar3"></div>
				</div>
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

const openMenu = () => {
	showMenu.value = !showMenu.value
}
</script>

<style scoped lang="scss">
.header {
	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&-btn {
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}

	&-icon {
		position: relative;
		width: 100%;
		cursor: pointer;
	}
	&-icon div {
		width: 100%;
		height: 4px;
		background-color: #ffd90a;
		margin: 6px 0;
		transition: 0.4s;
	}

	&__wrapper-menu {
		display: flex;
		align-items: center;
		flex-direction: column;
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
