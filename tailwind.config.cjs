/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Poppins']
		},
		extend: {
			colors: {
				primary: '#34d399',
				secondary: '#38bdf8',
				alert: '#f59e0b',
				danger: '#f43f5e'
			}
		}
	},
	plugins: []
};
