import styled from "styled-components"
import { BoxStyleCompose, BoxProps } from "./box"
import css from "@styled-system/css"

export interface TextProps extends BoxProps {}

/** Text */
const Text = styled.p<TextProps>(
	BoxStyleCompose,

	css({
		mt: 0,
	})
)

/** Text */
export const Title = styled.h1<TextProps>(
	BoxStyleCompose,
	css({
		fontFamily: "heading",
		mt: 0,
	})
)

export default Text
