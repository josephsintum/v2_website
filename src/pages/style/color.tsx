import React from "react"
import Box, { Container, Row, Col } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import theme from "../../components/theme"
import SEO from "../../components/seo"

// TODO update types for lightOrDark Method
/** lightOrDark checks if a color is light and returns true */
function lightOrDark(color): boolean {
	// Variables for red, green, blue values
	var r, g, b, hsp

	// Check the format of the color, HEX or RGB?
	if (color.match(/^rgb/)) {
		// If HEX --> store the red, green, blue values in separate variables
		color = color.match(
			/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
		)

		r = color[1]
		g = color[2]
		b = color[3]
	} else {
		// If RGB --> Convert it to HEX: http://gist.github.com/983661
		color = +(
			"0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&")
		)

		r = color >> 16
		g = (color >> 8) & 255
		b = color & 255
	}

	// HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
	hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b))

	// Using the HSP value, determine whether the color is light or dark
	if (hsp > 127.5) {
		return true
	} else {
		return false
	}
}

interface ColorPaletteProps {
	colors: string[] | string
	paletteName: string
}

const ColorPalette = (props: ColorPaletteProps) => {
	let colors: string[]
	Array.isArray(props.colors)
		? (colors = props.colors)
		: (colors = [props.colors])
	return (
		<>
			{colors.map((color: string, index: string | number) => (
				<Row
					textAlign="center"
					bg={color}
					py={4}
					key={index}
					color={lightOrDark(color) ? "black" : "white"}
				>
					<Col>
						<Text fontWeight="bold">
							{props.paletteName}
							{colors.length > 1 ? "." + index : null}
						</Text>
					</Col>
					<Col>
						<Text>{color}</Text>
					</Col>
				</Row>
			))}
		</>
	)
}

const BorderBox = props => (
	<Box
		borderColor="grays.4"
		borderWidth={1}
		borderStyle="solid"
		borderRadius="default"
		mb={5}
		{...props}
	/>
)

export default () => (
	<Layout>
		<SEO title="Color" />
		<Container>
			<Title as="h1" fontSize={8} my={6}>
				Color
			</Title>
			{/* black section */}
			<Title as="h3" fontSize={6}>
				Black
			</Title>
			<BorderBox>
				<ColorPalette colors={theme.colors.black} paletteName="black" />
			</BorderBox>
			{/* white section */}
			<Title as="h3" fontSize={6}>
				White
			</Title>
			<BorderBox>
				<ColorPalette colors={theme.colors.white} paletteName="white" />
			</BorderBox>
			{/* primary section */}
			<Title as="h3" fontSize={6}>
				Primary
			</Title>
			<BorderBox>
				<ColorPalette
					colors={theme.colors.primary}
					paletteName="primary"
				/>
			</BorderBox>
			<BorderBox>
				<ColorPalette
					colors={theme.colors.primarys}
					paletteName="primary"
				/>
			</BorderBox>
			{/* gray section */}
			<Title as="h3" fontSize={6}>
				Gray
			</Title>
			<BorderBox>
				<ColorPalette colors={theme.colors.grays} paletteName="grays" />
			</BorderBox>
			{/* red section */}
			<Title as="h3" fontSize={6}>
				Red
			</Title>
			<BorderBox>
				<ColorPalette colors={theme.colors.red} paletteName="red" />
			</BorderBox>
			<BorderBox>
				<ColorPalette colors={theme.colors.reds} paletteName="red" />
			</BorderBox>
			{/* red section */}
			<Title as="h3" fontSize={6}>
				Green
			</Title>
			<BorderBox>
				<ColorPalette colors={theme.colors.green} paletteName="green" />
			</BorderBox>
			<BorderBox>
				<ColorPalette
					colors={theme.colors.greens}
					paletteName="greens"
				/>
			</BorderBox>
			{/* yellow section */}
			<Title as="h3" fontSize={6}>
				Yellow
			</Title>
			<BorderBox>
				<ColorPalette
					colors={theme.colors.yellow}
					paletteName="yellow"
				/>
			</BorderBox>
			<BorderBox>
				<ColorPalette
					colors={theme.colors.yellows}
					paletteName="yellow"
				/>
			</BorderBox>
		</Container>
	</Layout>
)
