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
				<Title fontSize="h3" fontWeight={900} mb={0}>
					Hello, I'm Joseph Sintum.
				</Title>
				<Title fontSize="h3" color="primary" fontWeight={900}>
					I build beautiful web applications.
				</Title>
				<Text>
					I am a frontend web developer based in San Jose, CA
					<br />
					specializing in building outstanding websites and
					applications.
				</Text>
			</Box>
			<Box lineHeight={2}>
				<Link to="/about">About Me</Link>
				<br />
				<Link to="/experience">My Experience</Link>
				<br />
				<Link to="/projects">Projects</Link>
				<br />
				<ALink href="https://github.com/josephsintum">Github</ALink>
				<br />
				<ALink href="https://www.linkedin.com/in/josephsintum/">
					LinkedIn
				</ALink>
				<br />
				<ALink href="https://github.com/josephsintum/josephsintum.github.io">
					Source Code
				</ALink>
			</Box>
		</Container>
	</Layout>
)

export default IndexPage
