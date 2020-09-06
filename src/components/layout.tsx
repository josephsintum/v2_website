import * as React from "react"
import { Provider as StyletronProvider } from "styletron-react"
import { Client } from "styletron-engine-atomic"
import {
	BaseProvider,
	createTheme,
	lightThemePrimitives,
	LightTheme,
	useStyletron,
} from "baseui"
import Helmet from "react-helmet"
import Header from "./header"
import Footer from "./footer"

const primitives = {
	...lightThemePrimitives,
	primaryFontFamily: "karla",
	secondaryFontFamily: "Space Mono",
}

const overrides = {
	typography: {
		DisplayMedium: {
			...LightTheme.typography.DisplayMedium,
			fontFamily: "Space Mono",
			fontWeight: "bold",
		},
		DisplaySmall: {
			...LightTheme.typography.DisplaySmall,
			fontFamily: "Space Mono",
			fontWeight: "bold",
		},
		HeadingLarge: {
			fontFamily: "Space Mono",
		},
		HeadingMedium: {
			fontFamily: "Space Mono",
		},
		LabelMedium: {
			fontFamily: "Space Mono",
		},
		LabelXSmall: {
			fontFamily: "Space Mono",
		},
	},
}

const theme = createTheme(primitives, overrides)

const Layout: React.FC = ({ children }) => {
	const [css] = useStyletron()

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
				<Helmet
					bodyAttributes={{
						css: css({ margin: "0px" }),
					}}
				/>
				<Header />
				{children}
				<Footer />
			</BaseProvider>
		</StyletronProvider>
	)
}

export default Layout
