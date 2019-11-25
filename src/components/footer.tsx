import React from "react"
import { Container } from "./box"
import { Title } from "./text"
import { ALink } from "./link"

export default () => (
	<Container py={6} mt="auto">
		<Title fontWeight={800} fontSize="h5">
			Let's work together
		</Title>
		<ALink href="mailto:joseph24jay@gmail.com">joseph24jay@gmail.com</ALink>
	</Container>
)
