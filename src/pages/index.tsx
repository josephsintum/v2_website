import React from "react"
import Box, { Container } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Link, ALink } from "../components/link"
import { Button } from "../components"
import { BaseALink } from "../components/link"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Box pt={7} pb={6}>
				<Title fontSize={["h4", "h3"]} fontWeight={900} mb={0}>
					Hello, I'm Joseph Sintum.
				</Title>
				<Title fontSize={["h4", "h3"]} color="primary" fontWeight={900}>
					I build beautiful web applications.
				</Title>
				<Text>
					I am a frontend web developer based in San Jose, CA
					<br />
					specializing in building outstanding websites and
					applications.
				</Text>
			</Box>
			<Box>
				<BaseALink href="mailto:josephsintum@gmail.com">
					<Button>Say Hello</Button>
				</BaseALink>
			</Box>
		</Container>
	</Layout>
)

export default IndexPage
