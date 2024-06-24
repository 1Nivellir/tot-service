<template>
	<section class="questions">
		<div class="container">
			<h2 class="questions__title subtitle">
				Ответы на часто задаваемые вопросы
			</h2>
			<CommonAccordion :accordion="accordionMenu" />
		</div>
	</section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.questions {
	padding-top: 30px;
	padding-bottom: 60px;

	&__title {
		margin-bottom: 30px;
		color: var(--c-primary);
	}
}
</style>
