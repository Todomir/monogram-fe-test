/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			animation: {
				float: "float 5s infinite ease-in-out",
				"fade-in-down": "fade-in-down 0.6s ease-in-out forwards",
				"fade-in": "fade-in 0.6s ease-in forwards",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-4%)" },
				},
				"fade-in-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-10%)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			backgroundImage: {
				"hero-gradient": 'url("./src/assets/hero-text-gradient.png")',
			},
		},
	},
	plugins: [],
};
