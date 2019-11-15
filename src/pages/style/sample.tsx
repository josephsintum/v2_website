import React from "react"
import Box, { Container, Row, Col } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import theme from "../../components/theme"

export default () => (
	<Layout>
		<Container>
			<Title fontSize={8} my={6}>
				Sample
			</Title>
			{/* black section */}
			<Title fontSize={6}>Subtitle</Title>
			<Text>Hello world</Text>
			<Box></Box>
		</Container>
	</Layout>
)
