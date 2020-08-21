import * as React from "react"
import { useStyletron } from "baseui"

export const Li: React.FC = ({ children }) => {
	const [css, theme] = useStyletron()

	return (
		<li
			className={css({
				listStylePosition: "outside",
				position: "relative",
				textAlign: "justify",
				paddingLeft: "25px",
				marginBottom: "10px",
				fontFamily: theme.typography.ParagraphMedium.fontFamily,
				"::before": {
					content: '"✱"',
					ariaLabel: "finger pointing right",
					role: "img",
					boxSizing: "border-box",
					color: "#000",
					position: "absolute",
					lineHeight: "18px",
					left: "0px",
				},
			})}
		>
			{children}
		</li>
	)
}
