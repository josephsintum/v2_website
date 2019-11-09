import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import css from "@styled-system/css"
import { TextProps, TextSystemStyle } from "./text"

export interface LinkProps extends TextProps {}

const linkStyle = css({
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

/** ALink is a styled <a href="..."> */
export const ALink = styled("a")<LinkProps>(TextSystemStyle, linkStyle)

/** Link is a styled Gatsby Link wrapper and it is intented only for internal links.\
 * For links to pages on other domains or pages on the same domain not handled by the current Gatsby site, use the normal <ALink href="..."> element.
 */
export const Link = styled(GatsbyLink)<LinkProps>(TextSystemStyle, linkStyle)
