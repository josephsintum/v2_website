import styled from "styled-components"
import css from "@styled-system/css"
import {
	variant,
	color,
	ColorProps,
	space,
	SpaceProps,
	layout,
	LayoutProps,
	flexbox,
	FlexboxProps,
	border,
	BorderProps,
	typography,
	TypographyProps,
	compose,
} from "styled-system"

interface ButtonProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		FlexboxProps,
		BorderProps,
		TypographyProps {
	variant?: "primary" | "secondary" | "outline"
	siz?: "small" | "large"
}

/** Button  */
export const Button = styled.button<ButtonProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
		px: 4,
		py: 3,
		borderRadius: "default",
		fontWeight: "bold",
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
				borderColor: "text",
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
	}),
	compose(
		space,
		color,
		layout,
		flexbox,
		border,
		typography
	)
)
