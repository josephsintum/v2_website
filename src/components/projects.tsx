import * as React from "react"
import { Block } from "baseui/block"
import { Section } from "./section"
import { H3, H4, Paragraph2 } from "baseui/typography"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { styled } from "baseui"
import { Tag } from "baseui/tag"
import { StyledLink as Link } from "baseui/link"

const data = [
	{
		name: "News Popular Word Visualization",
		description:
			"This is a graph visualization of the most popular words on news.\n" +
			"It checks the most popular news articles every 15mins and makes a list of the most used words. This data is sent to the frontend and rendered into a graph showing the last 24 hours of statistics.\n",
		tags: [
			"React",
			"Next.js",
			"Victory Charts",
			"Baseweb UI",
			"Mongoose",
			"TypeScript",
		],
		links: [
			{
				name: "Github",
				url: "https://github.com/josephsintum/words-visualizations",
			},
			{
				name: "Demo",
				url: "https://words-stats.vercel.app/",
			},
		],
		image:
			"https://raw.githubusercontent.com/josephsintum/words-visualizations/master/public/screenshot.png",
	},
	{
		name: "josephsintum.now.sh",
		description: "Personal Website \n" + "Open Sourced on github.",
		tags: ["React", "Gatsby", "Baseweb UI", "TypeScript"],
		links: [
			{
				name: "Github",
				url: "https://github.com/josephsintum/my_website",
			},
			{
				name: "Website",
				url: "https://josephsintum.now.sh/",
			},
		],
		image:
			"https://images.unsplash.com/photo-1597858715706-fb50f241946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80",
	},
]

export const Projects = () => {
	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3 font="HeadingLarge" $style={{ fontWeight: "bold" }}>
				Some Projects
			</H3>
			<Block maxWidth="1000px">
				{data.map((project, pIndex) => (
					<FlexGrid
						flexGridColumnCount={[1, 1, 2]}
						flexGridColumnGap="scale1000"
						flexGridRowGap="scale1000"
						marginBottom="scale1000"
						key={`${pIndex}.Project`}
					>
						<FlexGridItem display="flex">
							<Image
								style={{ margin: "auto" }}
								src={project.image}
							/>
						</FlexGridItem>
						<FlexGridItem>
							<H4 font="HeadingMedium">{project.name}</H4>
							<Paragraph2>{project.description}</Paragraph2>
							<Paragraph2 $style={{ fontFamily: "Space Mono" }}>
								{project.tags.map((tag, tIndex) => (
									<Tag
										key={`${tIndex}${pIndex}tag`}
										closeable={false}
										overrides={{
											Text: {
												style: ({ $theme }) => {
													return {
														fontFamily:
															$theme.typography
																.LabelXSmall
																.fontFamily,
													}
												},
											},
										}}
									>
										{tag}
									</Tag>
								))}
							</Paragraph2>
							{project.links.map((link, lIndex) => (
								<React.Fragment key={`${lIndex}${pIndex}link`}>
									<Link href={link.url}>{link.name}</Link>
									<br />
								</React.Fragment>
							))}
						</FlexGridItem>
					</FlexGrid>
				))}
			</Block>
		</Section>
	)
}

export const Image = styled("img", ({ $theme }) => {
	return {
		width: "100%",
		height: "auto",
		maxWidth: "500px",
		boxShadow: $theme.lighting.shadow700,
		borderRadius: "5px",
	}
})
