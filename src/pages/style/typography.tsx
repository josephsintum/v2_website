import React from "react"
import Box, { Container, Row, Col } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import theme from "../../components/theme"

interface TypeRowProps {
	fontSizes: number[] | number
}

const TypeRow = (props: TypeRowProps) => {
	let fontSizes: number[]
	Array.isArray(props.fontSizes)
		? (fontSizes = props.fontSizes)
		: (fontSizes = [props.fontSizes])
	return (
		<>
			{fontSizes.map(
				(fontSize: number[] | number, index: string | number) => (
					<Row py={4} key={index}>
						<Box width={[null, 1 / 8]}>
							<Text>{index}</Text>
						</Box>
						<Box width={[null, 1 / 8]}>
							<Text>{fontSize}px</Text>
						</Box>
						<Box>
							<Text fontSize={fontSize}>Space Mono</Text>
						</Box>
					</Row>
				)
			)}
		</>
	)
}

export default () => (
	<Layout>
		<Container>
			<Title as="h1" fontSize={8} my={6}>
				Typography
			</Title>

			<Title as="h3" fontSize={6}>
				Font Family
			</Title>
			<Text mb="5" as="p">
				Space Mono
			</Text>

			<Title as="h3" fontSize={6}>
				Font Sizes
			</Title>
			<TypeRow fontSizes={theme.fontSizes} />
			<Title as="h3" fontSize={6}>
				Font Weight
			</Title>
			<Text>Working on it</Text>
		</Container>
	</Layout>
)
