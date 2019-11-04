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
} from "styled-system"

interface BoxProps extends LayoutProps, SpaceProps, ColorProps, FlexboxProps {}

/** Box is a simple building block*/
const Box = styled.div<BoxProps>(
	css({
		boxSizing: "border-box",
		minWidth: 0,
	}),
	space,
	color,
	layout,
	flexbox
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
		display: "flex",
		width: "100%",
	})
)
