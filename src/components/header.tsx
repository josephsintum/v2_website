import React from "react"
import Box, { Container, BoxProps } from "./box"
import { BaseLink, BaseALink } from "../components/link"
import styled from "styled-components"
import css from "@styled-system/css"
import { Burger } from "./nav/burger"

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
		fontWeight: 700,
		letterSpacing: 2,
	})
)

export const NavLink = styled(BaseLink)(
	css({
		py: 3,
		mx: 4,
		display: "flex",
		alignItems: "center",
	})
)

export const NavALink = styled(BaseALink)(
	css({
		py: 3,
		mx: 4,
		display: "flex",
		alignItems: "center",
	})
)

export interface MenuProps extends BoxProps {
	open: boolean
}

export const Menu = styled(Box)<MenuProps>(
	css({
		display: ["flex", "none"],
		flexDirection: "column",
		justifyContent: "center",
		height: "100vh",
		textAlign: "left",
		p: 5,
		position: "absolute",
		top: 0,
		right: 0,
		transition: "transform 0.3s ease-in-out",
		bg: "primarys.0",
		zIndex: 10,
	})
	// TODO: handle transform with props
	// { transform: ({ open }) => (open ? "translateX(0)" : "translateX(100%)") }
)

const activeStyle = {
	borderBottomColor: "black",
	borderBottomWidth: 2,
	borderBottomStyle: "solid",
	borderTopColor: "transparent",
	borderTopWidth: 2,
	borderTopStyle: "solid",
}

export default () => {
	// TODO check url match validation
	return (
		<Container>
			<Nav py={5} width="100%">
				<BrandLink to="/">JOSEPH SINTUM</BrandLink>
				<Box display={["none", "flex"]}>
					<NavLink to="/about" activeStyle={activeStyle}>
						About
					</NavLink>
					<NavLink to="/experience/" activeStyle={activeStyle}>
						Experience
					</NavLink>
					<NavLink to="/projects" activeStyle={activeStyle}>
						Projects
					</NavLink>
					<NavALink href="mailto:josephsintum@gmail.com">
						Contact
					</NavALink>
				</Box>
				<Box display={["flex", "none"]}>
					<Burger />
				</Box>
			</Nav>
		</Container>
	)
}
