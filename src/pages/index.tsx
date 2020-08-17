import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Block } from "baseui/block"
import { H2, H3, Label2, Paragraph2 } from "baseui/typography"
import { Button } from "baseui/button/index"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Block
			as="main"
			padding={["0px 15px", "0px 25px", "0px 50px", "0px 150px"]}
			maxWidth="1600px"
			margin="auto"
		>
			<Hero />
			<About />
		</Block>
	</Layout>
)

export default IndexPage

const Hero = () => (
	<Block
		as="section"
		display="flex"
		justifyContent="center"
		flexDirection="column"
		alignItems="flex-start"
		minHeight="100vh"
		margin={0}
	>
		<Label2 as="h1">Hello, my name is</Label2>
		<H2
			font="DisplayMedium"
			marginTop="scale500"
			marginBottom="scale500"
			$style={{ fontWeight: "bold" }}
		>
			Joseph Sintum.
		</H2>
		<H2
			font={["HeadingLarge", "DisplaySmall", "DisplayMedium"]}
			marginTop={0}
			marginBottom="scale800"
		>
			I build beautiful things with code.
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
			<Button $as="a" href="mailto:joseph24jay@gmail.com">
				Get in touch
			</Button>
		</Block>
	</Block>
)

const About = () => (
	<Block
		as="section"
		display="flex"
		justifyContent="center"
		flexDirection="column"
		alignItems="flex-start"
		margin={0}
	>
		<H3>About Me</H3>

		<Paragraph2 $style={{ textAlign: "justify" }}>
			Hi. I'm Joseph, a Javascript developer based in San Jose.I am a
			self-taught. I have been programming for 3 years with lots of
			experience in developing and maintaining Javascript, Typescript and
			React apps. I am working at San Jose City College as Web Master. My
			time is spent maintaining and updating the San Jose City College
			School and Athletics websites, contributing to open source projects
			and just learning new technologies. Out of work, I spend my time
			reading reading books, drawing, drinking coffee and just
			learning languages like Golang or French. C'est tres amusant.
		</Paragraph2>
	</Block>
)
