import styled from "styled-components"
import css from "@styled-system/css"
import { BoxProps, BoxStyleCompose } from "./box"
import { variant } from "styled-system"

interface ButtonProps extends BoxProps {
	variant?: "primary" | "secondary" | "outline"
	siz?: "small" | "large"
}

export const BaseButton = styled("button")<BoxProps>(BoxStyleCompose)

/** Button  */
export const Button = styled(BaseButton)<ButtonProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
		px: 4,
		py: 3,
		borderRadius: "default",
		fontWeight: "bold",
		color: "white",
		bg: "black",
		borderWidth: 2,
		borderColor: "black",
	}),
	variant({
		variants: {
			primary: {
				fontSize: 3,
				color: "background",
				bg: "primary",
				px: [1, 2, 3],
			},
			secondary: {
				color: "background",
				bg: "secondary",
			},
			outline: {
				color: "text",
				bg: "transparent",
				borderWidth: 2,
				borderColor: "black",
			},
		},
	}),
	variant({
		prop: "siz",
		variants: {
			small: {
				px: 2,
				py: 1,
				fontSize: 2,
			},
			large: css({
				px: 5,
				py: 3,
				fontSize: 4,
			}),
		},
	})
)
