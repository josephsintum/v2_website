import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle({
	body: {
		color: "#222",
		fontFamily: "Space Mono, monospace",
		fontWeight: 400,
		lineHeight: "1.5em",
		// -moz-osx-font-smoothing: grayscale,
	},
})

export default GlobalStyles
