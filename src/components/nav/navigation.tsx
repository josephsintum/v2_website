import * as React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

const liVariants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
}

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const IconPlaceholder = styled.div<{ border: string }>(
	{
		width: "40px",
		height: "40px",
		borderRadius: "50%",
		flex: "40px 0",
		marginRight: "20px",
	},
	props => ({
		border: props.border,
	})
)

const TextPlaceholder = styled.div<{ border: string }>(
	{
		borderRadius: "5px",
		width: "200px",
		height: "20px",
		flex: 1,
	},
	props => ({
		border: props.border,
	})
)

const StyledMotionLi = styled(motion.li)({
	listStyle: "none",
	marginBottom: "20px",
	display: "flex",
	alignItems: "center",
	cursor: "pointer",
})

export const MenuItem = ({ i }) => {
	const style = `2px solid ${colors[i]}`
	return (
		<StyledMotionLi
			variants={liVariants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
		>
			<IconPlaceholder border={style} />
			<TextPlaceholder border={style} />
		</StyledMotionLi>
	)
}

const ulVariants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
}

const StyledMotionUl = styled(motion.ul)({
	padding: "25px",
	position: "absolute",
	top: "100px",
	width: "230px",
	margin: 0,
})

export const Navigation = () => (
	<StyledMotionUl variants={ulVariants}>
		{itemIds.map(i => (
			<MenuItem i={i} key={i} />
		))}
	</StyledMotionUl>
)

const itemIds = [0, 1, 2, 3, 4]
