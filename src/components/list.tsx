import { styled } from "baseui"

export const Li = styled("li", ({ $theme }) => ({
			position: "relative",
			textAlign: "justify",
			paddingLeft: "25px",
			marginBottom: "10px",
			listStyle: "none",
			fontFamily: $theme.typography.LabelSmall.fontFamily,
			"::before": {
				content: '"✱"',
				ariaLabel: "asterisk",
				role: "img",
				boxSizing: "border-box",
				color: "#000",
				position: "absolute",
				lineHeight: "18px",
				left: "0px",
			},
		}))
