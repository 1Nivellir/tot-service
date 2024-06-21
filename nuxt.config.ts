// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	app: {
		rootAttrs: {
			id: '_tot-service-root',
		},
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Tot Service',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
		},
	},
	css: ['~/assets/scss/main.scss'],
	modules: [
		[
			'nuxt-viewport',
			{
				breakpoints: {
					desktopMedium: 1200,
					tabletMedium: 960,
					tablet: 640,
					mobileMedium: 480,
					mobile: 320,
				},
				cookie: {
					expires: 365,
					name: 'viewport',
					path: '/',
					sameSite: 'Strict',
					secure: true,
				},
			},
		],
		'@nuxt/image',
		[
			'nuxt-swiper',
			{
				swiper: {
					prefix: 'Swiper',
					styleLang: 'css | scss',
					modules: ['navigation', 'pagination'],
				},
			},
		],
	],
})
