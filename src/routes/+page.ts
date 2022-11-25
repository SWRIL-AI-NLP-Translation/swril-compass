import { error } from '@sveltejs/kit';
// import { graphql } from '$lib/data/graphql';
import type { LayoutServerLoadReturn } from './+layout.server';


export interface HomeData {	
	user: {
		id: string;
	},
}

export const defaultHomeData: HomeData = {
	user: {
		id: '',
	},
};


interface ServerLoadParams {
	parent: () => Promise<LayoutServerLoadReturn>
}

export const load = async ({ parent }: ServerLoadParams): Promise<HomeData> =>  {
	try {
		const { token } = await parent();
		console.log(token)
		
		return defaultHomeData;
	} catch (e) {
		console.log(e);
		throw error(400, 'Request failed');
	}
}
