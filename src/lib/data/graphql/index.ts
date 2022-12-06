import { GraphQLClient } from 'graphql-request';
import { dev } from '$app/environment';
// import { Cookies } from '$lib/modules/cookies';

const forceProduction = false;

const endpoint = (dev && !forceProduction) ? 'http://localhost:8080/graphql' : 'https://api.swril.ca';
export const graphql = new GraphQLClient(endpoint, { headers: {
	// 'Authorization': `Bearer ${Cookies.get('token')}`
}});

