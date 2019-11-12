import React, { useState } from "react"
import { BoxProps } from "./box"
import styled from "styled-components"
import css from "@styled-system/css"
import { BaseButton } from "../components/button"

export interface BurgerProps extends BoxProps {}

export const StyledBurger = styled(BaseButton)<BurgerProps>(
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
		zIndex: 12,
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

export default props => (
	<StyledBurger {...props}>
		<div />
		<div />
		<div />
	</StyledBurger>
)
