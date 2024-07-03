<template>
	<div class="header__wrapper">
		<ul class="header__list">
			<li class="header__item" v-for="{ title, link } in menuMobileLinks">
				<NuxtLink
					class="header__nav-link"
					:to="`/services/${link}`"
					@click="emit('closeMenu', false)"
					>{{ title }}</NuxtLink
				>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['closeMenu'])
</script>

<style scoped lang="scss">
.header {
	&__wrapper {
		border-radius: 10px;
		background: var(--c-white);
		padding: 20px 50px;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		left: 0;
		z-index: 100;
		width: max-content;
	}

	&__nav-link {
		text-decoration: none;
		border-bottom: 1px solid rgba(52, 52, 52, 0.3);
		padding-bottom: 5px;
		color: var(--c-primary);
		font-size: 16px;
		font-weight: 500;
		line-height: 140%;
	}

	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
}
</style>
