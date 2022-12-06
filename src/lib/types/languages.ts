export const languages = [
	"English",
	"French",
	"Afrikaans",
	"Arharic"
] as const

export type LanguageType = typeof languages[number]