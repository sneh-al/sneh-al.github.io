

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			fontFamily: {
				'space': ['Space Mono', 'monospace'],
				'mono': ['Monoton', 'system-ui'],
				
			  },
			 colors: {
			
				'primary': " #87CEEB",
				'secondary': "#90EE90",
				'accent': "#D3D3D3",
				'highlight': "#FFA500",
				
			  },
			 
		},
	},
	plugins: [require('tailwindcss-animated') ],
};
