/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';
export const content = ['./src/**/*.{html,js,jsx}'];
export const theme = {
	extend: {
		fontFamily: {
			sans: ['Inter var', ..._fontFamily.sans],
		},
	},
};
export const plugins = [
	require('@tailwindcss/forms'),
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography'),
];
