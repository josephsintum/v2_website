import Document, { Html, Head, Main, NextScript } from "next/document"
import { Provider as StyletronProvider } from "styletron-react"
import { Server, Sheet } from "styletron-engine-atomic"
import { styletron } from "../styletron"

class MyDocument extends Document<{ stylesheets: Sheet[] }> {
	static getInitialProps(props: any) {
		const page = props.renderPage((App: any) => (props: any) => (
			<StyletronProvider value={styletron}>
				<App {...props} />
			</StyletronProvider>
		))
		const stylesheets = (styletron as Server).getStylesheets() || []
		return { ...page, stylesheets }
	}

	render() {
		return (
			<Html>
				<Head>
					{this.props.stylesheets.map((sheet, i) => (
						<style
							className="_styletron_hydrate_"
							dangerouslySetInnerHTML={{ __html: sheet.css }}
							media={sheet.attrs.media}
							data-hydrate={sheet.attrs["data-hydrate"]}
							key={i}
						/>
					))}
					<link
						href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/logo.png" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
