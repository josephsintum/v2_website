import React from "react"
import Box, { Container } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Box py={4} my={6}>
				<Title as="h1" fontSize={[6]}>
					Joseph Sintum
					<br />
					Superpower: Create Stuff
				</Title>
				<Text>
					I’m a frontend Developer, specializing in building react.js
					apps with typescript.
					<br /> Currently learning Golang and love reading books.
				</Text>
			</Box>
		</Container>
	</Layout>
)

export default IndexPage
