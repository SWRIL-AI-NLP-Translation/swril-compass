import { GraphQLClient } from 'graphql-request';
import { dev } from '$app/environment';
// import { Cookies } from '$lib/modules/cookies';

const forceProduction = false;

const endpoint = 'http://localhost:8080/graphql'
export const graphql = new GraphQLClient(endpoint, { headers: {
	// 'Authorization': `Bearer ${Cookies.get('token')}`
}});

