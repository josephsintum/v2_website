import React from "react"
import { Container } from "../../components/box"
import { Title } from "../../components/text"
import { Link } from "../../components/link"
import Layout from "../../components/layout"

export default () => (
	<Layout>
		<Container>
			<Title as="h1" fontSize={8} my={6}>
				Style
			</Title>
			<Title as="h3" fontSize={6}>
				#workingProgress
			</Title>
			<Link to="/style/color">Color</Link>
			<br />
			<Link to="/style/typography">Typography</Link>
		</Container>
	</Layout>
)
