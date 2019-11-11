import React from "react"
import Box, { Container } from "./box"
import { BaseALink, BaseLink } from "../components/link"
import Text from "../components/text"
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
	css({
		py: 3,
		mx: 4,
		display: "flex",
		alignItems: "center",
	})
)

export const Burger = styled("button")(
	css({
		position: "absolute",
		top: 4,
		right: 5,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-around",
		size: 5,
		background: "transparent",
		border: "none",
		cursor: "pointer",
		padding: 3,
		zIndex: 10,
		borderRadius: "circle",

		"&:focus": {
			outline: "none",
		},

		div: {
			width: 4,
			height: 1,
			background: "black",
			borderRadius: "default",
			transition: "all 0.3s linear",
			position: "relative",
			transformOrigin: "1px",
		},
	})
)

const activeStyle = {
	borderBottomColor: "black",
	borderBottomWidth: 2,
	borderBottomStyle: "solid",
	borderTopColor: "transparent",
	borderTopWidth: 2,
	borderTopStyle: "solid",
}

export default () => (
	<Container>
		<Nav py={3} width="100%">
			<BrandLink to="/">* JOSEPH SINTUM</BrandLink>
			<Box display={["none", "flex"]}>
				<NavLink to="/" activeStyle={activeStyle}>
					Portfolio
				</NavLink>
				<NavLink to="/style" activeStyle={activeStyle}>
					Styles
				</NavLink>
				<BaseALink
					href="https://github.com/josephsintum/"
					py={3}
					mx={3}
					display="flex"
					alignItems="center"
				>
					Resume *
				</BaseALink>
			</Box>
			<Box display={["flex", "none"]}>
				<Burger>
					<div />
					<div />
					<div />
				</Burger>
			</Box>
		</Nav>
	</Container>
)
