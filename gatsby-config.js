module.exports = {
	siteMetadata: {
		title: `Joseph Sintum`,
		description: `My portfolio`,
		author: `@josephsintum`,
		siteUrl: `https://sintum.vercel.app/`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Joseph Sintum`,
				short_name: `porfolio`,
				start_url: `/`,
				background_color: `#3b5bdb`,
				theme_color: `#3b5bdb`,
				display: `minimal-ui`,
				icon: `src/images/logo.png`,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				output: `/sitemap.xml`,
				exclude: ["/404/*"],
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "XXXXXXXX",
				head: false,
				respectDNT: true,
			},
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Space Mono\:400,400i,700,700i`, `Karla`],
				display: "swap",
			},
		},
		{
			resolve: "gatsby-plugin-styletron",
			options: {
				// You can pass options to Styletron.
				// Prefix all generated classNames:
				prefix: "_",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
