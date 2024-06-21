<template>
	<div class="menu">
		<div class="menu__wrapper">
			<NuxtLink
				to="/magazine"
				class="menu__links-magazine"
				@click="emit('closeMenu', false)"
				>Магазин запчастей</NuxtLink
			>
			<NuxtLink
				v-for="{ title, link } in headerMenu"
				:to="link"
				class="menu__links"
				@click="emit('closeMenu', false)"
				>{{ title }}</NuxtLink
			>
			<div class="menu__list">
				<button
					@click="openMenu"
					class="btn-reset menu__btn"
					:class="{ open: showMenu }"
				>
					Наши услуги
				</button>
				<transition name="burger" mode="out-in">
					<div class="menu__burger" v-if="showMenu">
						<NuxtLink
							v-for="{ title, link } in menuMobileLinks"
							:to="link"
							class="menu__link"
							@click="emit('closeMenu', false)"
							>{{ title }}</NuxtLink
						>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeMenu'])
const showMenu = ref(false)

const openMenu = () => {
	showMenu.value = !showMenu.value
}
</script>

<style scoped lang="scss">
.menu {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgb(0, 137, 233);

	&__wrapper {
		padding: 20px;
		display: flex;
		row-gap: 10px;
		flex-direction: column;
		width: 100%;
		height: 100%;
	}

	&__links-magazine {
		color: var(--c-white);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
		text-decoration: none;
		border: 1px solid var(--c-white);
		border-radius: 5px;
		padding: 8px 10px;
		transform: translateX(-10px);
	}

	&__links {
		color: var(--c-white);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
		text-decoration: none;
	}

	&__burger {
		padding: 5px 20px;
	}

	&__link {
		text-decoration: none;
		display: block;
		color: var(--c-white);
		font-size: 12px;
		padding: 5px 0;
		font-weight: 500;
		line-height: 140%;
	}

	&__btn {
		display: flex;
		align-items: center;
		color: var(--c-white);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;

		&.open {
			&::after {
				transform: rotate(180deg);
			}
		}

		&::after {
			content: '';
			display: inline-block;
			background: url('/svg/arrow-down.svg') no-repeat;
			background-size: contain;
			width: 8px;
			height: 8px;
			margin-left: 6px;
			transition: transform 0.4s ease-in-out;
		}
	}
}

.burger-enter-active,
.burger-leave-active {
	transition: all 0.4s ease-in-out;
}

.burger-enter-from,
.burger-leave-to {
	transform: translateY(-100px);
	opacity: 0;
}
</style>
