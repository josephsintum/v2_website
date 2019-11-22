import React from "react"
import Box, { Container } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ALink } from "../components/link"

export default () => (
	<Layout>
		<SEO title="Experience" />

		<Container py={7}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize="h3" mb={6}>
						Experience
					</Title>
					<Text>Download a copy of my CV below.</Text>
					<ALink>Download CV &#x21E9;</ALink>
					<Box my={5}>
						<hr />
					</Box>
					<Box mb={5}>
						<Title fontSize="subtitle">
							San Jose City College -{" "}
							<Text as="span" color="primary">
								Project Assistant
							</Text>
						</Title>
						<Text fontSize="caption" color="gray">
							OCT 2019 - PRESENT
						</Text>
						<Text>Work in progress</Text>
					</Box>
					<hr />
					<Box my={5}>
						<Title fontSize="subtitle">
							Thrive Agric -{" "}
							<Text as="span" color="primary">
								Frontend Web Developer
							</Text>
						</Title>
						<Text fontSize="caption" color="gray">
							JUNE 2018 - JULY 2019
						</Text>
						<Text>
							<ALink href="https://thriveagric.com/">
								Thrive Agric
							</ALink>{" "}
							is an agricultural technology startup that connects
							farmers to investors, finance, premium markets and
							passionate about ensuring global food security and
							democratising agricultural participation.
							<br />
							<ul>
								<li>
									Designed reusable user interface components
									with React.js and Javascript ES6; managed
									application state with Redux
								</li>
								<li>
									Contributed in continuous integration and
									continuous deployment by making pull request
									with Gitlab and Google Cloud Platform CI
								</li>
								<li>
									Participate and improve software processes
									such as Agile, Scrum, Kanban along with
									strong task coordination processes related
									to software testing and deployment.
								</li>
								<li>
									Continuous refactor and optimize the REST
									API system to improve the efficiency of the
									development cycles and request times.
								</li>
								<li>
									Collaborate with the UI Designer on user
									centric design and provide animations, CSS
									and Web App outputs.
								</li>
								<li>
									Design and work with tools for Workload
									Automation production to reduce product
									delivery time to market.
								</li>
								<li>
									Did on site SEO(Search Engine Optimization)
									implementations to increase traffic to
									client websites
								</li>
							</ul>
						</Text>
					</Box>
					<hr />
					<Box mb={5}>
						<Title fontSize="subtitle">
							Iknite Studio -{" "}
							<Text as="span" color="primary">
								Web Developer
							</Text>
						</Title>
						<Text fontSize="caption" color="gray">
							OCT 2019 - PRESENT
						</Text>
						<Text>Work in progress</Text>
					</Box>
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
