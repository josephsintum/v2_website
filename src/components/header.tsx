import * as React from "react"
import { useStyletron } from "baseui"
import { StyledLink } from "baseui/link"
import { Layer } from "baseui/layer"
import { Unstable_AppNavBar as AppNavBar } from "baseui/app-nav-bar"

function renderItem(item: any) {
	return item.label
}

const MAIN_NAV = [
	{
		item: { label: "About" },
		href: "#about",
		mapItemToNode: renderItem,
		mapItemToString: renderItem,
	},
	{
		item: { label: "Work" },
		mapItemToNode: renderItem,
		mapItemToString: renderItem,
	},
	{
		item: { label: "Experience" },
		mapItemToNode: renderItem,
		mapItemToString: renderItem,
	},
	{
		item: { label: "Contact" },
		mapItemToNode: renderItem,
		mapItemToString: renderItem,
	},
]

function isActive(arr: Array<any>, item: any, activeItem: any): boolean {
	let active = false
	for (let i = 0; i < arr.length; i++) {
		const elm = arr[i]
		if (elm === item) {
			if (item === activeItem) return true
			return isActive((item && item.nav) || [], activeItem, activeItem)
		} else if (elm.nav) {
			active = isActive(elm.nav || [], item, activeItem)
		}
	}
	return active
}

export default () => {
	const [css] = useStyletron()
	const [activeNavItem, setActiveNavItem] = React.useState()
	const containerStyles = css({
		boxSizing: "border-box",
		width: "100vw",
		position: "fixed",
		top: "0",
		left: "0",
	})
	const appDisplayName = (
		<StyledLink
			$style={{
				textDecoration: "none",
				fontWeight: "bold",
				color: "inherit",
				":hover": { color: "inherit" },
				":visited": { color: "inherit" },
			}}
			href={"#"}
		>
			Joseph Sintum
		</StyledLink>
	)
	return (
		<Layer>
			<div className={containerStyles}>
				<AppNavBar
					appDisplayName={appDisplayName}
					mainNav={MAIN_NAV}
					isNavItemActive={({ item }) => {
						return (
							item === activeNavItem ||
							isActive(MAIN_NAV, item, activeNavItem)
						)
					}}
					onNavItemSelect={({ item }) => {
						if (item === activeNavItem) return
						// @ts-ignore
						setActiveNavItem(item)
					}}
				/>
			</div>
		</Layer>
	)
}
