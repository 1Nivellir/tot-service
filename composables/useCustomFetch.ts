import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
	url: string,
	options: UseFetchOptions<T> = {}
) {
	const config = useRuntimeConfig()

	const defaults: UseFetchOptions<T> = {
		baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
		key: url,
		// mode: 'no-cors',
		// credentials: 'include',

		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onResponse({ request, response, options }) {},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		onResponseError({ request, response, options }) {},
	}

	const params = defu(options, defaults)

	return useFetch(url, params)
}
