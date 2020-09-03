import * as React from "react"
import {
	HeaderNavigation,
	ALIGN,
	StyledNavigationItem as NavigationItem,
	StyledNavigationList as NavigationList,
} from "baseui/header-navigation"
import { Button } from "baseui/button"
import { useStyletron } from "baseui"
import { StyledLink } from "baseui/link"
import { Block } from "baseui/block"

export default () => {
	const [css, theme] = useStyletron()
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
							padding: "12px 50px",
							maxWidth: "1400px",
							margin: "auto",
							backgroundColor: "#fff",
						},
					},
				}}
			>
				<NavigationList $align={ALIGN.left}>
					<NavigationItem>
						<StyledLink
							href="#"
							$style={({ $theme }) => ({
								textDecoration: "none",
								fontSize:
									$theme.typography.HeadingMedium.fontSize,
								fontWeight: "bold",
								color: "#000",
								":visited": {
									color: "none",
								},
								":hover": {
									color: "#000",
								},
							})}
						>
							Joseph Sintum
						</StyledLink>
					</NavigationItem>
				</NavigationList>
				<NavigationList $align={ALIGN.center} />
				<NavigationList $align={ALIGN.right}>
					{[
						{ text: "About", href: "#about" },
						{ text: "Work", href: "#work" },
						{ text: "Experience", href: "#experience" },
						{ text: "Contact", href: "#contact" },
					].map((link) => (
						<NavigationItem key={`${link}`}>
							<a
								className={css({
									textDecoration: "none",
									color: "#757575",
									padding: "0 10px",
									fontSize:
										theme.typography.ParagraphMedium
											.fontSize,
									fontFamily:
										theme.typography.ParagraphMedium
											.fontFamily,
									":hover": {
										color: "#000",
									},
								})}
								href={link.href}
							>
								{link.text}
							</a>
						</NavigationItem>
					))}
					<NavigationItem>
						<Button
							$as="a"
							href="https://docs.google.com/document/d/1TLKoDJgQC2NwV33Dq5M0UynCcnr5GLrJP7ASlLIa5Wg/export?format=pdf"
						>
							Resume
						</Button>
					</NavigationItem>
				</NavigationList>
			</HeaderNavigation>
		</Block>
	)
}
