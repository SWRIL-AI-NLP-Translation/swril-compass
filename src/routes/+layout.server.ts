import { Cookies } from "$lib/modules/cookies";

interface LayoutServerLoadParams {
	request: {
		headers: Map<string, string>
	}
}

export interface LayoutServerLoadReturn {
	token?: string
}

export async function load({ request }: LayoutServerLoadParams): Promise<LayoutServerLoadReturn> {
	const cookie = request.headers.get('cookie')
	if (cookie) {
		const token = Cookies.getFrom('token', cookie)
		return {
			token
		};
	} else {
		return {};
	}
}