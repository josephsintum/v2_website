import styled, { StyledProps } from "styled-components"
import {
	color,
	space,
	layout,
	LayoutProps,
	SpaceProps,
	ColorProps,
} from "styled-system"

interface Props extends LayoutProps, SpaceProps, ColorProps {}

const Box = styled.div<Props>(
	{
		boxSizing: "border-box",
		minWidth: 0,
	},
	space,
	color,
	layout
)

export default Box
