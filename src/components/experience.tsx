import * as React from "react"
import { Section } from "./section"
import { H3, Label3, H6, Paragraph2 } from "baseui/typography"
import { Tabs, Tab, FILL } from "baseui/tabs-motion"
import { StyledLink as Link } from "baseui/link"
import { Li } from "./list"

const work = [
	{
		company: "San Jose City College",
		location: "San Jose CA",
		position: "Project Assistant",
		startTime: "October 2019",
		endTime: "Present",
		tasks: [
			"Maintain and update SJCC website built with Microsoft Sharepoint.",
			"Design posters and graphics for the athletics page using Adobe PS and AI.",
			"Updating athletics website design using HTML/CSS and PrestoSport.",
			"Built a webscraper in Golang to scrape the SJCC website for forms.",
		],
		links: [
			{
				name: "Golang web scraper",
				url: "https://github.com/josephsintum/go-webscraper",
			},
			{
				name: "SJCC website",
				url: "https://www.sjcc.edu/",
			},
			{
				name: "Athletics website",
				url: "https://sjccjaguars.com/",
			},
		],
	},
	{
		company: "Thrive Agric",
		location: "Abuja, Nigeria",
		position: "Frontend Developer",
		startTime: "June 2018",
		endTime: "July 2019",
		tasks: [
			"Built homepage and dashboard with reusable components using React.js and Redux.",
			"Reduced the number of request queries by 15% by restructuring API.",
			"Restructured and server-rendered homepage to improve SEO.",
			"Designed and built a style guide in React.js and Reactstrap (React Bootstrap 4 components).",
			"Collaborated with the UI Designer on user-centric design and reusable components for the style guide.",
			"Reduced frontend code complexity and increased component reusability by using Redux for state management.",
			"Decreased development time by 25% by implementing CI/CD with Gitlab and Google Cloud Platform.",
			"Deployed application with Kubernetes on Google Kubernetes Engine.",
			"Explored agile methodologies like Scrum and Kanban board using asana.",
		],
		links: [
			{
				name: "Thrive Agric",
				url: "https://thriveagric.com/",
			},
		],
	},
	{
		company: "Iknite Studio",
		location: "Buea Cameroon",
		position: "Web Developer",
		startTime: "Febuary 2018",
		endTime: "July 2018",
		tasks: [
			"Created and maintained CMS sites using Wordpress and Drupal.",
			"Developed custom WordPress plugins in PHP.",
			"Modified WordPress themes CSS to fit design.",
			"Increased website traffic by 15% by setting up site XML and SEO.",
		],
		links: [
			{
				name: "Iknite Studio",
				url: "http://iknite.studio/home/",
			},
			{
				name: "Colorfluid",
				url: "http://colorfluid.com/",
			},
			{
				name: "Motion Fountain",
				url: "http://motionfountain.net/",
			},
			{
				name: "Afya Tea",
				url: " https://afyatea.com/",
			},
		],
	},
]

export const Experience = () => {
	const [activeKey, setActiveKey] = React.useState<React.Key>(0)

	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3>Where I have worked</H3>
			<Tabs
				activeKey={activeKey}
				onChange={({ activeKey }) => {
					setActiveKey(activeKey)
				}}
				fill={FILL.fixed}
				activateOnFocus
				renderAll
			>
				{work.map((data, index) => (
					<Tab title={data.company} key={index}>
						<H6 marginBottom="5px">
							{data.position} @ {data.company}, {data.location}
						</H6>
						<Label3>
							{data.startTime} - {data.endTime}
						</Label3>
						<ul>
							{data.tasks.map((task, index) => (
								<Li key={`${index}_task`}>{task}</Li>
							))}
						</ul>
						{data.links.map((link, index) => (
							<Paragraph2 key={`${index}_link`}>
								{link.name}
								{": "}
								<Link href={link.url}>{link.url}</Link>
								<br />
							</Paragraph2>
						))}
					</Tab>
				))}
			</Tabs>
		</Section>
	)
}
