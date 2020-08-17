import * as React from "react"
import { Client as Styletron } from "styletron-engine-atomic"
import { Provider as StyletronProvider } from "styletron-react"
import { LightTheme, BaseProvider } from "baseui"
import Header from "./header"
import Footer from "./footer"

const engine = new Styletron()

const Layout: React.FC = ({ children }) => (
	<StyletronProvider value={engine}>
		<BaseProvider theme={LightTheme}>
			<Header />
			{children}
			<Footer />
		</BaseProvider>
	</StyletronProvider>
)

export default Layout
