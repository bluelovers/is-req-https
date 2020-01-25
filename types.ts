/**
 * Created by user on 2020/1/25.
 */

export type IResponseLike = {
	connection?: {
		encrypted?: any
	},
} | {
	secure?: boolean,
} | {
	headers?: Record<any | 'x-forwarded-proto', any>,
} | {
	server?: {
		info?: {
			protocol?: any
		}
	},
} | {
	protocol?: any,
}
