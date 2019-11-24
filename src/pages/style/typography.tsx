import React from "react"
import Box, { Container, Row } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import theme from "../../components/theme"
import SEO from "../../components/seo"

interface TypeRowProps {
	fontSizes: { [key: string]: string | number }
}

const TypeRow = (props: TypeRowProps) => {
	const fontSizes = props.fontSizes
	return (
		<>
			{Object.keys(fontSizes).map((fontSize: string, index: number) => (
				<Row py={3} key={index}>
					<Row width={[null, 1 / 3]}>
						<Text as="span" display="flex" alignItems="center">
							{fontSizes[fontSize]}px
						</Text>
					</Row>
					<Row>
						<Text
							as="span"
							fontSize={fontSize}
							display="flex"
							alignItems="center"
						>
							{fontSize}
						</Text>
					</Row>
				</Row>
			))}
		</>
	)
}

export default () => (
	<Layout>
		<SEO title="Typography" />
		<Container>
			<Title fontSize="h3" my={6}>
				Typography
			</Title>

			<Title mb={5}>Font Family</Title>
			<Box mb={5}>
				<Text>Heading:</Text>
				<Title color="primary">Montserrat</Title>
			</Box>
			<Box mb={5}>
				<Text>Body:</Text>
				<Text color="primary">Work Sans</Text>
			</Box>
			<Box mb={5}>
				<Title>Font Sizes</Title>
				<TypeRow fontSizes={theme.fontSizes} />
			</Box>
			<Box mb={5}>
				<Title>Font Weight</Title>
				<Text>Working on it</Text>
			</Box>
		</Container>
	</Layout>
)
