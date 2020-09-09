import * as React from "react"
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList,
} from "baseui/header-navigation"
import { Button, KIND } from "baseui/button"
import { Drawer } from "baseui/drawer"
import { ListItem, ListItemLabel } from "baseui/list"
import { useStyletron } from "baseui"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"
import { Menu } from "baseui/icon"
import { HeadingSmall } from "baseui/typography"
import scrollTo from "gatsby-plugin-smoothscroll"

export default () => {
	const [css, theme] = useStyletron()
	const [isOpen, setIsOpen] = React.useState(false)

	const headerMenu = [
		{ text: "About", href: "#about" },
		{ text: "Work", href: "#work" },
		{ text: "Experience", href: "#experience" },
		{ text: "Contact", href: "#contact" },
		{
			text: "Resume",
			external: true,
			href:
				"https://docs.google.com/document/d/1TLKoDJgQC2NwV33Dq5M0UynCcnr5GLrJP7ASlLIa5Wg/export?format=pdf",
		},
	]

	return (
		<Block
			position="fixed"
			top={0}
			left={0}
			width="100vw"
			$style={{ zIndex: 100 }}
		>
			<HeaderNavigation
				overrides={{
					Root: {
						style: {
							maxWidth: "1400px",
							margin: "auto",
							backgroundColor: "#fff",
							paddingTop: "12px",
							paddingBottom: "12px",
							paddingLeft: "20px",
							paddingRight: "20px",
						},
					},
				}}
			>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem>
						<HeadingSmall margin={0}>
							<StyledLink
								href="/"
								$style={{
									textDecoration: "none",
									color: "#000",
									":visited": {
										color: "none",
									},
									":hover": {
										color: "#000",
									},
								}}
							>
								JOSEPH SINTUM
							</StyledLink>
						</HeadingSmall>
					</NavigationItem>
				</NavigationList>

				<NavigationList $align={ALIGN.center} />

				<NavigationList $align={ALIGN.right}>
					{/*Desktop Header*/}
					<Block display={["none", "none", "none", "flex"]}>
						<NavigationList $align={ALIGN.right}>
							{headerMenu.map((link) => (
								<NavigationItem key={`${link.text}_desktop`}>
									{link.external ? (
										<a
											className={css({
												textDecoration: "none",
												color: "#757575",
												padding: "0 10px",
												fontSize:
													theme.typography
														.ParagraphMedium
														.fontSize,
												fontFamily:
													theme.typography
														.DisplayMedium
														.fontFamily,
												":hover": {
													color: "#000",
												},
											})}
											href={link.href}
											target="_blank"
										>
											{link.text}
										</a>
									) : (
										<Button
											kind={KIND.minimal}
											onClick={() => scrollTo(link.href)}
										>
											{link.text}
										</Button>
									)}
								</NavigationItem>
							))}
						</NavigationList>
					</Block>

					{/*Mobile Header*/}
					<Block display={["flex", "flex", "flex", "none"]}>
						<Button
							kind="tertiary"
							onClick={() => setIsOpen(!isOpen)}
						>
							<Menu size={28} />
						</Button>
						<Drawer
							isOpen={isOpen}
							autoFocus
							renderAll
							onClose={() => setIsOpen(false)}
							overrides={{
								Root: {
									style: {
										zIndex: 100,
									},
								},
							}}
						>
							<ul
								className={css({
									width: "100%",
									paddingLeft: 0,
									paddingRight: 0,
								})}
							>
								{headerMenu.map((link) =>
									link.external ? (
										<ListItem
											key={`${link.text}_mobile`}
											overrides={{
												Content: {
													style: {
														textDecoration: "none",
														outline:
															"0px transparent",
													},
													props: {
														$as: "a",
														href: link.href,
														target: "_blank",
													},
												},
											}}
										>
											<ListItemLabel>
												{link.text}
											</ListItemLabel>
										</ListItem>
									) : (
										<ListItem
											key={`${link.text}_mobile`}
											overrides={{
												Content: {
													props: {
														onClick: () => {
															setIsOpen(false)
															scrollTo(link.href)
														},
													},
												},
											}}
										>
											<ListItemLabel>
												{link.text}
											</ListItemLabel>
										</ListItem>
									)
								)}
							</ul>
						</Drawer>
					</Block>
				</NavigationList>
			</HeaderNavigation>
		</Block>
	)
}
