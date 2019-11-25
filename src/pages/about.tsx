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
					<Title fontSize="h6">Books</Title>
					<Row color="grey" fontSize="caption">
						<Col width={1 / 2}>
							<Text>BOOK</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>GENRE</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>STATUS</Text>
						</Col>
					</Row>
					<Row bg="primarys.0" py={4}>
						<Col width={1 / 2}>
							<Text fontWeight={500} mb={2}>
								12 Rules for life
							</Text>
							<Text mb={0} fontSize="caption">
								Jordan Peterson
							</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>Self-help</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>reading</Text>
						</Col>
					</Row>
					<Row py={4}>
						<Col width={1 / 2}>
							<Text fontWeight={500} mb={2}>
								Crime and Punishment
							</Text>
							<Text mb={0} fontSize="caption">
								Fyodor Dostoyevsky
							</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>Crime Fiction, Psychological Fiction </Text>
						</Col>
						<Col width={1 / 4}>
							<Text>reading</Text>
						</Col>
					</Row>
					<Row bg="primarys.0" py={4}>
						<Col width={1 / 2}>
							<Text fontWeight={500} mb={2}>
								1984
							</Text>
							<Text mb={0} fontSize="caption">
								George Orwell
							</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>
								Science, Dystopian, Social, Political fiction
							</Text>
						</Col>
						<Col width={1 / 4}>
							<Text>done</Text>
						</Col>
					</Row>
				</Box>
			</Box>
		</Container>
	</Layout>
)
