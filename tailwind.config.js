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
	},
	plugins: [],
};
