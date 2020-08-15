import React from "react"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
	<div>
		<SEO title="404: Not found" />
		<div>
			<h1>404</h1>
			<p>The page you were looking for was not found.</p>
			<br />
			<Link to="/">Return Home</Link>
		</div>
	</div>
)

export default NotFoundPage
