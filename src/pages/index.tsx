import React from "react"
import Box, { Container } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, ALink } from "../components/link"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Box pt={7} pb={6}>
				<Title fontSize="h3" fontWeight={900} fontWeight={900}>
					Hello, I'm Joseph Sintum.
				</Title>
				<Text>
					I am fullstack Javascript developer based in San Jose, CA
				</Text>
			</Box>
			<Box lineHeight={2}>
				<Link to="/about">About Me</Link>
				<br />
				<Link to="/experience">My Experience</Link>
				<br />
				<Link to="/portfolio">Portfolio</Link>
				<br />
				<ALink href="https://github.com/josephsintum">Github</ALink>
				<br />
				<ALink href="https://www.linkedin.com/in/josephsintum/">
					LinkedIn
				</ALink>
			</Box>
		</Container>
	</Layout>
)

export default IndexPage
