import * as React from "react"
import { Label2, H2, Paragraph2 } from "baseui/typography"
import { Block } from "baseui/block"
import { Button } from "baseui/button"
import { Section } from "./section"

export const Hero = () => (
	<Section minHeight="80vh" margin={["100px auto", "100px auto"]}>
		<Label2 as="h1">Hello, my name is</Label2>
		<H2
			$style={{ fontWeight: "bold" }}
			font="DisplaySmall"
			marginTop="scale500"
			marginBottom="scale500"
		>
			Joseph Sintum.
			<br />I build beautiful things with code.
		</H2>
		<Paragraph2
			$style={{ textAlign: "justify" }}
			marginBottom="scale500"
			maxWidth="500px"
		>
			I am a Javascript Developer based in San Jose, specializing in
			building and designing high-quality React frontend and typescript
			applications.
		</Paragraph2>
		<Block paddingTop="scale1000">
			<Button $as="a" href="mailto:josephsintum@gmail.com">
				Get in touch
			</Button>
		</Block>
	</Section>
)
