import styled from "styled-components"
import css from "@styled-system/css"
import Box, { BoxProps, BoxStyleCompose } from "./box"
import { variant } from "styled-system"
import { Button } from "./button"

interface CardProps extends BoxProps {
	variant?: "vertical" | "horizontal" | "text"
}

export const BasicCard = styled(Box)<CardProps>(BoxStyleCompose)

/** Card  */
export const Card = styled(BasicCard)<CardProps>(
	css({
		boxShadow: "card",
		borderRadius: "default",
		overflow: "hidden",
	}),
	variant({
		variants: {},
	})
)

Card.defaultProps = {
	pt: 4,
}

// Card.defaultProps = {}

export const CardButton = styled(Button)(css({}))

CardButton.defaultProps = {
	p: 2,
	variant: "text",
	mr: 3,
}

export const CardSection = styled(Box)(
	css({
		px: 5,
		mb: 4,
		P: {
			m: 0,
		},
		h1: {
			lineHeight: 2,
			m: 0,
		},
	})
)

export interface CardMediaProps extends BoxProps {
	/** image URL */
	imageUrl: string
}

/** CardMedia takes imageUrl and displays image with height = 56.25% of width */
export const CardMedia = styled(Box)<CardMediaProps>(
	css({
		width: "100%",
		position: "relative",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "50%",
		backgroundSize: "cover",
		boxSizing: "border-box",
		":before": {
			content: "''",
			pt: "56.25%",
			display: "block",
		},
	}),
	props => ({
		backgroundImage: `url(${props.imageUrl})`,
	})
)

// Card.Button = CardButton
