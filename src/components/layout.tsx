import React from "react"
import styled, { ThemeProvider } from "styled-components"
import theme from "./theme"

import GlobalStyles from "./global-styles"
import Footer from "./footer"

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Main = styled.main`
	flex-grow: 1;
	display: flex;
	position: relative;
`

const Layout = ({ children }: LayoutProps) => (
	<ThemeProvider theme={theme}>
		<AppContainer>
			<GlobalStyles />
			<Main>{children}</Main>
			<Footer />
		</AppContainer>
	</ThemeProvider>
)

interface LayoutProps {
	children: React.ReactNode
}

export default Layout
