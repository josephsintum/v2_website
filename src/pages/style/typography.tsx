import React from "react"
import Box, { Container, Row } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import theme from "../../components/theme"
import SEO from "../../components/seo"

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
					<Row py={3} key={index}>
						<Row width={[null, 1 / 8]}>
							<Text as="span" display="flex" alignItems="center">
								{index}
							</Text>
						</Row>
						<Row width={[null, 1 / 8]}>
							<Text as="span" display="flex" alignItems="center">
								{fontSize}px
							</Text>
						</Row>
						<Row>
							<Text
								as="span"
								fontSize={fontSize}
								display="flex"
								alignItems="center"
							>
								Space Mono
							</Text>
						</Row>
					</Row>
				)
			)}
		</>
	)
}

export default () => (
	<Layout>
		<SEO title="Typography" />
		<Container>
			<Title fontSize={8} my={6}>
				Typography
			</Title>

			<Title fontSize={6}>Font Family</Title>
			<Text mb="5">Montserrat</Text>

			<Title fontSize={6}>Font Sizes</Title>
			<TypeRow fontSizes={theme.fontSizes} />
			<Title fontSize={6}>Font Weight</Title>
			<Text>Working on it</Text>
		</Container>
	</Layout>
)
