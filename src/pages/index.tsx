import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Block } from "baseui/block"
import { styled } from "baseui"
import { Hero } from "../components/hero"
import { About } from "../components/about"

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
