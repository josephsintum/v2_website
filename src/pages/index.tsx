import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Block } from "baseui/block"
import { styled } from "baseui"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { H3 } from "baseui/typography"
import { Tabs, Tab } from "baseui/tabs-motion"

export default () => (
	<Layout>
		<SEO title="Home" />
		<Block
			as="main"
			padding={["0px 15px", "0px 25px", "0px 50px", "0px 150px"]}
			maxWidth="1600px"
			margin="auto"
		>
			<Hero />
			<About />
			<Experience />
		</Block>
	</Layout>
)

export const Section = styled(Block, {
	as: "section",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",
	alignItems: "flex-start",

	margin: "0px auto",
	maxWidth: "1000px",
})

export const Experience = () => {
	const [activeKey, setActiveKey] = React.useState<React.Key>(0)

	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3>Where I have worked</H3>
			<Tabs
				activeKey={activeKey}
				onChange={({ activeKey }) => setActiveKey(activeKey)}
			>
				<Tab title="First">I must not fear.</Tab>
				<Tab title="Second">Fear is the mind-killer.</Tab>
				<Tab title="Third">
					Fear is the little-death that brings total obliteration.
				</Tab>
			</Tabs>
		</Section>
	)
}
