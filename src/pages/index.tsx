import * as React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Block } from "baseui/block"
import { Hero } from "../components/hero"
import { About } from "../components/about"
import { Experience } from "../components/experience"
import { Projects } from "../components/projects"
import { Contact } from "../components/contact"

const Index = () => (
	<Layout>
		<SEO title="Home" description="Home page" />
		<Block
			as="main"
			padding={["0px 15px", "0px 25px", "0px 50px", "0px 150px"]}
			maxWidth="1600px"
			margin="auto"
		>
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Contact />
		</Block>
	</Layout>
)

export default Index
