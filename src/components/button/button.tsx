import styled from "styled-components"
import css from "@styled-system/css"
import { BoxProps, BoxStyleCompose } from "../box"
import { variant } from "styled-system"

export interface ButtonProps extends BoxProps {
	variant?: "primary" | "outline" | "text"
}

export const BasicButton = styled("button")<BoxProps>(BoxStyleCompose)

/** Button  */
export const Button = styled(BasicButton)<ButtonProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
		borderWidth: 2,
		borderStyle: "solid",
		textTransform: "uppercase",
		":focus": {
			outline: "none",
		},
		":disabled": {
			bg: "grays.2",
			color: "grays.6",
			borderColor: "grays.2",
		},
	}),
	variant({
		variants: {
			primary: {
				color: "white",
				bg: "black",
				borderColor: "black",
				":hover": {
					bg: "primary",
				},
			},
			outline: {
				color: "text",
				bg: "transparent",
				borderWidth: 2,
				borderColor: "black",
				":hover": {
					bg: "primarys.1",
				},
				":disabled": {
					bg: "transparent",
					color: "grays.6",
					borderColor: "grays.2",
				},
			},
			text: {
				color: "text",
				bg: "transparent",
				borderColor: "transparent",
				":hover": {
					bg: "primarys.1",
				},
				":focus": {
					bg: "primarys.2",
				},
				":disabled": {
					bg: "transparent",
					color: "grays.6",
					borderColor: "transparent",
				},
			},
		},
	})
)

Button.defaultProps = {
	variant: "primary",
	borderRadius: "default",
	fontWeight: "bold",
	px: 4,
	py: 3,
}
