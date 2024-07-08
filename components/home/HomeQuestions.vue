<template>
	<section class="questions">
		<div class="container">
			<h2 class="questions__title subtitle">
				Ответы на часто задаваемые вопросы
			</h2>
			<CommonAccordion :accordion="list" />
		</div>
	</section>
</template>

<script lang="ts" setup>
defineProps<{
	list: any
}>()
</script>

<style lang="scss" scoped>
.questions {
	padding-top: 30px;
	padding-bottom: 60px;

	&__title {
		max-width: 40%;
		margin-bottom: 30px;
		color: var(--c-primary);
	}
}
</style>
