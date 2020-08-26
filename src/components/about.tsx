import * as React from "react"
import { H3, Paragraph2 } from "baseui/typography"
import { useStyletron } from "baseui"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { Skeleton } from "baseui/skeleton"
import { Section } from "./section"
import { Li } from "./list"

export const About = () => {
	const [css] = useStyletron()

	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3>About Me</H3>
			<FlexGrid
				flexGridColumnCount={[1, 1, 2]}
				flexGridColumnGap="scale2400"
				flexGridRowGap="scale800"
				alignItems="flex-start"
				justifyContent="space-between"
			>
				<FlexGridItem>
					<Paragraph2
						$style={{ textAlign: "justify" }}
						marginTop="0px"
					>
						Hi. I'm Joseph, a Javascript developer based in San
						Jose. I am a self-taught. I have been programming for 3
						years with lots of experience in developing and
						maintaining Javascript, Typescript and React apps.
						<br />
						<br /> I am working at San Jose City College as Web
						Master. My time is spent maintaining and updating the
						San Jose City College School and Athletics websites,
						contributing to open source projects and just learning
						new technologies.
						<br />
						<br />
						Out of work, I spend my time reading reading books,
						drawing, hiking and just learning languages like Golang
						or French. C'est tres amusant.
					</Paragraph2>
					<ul
						className={css({
							textAlign: "justify",
							display: "grid",
							gridTemplateColumns: "200px 200px",
							padding: "0px",
						})}
					>
						{[
							"Javascript & TS",
							"React",
							"Node.js",
							"Express",
							"HTML, CSS (in JS)",
							"Victory Charts",
							"Mongoose (MongoDB)",
							"Figma",
						].map((item, index) => (
							<Li key={`${index}list`}>{item}</Li>
						))}
					</ul>
				</FlexGridItem>
				<FlexGridItem>
					<Skeleton height="400px" animation />
				</FlexGridItem>
			</FlexGrid>
		</Section>
	)
}
