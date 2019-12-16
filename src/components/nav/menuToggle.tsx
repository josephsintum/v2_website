import * as React from "react"
import { motion, MotionProps } from "framer-motion"
import styled from "styled-components"
import css from "@styled-system/css"
import Box from "../box"
import { BaseALink, BaseLink } from "../link"

const Path: React.FC<MotionProps> = props => (
	<motion.path
		fill="transparent"
		strokeWidth="2"
		stroke="#000"
		strokeLinecap="square"
		{...props}
	/>
)

const StyledBurgerButton = styled.button({
	outline: "none",
	border: "none",
	cursor: "pointer",
	userSelect: "none",
	padding: "16px",
	borderRadius: "50%",
	background: "transparent",
	zIndex: 10,
	position: "relative",
})

export const BurgerButton = ({ toggle }) => (
	<StyledBurgerButton onClick={toggle}>
		<svg width="20" height="20" viewBox="0 0 20 20">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				variants={{
					closed: {
						d: "M 2 9.423 L 20 9.423",
						opacity: 1,
					},
					open: {
						d: "M 2 9.423 L 20 9.423",
						opacity: 0,
					},
				}}
				transition={{ duration: 0.2 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</StyledBurgerButton>
)

export const variants = {
	open: { left: 0 },
	closed: { left: "100vw" },
}

export const StyledMenu = styled(motion.div)(
	css({
		height: "100%",
		width: "100vw",
		bg: "primarys.4",
		position: "fixed",
		// top: 0,
		// right: 0,
		zIndex: 8,
		overflow: "hidden",
		px: 5,
		py: 7,
	})
)

export const Drawer: React.FC<{}> = (props, toggle) => (
	<StyledMenu variants={variants} onClick={toggle}>
		<Box>{props.children}</Box>
	</StyledMenu>
)
