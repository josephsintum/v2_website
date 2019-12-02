import React from "react"
import Box, { Container, Row, Col } from "../components/box"
import Text, { Title } from "../components/text"
import Layout from "../components/layout"
import SEO from "../components/seo"

interface bookListTypes
	extends Array<{
		title: string
		author: string
		genre: string
		status?: boolean | 0 | 1
	}> {}

const bookList: bookListTypes = [
	{
		title: "12 Rules for life",
		author: "Jordan Peterson",
		genre: "self-help",
		status: false,
	},
	{
		title: "Crime and Punishment",
		author: "Fyodor Dostoyevsky",
		genre: "Crime Fiction, Psychological Fiction",
		status: false,
	},
	{
		title: "1984",
		author: "George Orwell		",
		genre: "Science, Dystopian, Social, Political fiction",
		status: true,
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
				<hr />
				<Box>
					<Title fontSize="h6" mb={5}>
						Books
					</Title>
					<Box display={["none", "block"]}>
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
					</Box>
					{bookList.map((book, index: number) => (
						<Row
							bg={index % 2 == 0 ? "primarys.0" : "white"}
							py={4}
							key={`book_${index}`}
						>
							<Col width={[null, 1 / 2]}>
								<Text fontWeight={500} mb={2}>
									{book.title}
								</Text>
								<Text mb={0} fontSize="caption">
									{book.author}
								</Text>
							</Col>
							<Col width={[null, 1 / 4]}>
								<Text mb={0}>{book.genre}</Text>
							</Col>
							<Col width={[null, 1 / 4]}>
								<Text>{book.status ? "done" : "reading"}</Text>
							</Col>
						</Row>
					))}
				</Box>
			</Box>
		</Container>
	</Layout>
)
