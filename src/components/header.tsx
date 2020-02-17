import React, { useState } from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { motion, useCycle } from "framer-motion"
import { BurgerButton } from "./menuToggle"
import Helmet from "react-helmet"
import Box, { Container } from "./box"
import { BaseLink, BaseALink } from "../components/link"
import { Button } from "."

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

export const MotionMenu = styled(motion.div)(
	css({
		position: "sticky",
		bg: "white",
	})
)

export const StyledMenu = styled(motion.div)(
	css({
		position: "fixed",
		height: "100%",
		width: "100vw",
		bg: "primarys.2",
		zIndex: 8,
		top: 84,
	})
)

export const Drawer: React.FC<{
	toggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}> = ({ toggle, children }) => {
	const variants = {
		open: {
			left: 0,
		},
		closed: { left: "100vw" },
	}

	return (
		<StyledMenu variants={variants} onClick={toggle}>
			<Box
				color="black"
				m="auto"
				maxWidth="90%"
				pt={7}
				fontWeight="bold"
				fontSize="h6"
			>
				{children}
			</Box>
		</StyledMenu>
	)
}

// export interface BurgerProps { }

export const Burger: React.FC<{}> = props => {
	const [isOpen, toggleOpen] = useCycle(false, true)

	return (
		<Box>
			<motion.div initial={false} animate={isOpen ? "open" : "closed"}>
				<Helmet>
					<body className={isOpen ? "noScroll" : ""} />
				</Helmet>
				<BurgerButton toggle={() => toggleOpen()} />
				<Drawer {...props} toggle={() => toggleOpen()} />
			</motion.div>
		</Box>
	)
}

interface menuLinksTypes
	extends Array<{
		name: string
		url: string
	}> {}

const menuLinks: menuLinksTypes = [
	{
		name: "About",
		url: "/about/",
	},
	{
		name: "Experience",
		url: "/experience/",
	},
	{
		name: "Work",
		url: "/work/",
	},
	{
		name: "Contact",
		url: "mailto:josephsintum@gmail.com",
	},
]

export default () => {
	const [showMenu, setShowMenu] = useState(true)

	React.useEffect(() => {
		let position = document.documentElement.scrollTop

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

	const activeStyle = {
		textDecoration: "line-through",
		color: "#3b5bdb",
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
					<Box alignItems="center" display="flex" mr="auto">
						<BaseLink
							to="/"
							p={3}
							fontWeight={700}
							letterSpacing={2}
						>
							JOSEPH SINTUM
						</BaseLink>
					</Box>
					<Box display={["none", "flex"]} fontWeight="bold">
						{menuLinks.map((link, index) => {
							link.url.includes(":") ? (
								<NavALink
									key={`menualink_${index}`}
									href={link.url}
								>
									{link.name}
								</NavALink>
							) : (
								<NavLink
									key={`menulink_${index}`}
									to={link.url}
									activeStyle={activeStyle}
								>
									{link.name}
								</NavLink>
							)
						})}
						<NavALink href="#">
							<Button variant="outline">Resume</Button>
						</NavALink>
					</Box>
					<Box display={["flex", "none"]}>
						<Burger>
							<NavLink to="/about/" activeStyle={activeStyle}>
								About
							</NavLink>
							<NavLink
								to="/experience/"
								activeStyle={activeStyle}
							>
								Experience
							</NavLink>
							<NavLink to="/work/" activeStyle={activeStyle}>
								Work
							</NavLink>
							<NavALink href="mailto:josephsintum@gmail.com">
								Contact
							</NavALink>
							<NavALink href="#">
								<Button variant="outline">Resume</Button>
							</NavALink>
						</Burger>
					</Box>
				</Box>
			</Container>
		</MotionMenu>
	)
}
