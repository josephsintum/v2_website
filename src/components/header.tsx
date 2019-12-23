import React, { useState } from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion } from "framer-motion"
import Box, { Container } from "./box"
import { BaseLink, BaseALink } from "../components/link"
import { Burger } from "./nav/burger"

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

const activeStyle = {
	textDecoration: "line-through",
	color: "#3b5bdb",
}

const activeMobileStyle = {
	textDecoration: "line-through",
	color: "white",
}

export const MotionMenu = styled(motion.div)(
	css({
		position: "sticky",
		bg: "white",
	})
)

export default () => {
	const [showMenu, setShowMenu] = useState(true)

	let position = document.documentElement.scrollTop

	React.useEffect(() => {
		const handleScroll = () => {
			let scroll = document.documentElement.scrollTop
			scroll < position ? setShowMenu(true) : setShowMenu(false)
			position = scroll
		}
		document.addEventListener("scroll", handleScroll, { passive: true })

		return () => {
			// This cleans up the event handler when the component unmounts.
			document.removeEventListener("scroll", handleScroll)
		}
	}, [])

	const variants = {
		hidden: { top: -84 },
		visible: { top: 0 },
	}

	// TODO check url match validation
	return (
		<MotionMenu
			initial="visible"
			animate={showMenu ? "visible" : "hidden"}
			variants={variants}
		>
			<Container>
				<Box as="nav" display="flex" py={4} width="100%">
					<BaseLink
						to="/"
						display="flex"
						alignItems="center"
						mr="auto"
						p={3}
						fontWeight={700}
						letterSpacing={2}
					>
						JOSEPH SINTUM
					</BaseLink>
					<Box
						display={["none", "flex"]}
						fontWeight="bold"
						color="black"
					>
						<NavLink to="/about/" activeStyle={activeStyle}>
							About
						</NavLink>
						<NavLink to="/experience/" activeStyle={activeStyle}>
							Experience
						</NavLink>
						<NavLink to="/projects/" activeStyle={activeStyle}>
							Projects
						</NavLink>
						<NavALink href="mailto:josephsintum@gmail.com">
							Contact
						</NavALink>
					</Box>
					<Box display={["flex", "none"]}>
						<Burger>
							<Box
								m="auto"
								maxWidth="90%"
								pt={7}
								fontWeight="bold"
								fontSize="h4"
							>
								<NavLink
									to="/about/"
									activeStyle={activeMobileStyle}
								>
									About
								</NavLink>
								<NavLink
									to="/experience/"
									activeStyle={activeMobileStyle}
								>
									Experience
								</NavLink>
								<NavLink
									to="/projects/"
									activeStyle={activeMobileStyle}
								>
									Projects
								</NavLink>
								<NavALink href="mailto:josephsintum@gmail.com">
									Contact
								</NavALink>
							</Box>
						</Burger>
					</Box>
				</Box>
			</Container>
		</MotionMenu>
	)
}
