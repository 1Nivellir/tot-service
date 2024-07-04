// https://nuxt.com/docs/api/configuration/nuxt-config
import { emailNuxtMailer } from './utils/data'
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
	css: [
		'~/assets/scss/main.scss',
		// 'primevue/resources/primevue.min.css',
		// 'primevue/resources/themes/md-light-indigo/theme.css',
	],
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
		'@primevue/nuxt-module',
		'@nuxt/image',
		'@vueuse/nuxt',
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
		[
			'nuxt-mail',
			{
				message: {
					to: emailNuxtMailer,
				},
				smtp: {
					service: 'mail.ru',
					host: 'smtp.mail.ru',
					port: 465,
					secure: true,
					auth: {
						user: emailNuxtMailer,
						pass: 'H8vCsHyjLNZg3cqaBWgd',
					},
					requireTLS: true,
				},
			},
		],
	],
	primevue: {
		usePrimeVue: true,
		components: {
			prefix: 'Prime',
			include: ['InputMask'],
		},
		directives: {
			prefix: 'prime',
			// include: ['Tooltip'],
		},
		options: {
			unstyled: true,
		},
	},
	runtimeConfig: {
		apiSecret: process.env.NUXT_API_SECRET,
		public: {
			baseURL:
				process.env.NUXT_PUBLIC_BASE_URL ||
				'https://tot-market.ru/api/services.php',
		},
	},
})
