/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				float: "float 5s infinite ease-in-out",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-4%)" },
				},
			},
			backgroundImage: {
				"hero-gradient": 'url("./src/assets/hero-text-gradient.png")',
			},
		},
	},
	plugins: [],
};
