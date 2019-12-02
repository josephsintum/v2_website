import * as React from "react"
import { useRef } from "react"
import { motion, useCycle } from "framer-motion"
import { useDimensions } from "./useDimensions"
import { MenuToggle } from "./menuToggle"
import { Navigation } from "./navigation"
import styled from "styled-components"

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			restDelta: 2,
		},
	}),
	closed: {
		clipPath: "circle(25px at 252px 48px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 400,
			damping: 40,
		},
	},
}

const StyledMotionDiv = styled(motion.div)({
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	width: "300px",
	background: "#bac8ff",
})

const StyledMotionNav = styled(motion.nav)({
	position: "absolute",
	top: 0,
	right: 0,
	bottom: 0,
	width: "300px",
})

export const Burger = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)
	const containerRef = useRef(null)
	const { height } = useDimensions(containerRef)

	return (
		<StyledMotionNav
			initial={false}
			animate={isOpen ? "open" : "closed"}
			custom={height}
			ref={containerRef}
		>
			<StyledMotionDiv variants={sidebar} />
			<Navigation />
			<MenuToggle toggle={() => toggleOpen()} />
		</StyledMotionNav>
	)
}
