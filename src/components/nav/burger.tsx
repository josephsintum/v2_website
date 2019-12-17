import * as React from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import css from "@styled-system/css"
import Box from "../box"
import { BurgerButton, Drawer } from "./menuToggle"
import Helmet from "react-helmet"

const StyledMotionDiv = styled(motion.div)(
	css({
		// motion styles
	})
)

// export interface BurgerProps {
// 	children?: React.ReactChildren,

// }

export const Burger = props => {
	const [isOpen, toggleOpen] = useCycle(false, true)

	return (
		<Box>
			<StyledMotionDiv
				initial={false}
				animate={isOpen ? "open" : "closed"}
			>
				<Helmet>
					<body className={isOpen ? "noScroll" : ""} />
				</Helmet>
				<BurgerButton toggle={() => toggleOpen()} />
				<Drawer {...props} toggle={() => toggleOpen()} />
			</StyledMotionDiv>
		</Box>
	)
}
