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
		TypographyProps {
	// use for external link with prop `as="a"`
}

/** TextSystemStyle is compose style fn from styled system */
export const TextSystemStyle = compose(
	space,
	color,
	border,
	typography
)

/** Text */
const Text = styled("span")<TextProps & { href?: string }>(TextSystemStyle)

/** Text */
export const Title = styled(Text)<TextProps>(
	TextSystemStyle,
	css({
		fontFamily: "heading",
	})
)

export default Text
