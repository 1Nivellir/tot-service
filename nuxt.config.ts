// https://nuxt.com/docs/api/configuration/nuxt-config
import { emailNuxtMailer } from './utils/data'
export default defineNuxtConfig({
	devtools: { enabled: false },
	site: {
		url: 'https://tot-service.ru/',
	},
	sitemap: {
		urls: async (): Promise<any> => {
			const arr: any = []
			const urls = await fetch(
				'https://tot-market.ru/api/service?type=getList&params[pageNum]=1&params[pageSize]=200'
			)
			const res: any = await urls.json()
			res.data.result.forEach((el: any) => {
				arr.push(`/services/${el.ID}`)
			})

			return arr
		},
		sources: ['https://tot-service.ru/'],
	},
	app: {
		rootAttrs: {
			id: '_tot-service-root',
		},
		head: {
			htmlAttrs: {
				lang: 'ru',
			},
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			title: 'Tot Service',
			link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.png' }],
			meta: [
				{ name: 'description', content: 'Tot Service' },
				{ name: 'author', content: 'Tot Service' },
				{ name: 'robots', content: 'index, follow' },
				{ name: 'email', content: emailNuxtMailer },
			],
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
					service: 'yandex.ru',
					host: 'smtp.yandex.ru',
					port: 465,
					secure: true,
					auth: {
						user: emailNuxtMailer,
						pass: 'pmrqieslbxqytbaq',
					},
					requireTLS: true,
				},
			},
		],
		'@nuxtjs/sitemap',
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
		public: {
			baseURL: process.env.NUXT_PUBLIC_BASE_URL || 'https://tot-market.ru/api/',
		},
	},
})
