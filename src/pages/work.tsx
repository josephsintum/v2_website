import React from "react"
import { MarkGithub } from "styled-icons/octicons/MarkGithub"
import { ExternalLink } from "styled-icons/remix-line/ExternalLink"
import Box, { Container, Row, Col } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import { Card, CardSection } from "../components"
import SEO from "../components/seo"
import { BaseALink } from "../components/link"

interface workListTypes
	extends Array<{
		title: string
		body: string
		github?: string
		link?: string
		techStack: string
	}> {}

const workList: workListTypes = [
	{
		title: "Joseph Sintum Portfolio",
		body:
			"A minimal personal website built using gatsby and styled-systems and hosted on Zeit now.",
		techStack: "TSX, Gatsby, Styled Components",
		github: "https://github.com/josephsintum/josephsintum.github.io",
		link: "https://josephsintum.now.sh/",
	},
	{
		title: "Go Webscraper",
		body:
			"Simple webscraper built in Golang. It searches for all forms on the San Jose City College website.",
		techStack: "Gonpm update -g\n",
		github: "https://github.com/josephsintum/go-webscraper",
		link:
			"https://docs.google.com/spreadsheets/d/1FE3UxyOIzQB-UZhXE1mffMr5B2kP7k9xhUa2NnxVIjA/edit?usp=sharing",
	},
]

export default () => (
	<Layout>
		<SEO title="Work" />

		<Container py={7}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900} mb={6}>
						Some Things I have built
					</Title>
				</Box>
				<Box>
					<Row>
						{workList.map((work, index: number) => (
							<Col
								key={`work_${index}`}
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
											{work.title}
										</Title>
									</CardSection>
									<CardSection>
										<Text>{work.body}</Text>
									</CardSection>
									<CardSection mt="auto">
										<Text fontSize="caption" color="grey">
											{work.techStack}
										</Text>
									</CardSection>
									<CardSection display="inline-flex" py={2}>
										<Box mr={4}>
											<BaseALink
												href={work.github}
												target="_blank"
											>
												<MarkGithub size="18" />
											</BaseALink>
										</Box>
										<Box mr={4}>
											<BaseALink
												href={work.link}
												target="_blank"
											>
												<ExternalLink size="18" />
											</BaseALink>
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
