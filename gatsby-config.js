module.exports = {
	siteMetadata: {
		title: `Joseph Sintum`,
		description: `My portfolio`,
		author: `@josephsintum`,
		siteUrl: `https://josephsintum.github.io/`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
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
				background_color: `#663399`,
				theme_color: `#663399`,
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
				fonts: [
					`Montserrat\::300,300i,500,500i,700,700i,900,900i`,
					`Work Sans\:300,400,500,700,900`,
				],
				display: "swap",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
