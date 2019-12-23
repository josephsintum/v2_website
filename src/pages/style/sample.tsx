import React from "react"
import Box, { Container, Col, Row } from "../../components/box"
import Text, { Title } from "../../components/text"
import Layout from "../../components/layout"
import { Card, CardSection, CardButton, CardMedia } from "../../components"
// import theme from "../../components/theme"

export default () => (
	<Layout>
		<Container>
			<Title fontSize={["h4", "h3"]} my={6}>
				Sample
			</Title>
			{/* black section */}
			<Title fontSize="h5">Subtitle</Title>
			<Text>Hello world</Text>
			<Box />
			<Row>
				<Col p={3}>
					<Card>
						<CardMedia imageUrl="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc" />
						<CardSection>
							<Title fontSize="h6">Our Changing Planet</Title>
							<Text fontSize="subtitle">by Kurt Wagner</Text>
						</CardSection>
						<CardSection>
							<Text color="gray">
								Visit ten places on our planet that are
								undergoing the biggest changes today.
							</Text>
						</CardSection>
						<CardSection>
							<CardButton>Read</CardButton>
						</CardSection>
					</Card>
				</Col>
				<Col p={3}>
					<Card>
						<CardMedia imageUrl="https://images.unsplash.com/photo-1574093180049-73055d3ababd" />
						<CardSection>
							<Title fontSize="h6">Our Changing Planet</Title>
							<Text fontSize="subtitle">by Kurt Wagner</Text>
						</CardSection>
						<CardSection>
							<Text color="gray">
								Visit ten places on our planet that are
								undergoing the biggest changes today.
							</Text>
						</CardSection>
						<CardSection>
							<CardButton>Read</CardButton>
							<CardButton>Bookmark</CardButton>
						</CardSection>
					</Card>
				</Col>
				<Col p={3}>
					<Card>
						<CardSection>
							<Title fontSize="h6">Our Changing Planet</Title>
							<Text fontSize="subtitle">by Kurt Wagner</Text>
						</CardSection>
						<CardMedia imageUrl="https://images.unsplash.com/photo-1574174227799-c3697c71352a" />
						<CardSection>
							<Text color="gray">
								Visit ten places on our planet that are
								undergoing the biggest changes today.
							</Text>
						</CardSection>
						<CardSection>
							<CardButton>Read</CardButton>
						</CardSection>
					</Card>
				</Col>
			</Row>
		</Container>
	</Layout>
)
