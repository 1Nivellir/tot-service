<template>
	<div class="header__wrapper-menu" @click="openMenu">
		<button class="btn-reset header-btn">Меню</button>
		<div class="header-icon">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</div>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['openMenu'])
const showMenu = ref(false)
const openMenu = () => {
	showMenu.value = !showMenu.value
	emit('openMenu', showMenu.value)
}
</script>

<style scoped lang="scss">
.header {
	&__wrapper-menu {
		display: flex;
		justify-self: end;
		max-width: max-content;
		align-items: center;
		flex-direction: column;
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
}
</style>
