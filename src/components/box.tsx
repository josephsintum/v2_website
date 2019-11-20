import styled from "styled-components"
import css from "@styled-system/css"
import {
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
	position,
	PositionProps,
	compose,
} from "styled-system"

export interface BoxProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		FlexboxProps,
		BorderProps,
		TypographyProps,
		PositionProps {}

/** This is compose style fn from styled system */
export const BoxStyleCompose = compose(
	space,
	color,
	layout,
	flexbox,
	border,
	typography,
	position
)

/** Box is a simple building block*/
const Box = styled("div")<BoxProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
	}),
	BoxStyleCompose
)

export default Box

/** Container is a layout fixed width div and with changes with the breakpoint */
export const Container = styled(Box)<BoxProps>(
	css({
		maxWidth: ["90%", "80%", "70%", 960],
		px: 2,
		mx: "auto",
		width: "100%",
	})
)

export const Row = styled(Box)<BoxProps>(
	css({
		display: ["block", "flex"],
		width: "100%",
	})
)

export const Col = styled(Box)<BoxProps>(
	css({
		display: "block",
		flexGrow: 1,
		flexShrink: 1,
	})
)
