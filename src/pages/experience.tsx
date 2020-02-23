import React from "react"
import Box, { Container } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ALink } from "../components/link"
import { FileDownload } from "styled-icons/fa-solid/FileDownload"

export default () => (
	<Layout>
		<SEO title="Experience" />

		<Container py={7}>
			<Box m="auto" maxWidth={680} justifyContent="center">
				<Box mb={5}>
					<Title fontSize={["h4", "h3"]} fontWeight={900} mb={6}>
						Experience
					</Title>
					<Text>Download a copy of my CV below.</Text>
					<ALink
						href="https://docs.google.com/document/d/1TLKoDJgQC2NwV33Dq5M0UynCcnr5GLrJP7ASlLIa5Wg/export?format=pdf"
						target="_blank"
					>
						Download Resume <FileDownload size={18} />
					</ALink>
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
						<ul>
							<li>
								Maintain and update SJCC website built with
								Microsoft Sharepoint.
							</li>
							<li>
								Design posters and graphics for the athletics
								page using Adobe PS and AI.
							</li>
							<li>
								Updating athletics website design using HTML/CSS
								and PrestoSport.
							</li>
							<li>
								Built a webscraper in{" "}
								<Text as="span" fontWeight={"bold"}>
									Golang
								</Text>{" "}
								to scrape the SJCC website for forms.
							</li>
						</ul>
						<br />
						<Text>
							Golang web scraper:
							<ALink
								href="https://github.com/josephsintum/go-webscraper"
								target="_blank"
							>
								https://github.com/josephsintum/go-webscraper
							</ALink>
							<br />
							SJCC website:
							<ALink href="https://www.sjcc.edu/" target="_blank">
								https://www.sjcc.edu/
							</ALink>
							<br />
							Athletics website:
							<ALink
								href="https://sjccjaguars.com/"
								target="_blank"
							>
								{" "}
								https://sjccjaguars.com/
							</ALink>
						</Text>
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
						<ul>
							<li>
								Built homepage and dashboard with reusable
								components using React.js and Redux.
							</li>
							<li>
								Reduced the number of request queries by 15% by
								restructuring API.
							</li>
							<li>
								Restructured and server-rendered homepage to
								improve SEO.
							</li>
							<li>
								Designed and built a style guide in React.js and
								Reactstrap (React Bootstrap 4 components).
							</li>

							<li>
								Collaborated with the UI Designer on
								user-centric design and reusable components for
								the style guide.
							</li>
							<li>
								Reduced frontend code complexity and increased
								component reusability by using Redux for state
								management.
							</li>
							<li>
								Decreased development time by 25% by
								implementing CI/CD with Gitlab and Google Cloud
								Platform.
							</li>
							<li>
								Deployed application with Kubernetes on Google
								Kubernetes Engine.
							</li>
							<li>
								Explored agile methodologies like Scrum and
								Kanban board using asana.
							</li>
						</ul>
						<Text>
							Thrive Agric:{" "}
							<ALink
								href={"https://thriveagric.com/"}
								target="_blank"
							>
								https://thriveagric.com/
							</ALink>
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
							Formerly Colorfluid Creative Agency
							<br />
							OCT 2019 - PRESENT
						</Text>
						<ul>
							<li>
								Created and maintained CMS sites using Wordpress
								and Drupal.
							</li>
							<li>Developed custom WordPress plugins in PHP.</li>
							<li>
								Modified WordPress themes CSS to fit design.
							</li>
							<li>
								Increased website traffic by 15% by setting up
								site XML and SEO.
							</li>
						</ul>
						<Text>
							Links to work
							<br />
							Iknite Studio:{" "}
							<ALink
								href={"http://iknite.studio/home/"}
								target="_blank"
							>
								http://iknite.studio/home/
							</ALink>
							<br />
							Colorfluid:{" "}
							<ALink
								href={"http://colorfluid.com/"}
								target="_blank"
							>
								http://colorfluid.com/
							</ALink>{" "}
							<br />
							Motion Fountain:{" "}
							<ALink
								href={"http://motionfountain.net"}
								target="_blank"
							>
								http://motionfountain.net
							</ALink>{" "}
							/<br />
							Afya Tea:{" "}
							<ALink
								href={"https://afyatea.com/"}
								target="_blank"
							>
								https://afyatea.com/
							</ALink>
							<br />
							Karawa Diary Blog:{" "}
							<ALink
								href={"https://karawadiary.life/"}
								target="_blank"
							>
								https://karawadiary.life/
							</ALink>
							<br />
						</Text>
					</Box>
				</Box>
				<hr />
				<Box>
					<Title fontSize="h5">Skills</Title>
					<Text>
						JavaScript, Typescript
						<br />
						HTML/CSS
						<br />
						React, Redux, Styled Components
						<br />
					</Text>
					<Text>
						NodeJS
						<br />
						Express.js, MongoDB
						<br />
						Linux, Bash
						<br />
					</Text>
					<Text>
						Adobe XD, Figma
						<br />
						Adobe Illustrator, Photoshop
						<br />
					</Text>
				</Box>
			</Box>
		</Container>
	</Layout>
)
