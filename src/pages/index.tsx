import React from "react"
import Box, { Container, Row, Col } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "../components/link"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Container>
			<Box py={[7, 8]}>
				<Title as="h1" fontSize={[6]}>
					I am Joseph Sintum
					<br />I create beautiful things with code
				</Title>
			</Box>
		</Container>
		<Box bg="primarys.0">
			<Container py={6}>
				<Row>
					<Col width={[null, 1 / 2]} pr={[null, 4]}>
						<Title as="h2" fontSize={[6]}>
							About me
						</Title>
						<Text>
							I am a self-taught Full Stack JavaScript Bay Area. I
							have been programming for 3 years with lots of
							experience in developing and maintaining Javascript,
							Typescript and React apps.
						</Text>
						<Text>
							I love minimal design and drawing.
							<br />
							I am currently learning Golang.
							<br />I love reading books and drinking tea.
						</Text>
					</Col>

					<Col width={[null, 1 / 2]}>
						<Title as="h2" fontSize={[6]}>
							Skills
						</Title>
						<Text> Frontend Development</Text>
						<Text color="primary">
							Javascript, HTML, SCSS
							<br /> React, Redux, Styled Components, GraphQL
							<br /> Adobe XD, Figma, Design Systems
						</Text>
						<Text>Backend</Text>
						<Text color="primary">
							Express, Passport, Auth0
							<br /> NodeJS, Prisma Graphql
						</Text>
					</Col>
				</Row>
			</Container>
		</Box>
		<Box>
			<Container py={6}>
				<Row>
					<Col width={[null, 1 / 2]} pr={[null, 4]}>
						<Title as="h2" fontSize={[6]}>
							Say hi
						</Title>
						<Text>joseph24jay@gmail.com</Text>
					</Col>
				</Row>
			</Container>
		</Box>
	</Layout>
)

export default IndexPage
