import React from "react"
import { LabelMedium } from "baseui/typography"
import { Block } from "baseui/block"
import { StyledLink } from "baseui/link"

export default () => (
	<Block $style={{ textAlign: "center" }} margin="20px 0">
		<LabelMedium>
			Made with ❤️ by Joseph Sintum with{" "}
			<StyledLink href="https://nextjs.org/">Next.js</StyledLink>
			{", "}
			<StyledLink href="https://baseweb.design/">Baseweb</StyledLink>
			{", and hosted by "}
			<StyledLink href="https://vercel.com/">Vercel</StyledLink>
		</LabelMedium>
	</Block>
)
