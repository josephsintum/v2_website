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
} from "styled-system"

interface ButtonProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		FlexboxProps,
		BorderProps,
		TypographyProps {
	variant?: "primary" | "secondary" | "outline"
}

/** Button  */

export const Button = styled.button<ButtonProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
		px: 4,
		py: 3,
	}),
	variant({
		scale: "buttons",
		variants: {
			primary: {},
			secondary: {},
			outline: {},
		},
	}),
	space,
	color,
	layout,
	flexbox,
	border,
	typography
)
