import React from "react"
import { Row, Col } from "./box"
import Text, { Title } from "./text"

// TODO: work on types
const Clock = props => {
	const [date, setDate] = React.useState(new Date())

	React.useEffect(() => {
		var timerID = setInterval(() => tick(), 1000)
		return function cleanup() {
			clearInterval(timerID)
		}
	})

	function tick() {
		setDate(new Date())
	}

	return <Title {...props}>{date.toLocaleTimeString()}.</Title>
}

const Footer = props => {
	return (
		<Row my={5}>
			<Col>
				<Text as="p" textAlign="center">
					© {new Date().getFullYear()} — Designed & developed by
					Joseph Sintum
				</Text>
			</Col>
			<Col>
				<Text as="p" textAlign="center">
					<Text
						color="secondary"
						as="a"
						href="mailto:josephsintum@gmail.com"
					>
						Hire Me
					</Text>{" "}
					Time is running out <Clock />
				</Text>
			</Col>
		</Row>
	)
}

export default Footer
