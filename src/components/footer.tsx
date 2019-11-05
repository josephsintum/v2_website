import React from "react"
import { Row, Col } from "./box"
import Text from "./text"

const Footer = props => {
	return (
		<Row>
			<Col>
				<Text as="p" textAlign="center">
					© {new Date().getFullYear()} — Designed & developed by
					Joseph Sintum
				</Text>
			</Col>
		</Row>
	)
}

export default Footer
