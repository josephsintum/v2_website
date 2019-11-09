import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import css from "@styled-system/css"
import { TextProps, TextSystemStyle } from "./text"

export interface LinkProps extends TextProps {}

/** Link is a Gatsby Link wrapper with styling */
export const Link = styled(GatsbyLink)<LinkProps>(
	TextSystemStyle,
	css({
		color: "text",
		p: 0,
		textDecoration: "none",
		backgroundImage: `linear-gradient(
			transparent 0%,
			transparent calc(50% - 8px),
			#dbe4ff calc(50% - 8px),
			#dbe4ff 100%
		  )`,
		backgroundSize: "100% 200%",
		backgroundPosition: "0 0",
		transition:
			"background-position 120ms ease-in-out, padding 120ms ease-in-out",
		"&:hover": {
			py: "1",
			backgroundImage: `linear-gradient(
                transparent 0%,
                transparent calc(50% - 8px),
                #dbe4ff99 calc(50% - 8px),
                #dbe4ff99 100%
              )`,
			backgroundPosition: "0 100%",
		},
	})
)
