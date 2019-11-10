import React from "react"
import Box, { Container } from "./box"
import { BaseALink, BaseLink, ALink } from "../components/link"
import styled from "styled-components"
import css from "@styled-system/css"

export const Nav = styled(Box)(
	css({
		width: "100%",
		display: "flex",
	})
)

export const BrandLink = styled(BaseLink)(
	css({
		display: "flex",
		alignItems: "center",
		mr: "auto",
		p: 3,
		fontWeight: "bold",
		letterSpacing: 2,
	})
)

export const NavLink = styled(BaseLink)(
	css({ py: 3, mx: 3, display: "flex", alignItems: "center" })
)

const activeStyle = {
	borderBottomColor: "black",
	borderBottomWidth: 3,
	borderBottomStyle: "solid",
}

export default props => (
	<Container>
		<Nav py={3} width="100%">
			<BrandLink to="/">* JOSEPH SINTUM</BrandLink>
			<>
				<NavLink to="/" activeStyle={activeStyle}>
					Portfolio
				</NavLink>
				<NavLink to="/style" activeStyle={activeStyle}>
					Styles
				</NavLink>
				<BaseALink
					href="http://google.com"
					py={3}
					mx={3}
					display="flex"
					alignItems="center"
				>
					Resume
				</BaseALink>
			</>
		</Nav>
	</Container>
)
