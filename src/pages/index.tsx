import React from "react"
import { Container, Row, Col } from "../components/box"
import { Button } from "../components/button"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Row>
				<Col p={4} mb={3} bg="highlight">
					<Title as="h1" fontSize={[6, 7, 8, 9]}>
						Something awesome is coming
					</Title>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button variant="primary">Hello world</Button>
				</Col>
				<Col>
					<Button variant="secondary" siz="small">
						Hello world
					</Button>
				</Col>
				<Col>
					<Button variant="outline">Hello world</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<Button variant="primary" siz="small">
						Hello world
					</Button>
				</Col>
				<Col>
					<Button variant="secondary">Hello world</Button>
				</Col>
				<Col>
					<Button variant="outline" siz="large">
						Hello world
					</Button>
				</Col>
			</Row>
			<Row>
				<Col>
					<Text fontSize={7}>Hello world</Text>
				</Col>
			</Row>
		</Container>
	</Layout>
)

export default IndexPage
