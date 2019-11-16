import React from "react"
import Box, { Container } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
// import theme from "../../components/theme"

export default () => (
	<Layout>
		<Container>
			<Title fontSize="h3" my={6}>
				Sample
			</Title>
			{/* black section */}
			<Title fontSize="h5">Subtitle</Title>
			<Text>Hello world</Text>
			<Box></Box>
		</Container>
	</Layout>
)
