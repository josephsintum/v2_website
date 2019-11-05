import styled from "styled-components"
import {
	color,
	ColorProps,
	space,
	SpaceProps,
	border,
	BorderProps,
	typography,
	TypographyProps,
	compose,
} from "styled-system"
import css from "@styled-system/css"

export interface TextProps
	extends SpaceProps,
		ColorProps,
		BorderProps,
		TypographyProps {}

/** Text */
const Text = styled("span")<TextProps>(
	compose(
		space,
		color,
		border,
		typography
	)
)

/** Text */
export const Title = styled("span")<TextProps>(
	compose(
		space,
		color,
		border,
		typography
	),
	css({
		fontFamily: "heading"
	})
)

export default Text
