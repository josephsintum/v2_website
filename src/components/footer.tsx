import React from "react"
import Box from "./box"
import Text from "./text"

export default props => (
	<Box my={6}>
		<Text textAlign="center">
			© {new Date().getFullYear()} — Designed & Developed by Joseph Sintum
		</Text>
	</Box>
)
