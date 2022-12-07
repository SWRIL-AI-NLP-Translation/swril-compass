import type { CityServiceType } from "$lib/types/cityService";

export const parseCityServices = (input: string): {text: string, cityServices: CityServiceType[] } => {
	const firstSearchTerm = "Services' Name:"
	const searchTerm = "Name, Adress, Phone Number, Website"
	const firstSearchTermIndex = input.indexOf(firstSearchTerm)
	const searchTermIndex = input.indexOf(searchTerm)
	if (firstSearchTermIndex === -1) {
		console.log('no city services found')
		return { text: input, cityServices: [] }
	}
	if (searchTermIndex === -1) {
		console.log(input)
		console.log(searchTerm)
		console.log(searchTermIndex)
		console.error("something went wrong with parsing city services")
		return { text: input, cityServices: [] }
	}
	const text = input.slice(0, firstSearchTermIndex).replaceAll(/(\r\n|\n|\r)/gm, "")
	const arr = input.slice(searchTermIndex + searchTerm.length).replaceAll(/(\r\n|\n|\r)/gm, "").replaceAll("'", '"')
	const cityServices = JSON.parse(arr)
	return {
		text,
		cityServices: cityServices.map((cityService: string[]) => {
			const [name, address, phone, website] = cityService
			return { name, address, phone, website }
		})
	}	
}