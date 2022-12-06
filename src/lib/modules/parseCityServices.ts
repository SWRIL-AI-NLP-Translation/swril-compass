import type { CityServiceType } from "$lib/types/cityService";

export const parseCityServices = (input: string): {text: string, cityServices: CityServiceType } => {
	const endOfTextIndex = input.indexOf("[")
}