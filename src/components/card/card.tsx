import styled from "styled-components"
import css from "@styled-system/css"
import Box, { BoxProps, BoxStyleCompose } from "../box"
import { variant } from "styled-system"
import { Button } from "../button/button"

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

// Card.defaultProps = {}

export const CardButton = styled(Button)(css({}))

CardButton.defaultProps = {
	p: 2,
    variant: "text",
    mr: 3
}

export const CardSection = styled(Box)(
	css({
		p: 4,
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
	bgImage: string
}

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
		backgroundImage: props.bgImage,
	})
)

// Card.Button = CardButton
