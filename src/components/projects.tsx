import * as React from "react"
import { Block } from "baseui/block"
import { Section } from "./section"
import { H3, H2, Paragraph2 } from "baseui/typography"
import { FlexGrid, FlexGridItem } from "baseui/flex-grid"
import { styled } from "baseui"
import { Tag } from "baseui/tag"

export const Projects = () => {
	return (
		<Section padding={["100px 0px", "150px 0px"]}>
			<H3>Some projects</H3>
			<Block maxWidth="1000px">
				<FlexGrid
					flexGridColumnCount={[1, 1, 2]}
					flexGridColumnGap="scale800"
					flexGridRowGap="scale800"
				>
					<FlexGridItem>
						<Image src="https://images.unsplash.com/photo-1597858715706-fb50f241946e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2851&q=80" />
					</FlexGridItem>
					<FlexGridItem>
						<H2>Some awesome project</H2>
						<Paragraph2>
							News platform that aggregates daily articles from
							500+ news publications and research institutes
							around the United States and leverages NLP models in
							conjunction with the Google Maps API to
						</Paragraph2>
						<Tag closeable={false}>Typescript</Tag>
						<Tag closeable={false}>NodeJS</Tag>
						<Tag closeable={false}>Mongoose</Tag>
						<Tag closeable={false}>Victory</Tag>
					</FlexGridItem>
				</FlexGrid>
			</Block>
		</Section>
	)
}

export const Image = styled("img", {
	width: "100%",
	height: "auto",
})
