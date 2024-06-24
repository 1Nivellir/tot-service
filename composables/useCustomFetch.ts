import { defu } from 'defu'
import type { NitroFetchOptions } from 'nitropack'

export function useCustomFetch<T extends string>(
	url: string,
	options: NitroFetchOptions<T> = {}
) {
	const config = useRuntimeConfig()
	const defaults: NitroFetchOptions<T> = {
		baseURL: options.baseURL ? options.baseURL : config.public.baseURL,
		credentials: 'same-origin',
		headers: {
			'Content-type': 'application/json',
		},
	}
	const params = defu(options, defaults)

	return $fetch(url, params)
}
