import * as React from "react"
import { Li } from "./list"
import { Section } from "./section"
import { H3, Paragraph2 } from "baseui/typography"
import { Block } from "baseui/block"
import { StyledLink as Link } from "baseui/link"

export const Contact = () => {
	return (
		<Section
			padding={["100px 0px", "150px 0px"]}
			$style={{ textAlign: "justify" }}
			maxWidth="600px"
		>
			<H3>Say Hello</H3>
			<Block maxWidth="1000px">
				<Paragraph2>
					I am open to hiring opportunities, conversations, books,
					art, cutting edge tech or the future. So, please feel free
					to reach me at the email below and I will make sure to
					respond ASAP.
				</Paragraph2>
				<ul>
					<Li>
						<Link href="mailto:josephsintum@gmail.com">
							josephsintum@gmail.com
						</Link>
					</Li>
					<Li>
						<Link href="https://www.linkedin.com/in/josephsintum/">
							https://www.linkedin.com/in/josephsintum/
						</Link>
					</Li>
					<Li>
						<Link href="https://github.com/josephsintum">
							https://github.com/josephsintum
						</Link>
					</Li>
				</ul>
			</Block>
		</Section>
	)
}
