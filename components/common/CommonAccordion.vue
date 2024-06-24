<template>
	<ul class="accordion__list">
		<li
			class="accordion__item"
			v-for="({ title, description }, i) in accordion"
		>
			<button class="btn-reset accordion__btn" @click="click(i)">
				{{ title }}
				<img
					src="/svg/arrow-in-ellipse.svg"
					class="accordion__icon"
					:class="{ active: openIndex === i }"
				/>
			</button>
			<transition
				name="accordion"
				mode="out-in"
				@before-enter="beforeEnter"
				@enter="enter"
				@leave="leave"
			>
				<div
					class="accordion__wrapper"
					v-if="i === openIndex && openIndex !== null"
				>
					<p class="accordion__descr">
						{{ description }}
					</p>
				</div>
			</transition>
		</li>
	</ul>
</template>

<script lang="ts" setup>
defineProps<{
	accordion: any
}>()
const openIndex = ref<number | null>(null)

const click = (index: number) => {
	if (openIndex.value === index) {
		openIndex.value = null
	} else {
		openIndex.value = index
	}
}
const beforeEnter = (el: any) => {
	el.style.height = '0'
	el.style.opacity = '0'
}

const enter = (el: any, done: () => void) => {
	const height = el.scrollHeight
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

<style scoped lang="scss">
.accordion {
	&__list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	&__item {
		display: flex;
		flex-direction: column;
		border-bottom: 1px solid rgba(52, 52, 52, 0.1);
		border-top: 1px solid rgba(52, 52, 52, 0.1);
		padding: 20px;
	}

	&__icon {
		height: 24px;
		width: 24px;
		align-self: flex-start;
		transition: transform 0.3s ease;

		transform: rotate(180deg);

		&.active {
			transform: rotate(0);
		}
	}

	&__btn {
		display: flex;
		margin-bottom: 5px;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		font-size: 14px;
		font-weight: 700;
		line-height: 140%;
		color: var(--c-primary);
	}

	&__descr {
		position: sticky;
		margin: 0;
		color: var(--c-primary);
		font-size: 14px;
		font-weight: 400;
		line-height: 140%;
	}
}

.accordion-enter-active,
.accordion-leave-active {
	transition: all 0.3s ease-in-out;
}

.accordion-enter-from,
.accordion-leave-to {
	opacity: 0;
	height: 0;
}

.accordion-content {
	overflow: hidden;
}
</style>
