import * as React from "react"
import { motion, useCycle } from "framer-motion"
import styled from "styled-components"
import css from "@styled-system/css"
import Box from "../box"
import { BurgerButton, Drawer } from "./menuToggle"

const StyledMotionDiv = styled(motion.div)(
	css({
		// motion styles
	})
)

export const Burger = () => {
	const [isOpen, toggleOpen] = useCycle(false, true)

	return (
		<Box>
			<StyledMotionDiv
				initial={false}
				animate={isOpen ? "open" : "closed"}
			>
				<BurgerButton toggle={() => toggleOpen()} />
				<Drawer toggle={() => toggleOpen()} />
			</StyledMotionDiv>
		</Box>
	)
}
