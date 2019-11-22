import React from "react"
import Box, { Container, Row, Col } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ALink } from "../components/link"

export default () => (
	<Layout>
		<SEO title="About" />

		<Container py={7}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize="h3" mb={6}>
						About
					</Title>
					<Text>
						I am a self-taught Full Stack JavaScript Bay Area. I
						have been programming for 3 years with lots of
						experience in developing and maintaining Javascript,
						Typescript and React apps.
					</Text>
					<Text>
						I am working at San Jose City College as Web Master. My
						time is spent maintaining and updating the San Jose City
						College{" "}
						<ALink href="http://www.sjcc.edu/" target="_blank">
							School
						</ALink>{" "}
						and{" "}
						<ALink
							href="http://www.sjccjaguars.com/"
							target="_blank"
						>
							Athletics
						</ALink>{" "}
						websites, contributing to open source projects and just
						learning new technologies.
					</Text>
					<Text>
						Out of work, I spend my time reading reading books,
						drawing, drinking tea or coffee and just learning
						languages like Golang or French. C'est tres amusant.
					</Text>
				</Box>
				<hr />
				<Box>
					<Title fontSize="h5">Skills</Title>
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
				</Box>
			</Box>
		</Container>
	</Layout>
)
