import React from "react"
import styled, { ThemeProvider } from "styled-components"
import Box, { Row } from "../components/box"
import css from "@styled-system/css"
import theme from "./theme"

import GlobalStyles from "./global-styles"
import Footer from "./footer"
import Header from "../components/header"

const AppContainer = styled(Box)(
	css({
		minHeight: "100vh",
	})
)

const Main = styled(Box)(
	css({
		position: "relative",
	})
)

const Layout = ({ children }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<GlobalStyles />
			<Header />
			<Main>{children}</Main>
			<Footer />
		</AppContainer>
	</ThemeProvider>
)

interface LayoutProps {
	children: React.ReactNode
}

export default Layout
