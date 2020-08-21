import { Section } from "./section"
import * as React from "react"
import { H3, Label3, H6, Paragraph2 } from "baseui/typography"
import { Tabs, Tab } from "baseui/tabs"

export const Experience = () => {
	const [activeKey, setActiveKey] = React.useState<React.Key>(0)

	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3>Where I have worked</H3>
			<Tabs
				activeKey={activeKey}
				onChange={({ activeKey }) => setActiveKey(activeKey)}
				renderAll
			>
				<Tab title="San Jose City College">
					<H6 marginBottom="5px">
						Project Assistant @ San Jose City College
					</H6>
					<Label3>Oct 2019 - Present</Label3>
					<ul>
						<Paragraph2 as="li">
							Maintain and update SJCC website built with
							Microsoft Sharepoint.
						</Paragraph2>
						<li>
							Design posters and graphics for the athletics page
							using Adobe PS and AI.
						</li>
						<li>
							Updating athletics website design using HTML/CSS and
							PrestoSport.
						</li>
						<li>
							Built a webscraper in Golang to scrape the SJCC
							website for forms.
						</li>
					</ul>
					Golang web scraper:
					https://github.com/josephsintum/go-webscraper <br />
					SJCC website: https://www.sjcc.edu/ <br />
					Athletics website: https://sjccjaguars.com/
				</Tab>

				<Tab title="Second">Fear is the mind-killer.</Tab>
				<Tab title="Third">
					Fear is the little-death that brings total obliteration.
				</Tab>
			</Tabs>
		</Section>
	)
}
