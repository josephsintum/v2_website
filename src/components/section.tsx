import { styled } from "baseui"
import { Block } from "baseui/block"

export const Section = styled(Block, {
	as: "section",
	display: "flex",
	justifyContent: "center",
	flexDirection: "column",

	margin: "0px auto",
	maxWidth: "1000px",
})
