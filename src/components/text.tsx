import styled from "styled-components"
import { BoxStyleCompose, BoxProps } from "./box"
import css from "@styled-system/css"

export interface TextProps extends BoxProps {}

/** Text */
const Text = styled("span")<TextProps>(BoxStyleCompose)

/** Text */
export const Title = styled(Text)<TextProps>(
	BoxStyleCompose,
	css({
		fontFamily: "heading",
	})
)

export default Text
