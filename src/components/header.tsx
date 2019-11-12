import React, { useState } from "react"
import Box, { Container, BoxProps } from "./box"
import { BaseALink, BaseLink } from "../components/link"
import styled from "styled-components"
import css from "@styled-system/css"
import Burger from "./burger"

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
	}),
	// TODO: handle transform with props 
	{ transform: ({open}) => (open ? "translateX(0)" : "translateX(100%)") }
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
	const [open, setOpen] = useState(false)

	return (
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
						Resume
					</BaseALink>
				</Box>
				<Box display={["flex", "none"]}>
					<Burger open={open} onClick={() => setOpen(!open)}/>
					<Menu open={open} setOpen={setOpen}>
						<NavLink to="/" activeStyle={activeStyle}>
							Portfolio
						</NavLink>
						<NavLink to="/style" activeStyle={activeStyle}>
							Styles
						</NavLink>
						<BaseALink
							href="https://github.com/josephsintum/"
							py={3}
							mx={4}
							display="flex"
							alignItems="center"
						>
							Resume
						</BaseALink>
					</Menu>
				</Box>
			</Nav>
		</Container>
	)
}
