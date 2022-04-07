module.exports = {
	content: ["./public/index.html", "./public/index.js"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
		},
		fontFamily: {
			sans: ["Fira Sans", "sans-serif"],
			serif: ["Poppins", "serif"],
		},
		extend: {
			spacing: {
				"8xl": "96rem",
				"9xl": "128rem",
			},
			borderRadius: {
				"4xl": "2rem",
			},
		},

		screens: {
			'xs': '300px',
			// => @media (min-width: 300px) { ... }

			'sm': '576px',
			// => @media (min-width: 576px) { ... }

			'md': '684px',
			// => @media (min-width: 960px) { ... }

			'lg': '960px',
			// => @media (min-width: 1440px) { ... }
		}
	},
	plugins: [],
};
