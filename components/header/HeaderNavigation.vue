<template>
	<nav class="header__nav">
		<ul class="header__list">
			<li class="header__item header__item-active header__item-first">
				<button class="header__nav-link" @click="openMenu">
					Наши услуги
					<span
						class="header__arrow"
						:class="{ 'header__arrow-active': showMenu }"
					></span>
				</button>
				<transition
					name="menu"
					mode="out-in"
					@before-enter="beforeEnter"
					@enter="enter"
					@leave="leave"
				>
					<HeaderList v-if="showMenu" @closeMenu="showMenu = $event" />
				</transition>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/price">Цены на ремонт</NuxtLink>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/questions"
					>Вопросы и ответы</NuxtLink
				>
			</li>
			<li class="header__item">
				<NuxtLink class="header__nav-link" to="/contacts">Контакты</NuxtLink>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" setup>
const showMenu = ref(false)

const openMenu = () => {
	showMenu.value = !showMenu.value
}
const beforeEnter = (el: any) => {
	el.style.height = '0'
	el.style.opacity = '0'
}

const enter = (el: any, done: () => void) => {
	const height = el.scrollHeight + 30
	el.style.height = height + 'px'
	el.style.opacity = '1'
	el.addEventListener('transitionend', done, { once: true })
}
const leave = (el: any, done: () => void) => {
	el.style.height = '0'
	el.style.opacity = '0'
	el.addEventListener('transitionend', done, { once: true })
}
</script>

<style lang="scss" scoped>
.header {
	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
	}

	&__item-first {
		position: relative;
	}

	&__item {
		border-left: 1px solid rgba(52, 52, 52, 0.1);
		border-right: 1px solid rgba(52, 52, 52, 0.1);
		padding: 5px 19px;

		&-active {
			display: flex;
			align-items: center;
			border-left: 1px solid rgb(255, 217, 10);
			border-right: 1px solid rgb(255, 217, 10);
		}
	}

	&__arrow {
		display: inline-block;
		background-image: url('/svg/black-arrow.svg');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: center;
		width: 6px;
		height: 6px;
		margin-left: 4px;
		transition: transform 0.3s;

		&-active {
			transform: rotate(180deg);
			width: 6px;
			height: 6px;
		}
	}

	&__nav-link {
		padding: 0;
		display: flex;
		align-items: center;
		border: none;
		background: none;
		text-decoration: none;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}
}
.menu-enter-active,
.menu-leave-active {
	transition: all 0.3s ease-in-out;
}

.menu-enter-from,
.menu-leave-to {
	opacity: 0;
	height: 0;
}
</style>
