import * as React from "react"
import { Provider as StyletronProvider } from "styletron-react"
import { Client } from "styletron-engine-atomic"
import { BaseProvider, createTheme, lightThemePrimitives } from "baseui"
import { Header } from "./header"
import { Footer } from "./footer"

const primitives = {
	...lightThemePrimitives,
	primaryFontFamily: "Space Mono",
	secondaryFontFamily: "Space Mono",
}

const theme = createTheme(primitives)

const Layout: React.FC = ({ children }) => {
	const [engine, setEngine] = React.useState<Client | null>(null)

	React.useEffect(() => {
		// Load the `styletron-engine-atomic` package dynamically.
		// Reason: It requires use of `document`, which is not available
		// outside the browser, so we need to wait until it successfully loads.
		// Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
		import("styletron-engine-atomic").then((styletron) => {
			const clientEngine = new styletron.Client()
			setEngine(clientEngine)
		})
	}, [])

	if (!engine) return null

	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={theme}>
				<Header />
				{children}
				<Footer />
			</BaseProvider>
		</StyletronProvider>
	)
}

export default Layout
