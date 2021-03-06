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
			maxWidth="600px"
			overrides={{ Block: { props: { id: "contact" } } }}
		>
			<H3 font="HeadingLarge" $style={{ fontWeight: "bold" }}>
				Say Hello
			</H3>
			<Block maxWidth="1000px">
				<Paragraph2 $style={{ textAlign: "justify" }}>
					I am open to hiring opportunities, conversations, books,
					art, cutting edge tech or the future. So, please feel free
					to reach me at the email below and I will make sure to
					respond ASAP.
				</Paragraph2>
				<ul style={{ padding: "0px", wordWrap: "break-word" }}>
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
