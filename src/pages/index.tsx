import React from "react"
import { Link } from "gatsby"
import Box from "../components/box"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div>
			<Link to="/">
				<Logo />
			</Link>
			<Box width={[1, 1 / 2]} p={4} mb={3} bg="navy" color="red">
				klsdf
			</Box>
		</div>
	</Layout>
)

export default IndexPage
