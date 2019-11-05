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
	compose,
} from "styled-system"

export interface BoxProps
	extends LayoutProps,
		SpaceProps,
		ColorProps,
		FlexboxProps,
		BorderProps,
		TypographyProps {}

/** Box is a simple building block*/
const Box = styled("div")<BoxProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
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

export default Box

/** Container is a layout fixed width div and with changes with the breakpoint */
export const Container = styled(Box)<BoxProps>(
	css({
		maxWidth: [null, 640, 768, 1024, 1024, 1280],
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
