import React from "react"
import { MarkGithub } from "styled-icons/octicons/MarkGithub"
import { ExternalLink } from "styled-icons/remix-line/ExternalLink"
import Box, { Container, Row, Col } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import { Card, CardSection } from "../components/card/card"
import SEO from "../components/seo"

interface projectListTypes
	extends Array<{
		title: string
		body: string
		github?: string
		link?: string
		techStack: string
	}> {}

const projectList: projectListTypes = [
	{
		title: "Joseph Sintum Portfolio",
		body:
			"A minimal personal website built using gatsby and styled-systems and hosted on Zeit now.",
		techStack: "TSX, Gatsby, Styled Components",
		github: "https://github.com/josephsintum/josephsintum.github.io",
		link: "https://josephsintum.now.sh/",
	},
	{
		title: "Test",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		techStack: "JS, Express, Docker",
		github: "https://github.com/josephsintum/josephsintum.github.io",
		link: "https://josephsintum.now.sh/",
	},
	{
		title: "Test",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		techStack: "JS, Express, Docker",
		github: "https://github.com/josephsintum/josephsintum.github.io",
		link: "https://josephsintum.now.sh/",
	},
	{
		title: "Test",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
		techStack: "JS, Express, Docker",
		github: "https://github.com/josephsintum/josephsintum.github.io",
		link: "https://josephsintum.now.sh/",
	},
]

export default () => (
	<Layout>
		<SEO title="Projects" />

		<Container py={7}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize="h3" fontWeight={900} mb={6}>
						Projects
					</Title>
					<Text>Lorem ipsum about projects</Text>
				</Box>
				<Box>
					<Row>
						{projectList.map((project, index: number) => (
							<Col
								key={`project_${index}`}
								width={["100%", "50%"]}
								mb={5}
							>
								<Card
									height="100%"
									display="flex"
									flexDirection="column"
								>
									<CardSection>
										<Title fontSize="h6">
											{project.title}
										</Title>
									</CardSection>
									<CardSection>
										<Text>{project.body}</Text>
									</CardSection>
									<CardSection mt="auto">
										<Text fontSize="caption" color="grey">
											{project.techStack}
										</Text>
									</CardSection>
									<CardSection display="inline-flex" py={2}>
										<Box mr={4}>
											<MarkGithub size="18" />
										</Box>
										<Box mr={4}>
											<ExternalLink size="18" />
										</Box>
									</CardSection>
								</Card>
							</Col>
						))}
					</Row>
				</Box>
			</Box>
		</Container>
	</Layout>
)
