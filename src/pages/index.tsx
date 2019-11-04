import React from "react"
import { Container, Row, Col } from "../components/box"
import { Button } from "../components/button"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Row>
				<Col>
					<Button variant="outline">Hello world</Button>
				</Col>
				<Col p={4} mb={3} bg="navy" color="red">
					klsdf
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
