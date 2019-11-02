import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer``

const Copyright = styled.p({
	textAlign: "center",
	fontSize: "0.8rem",
	margin: "2rem 0",
})

const Footer = () => {
	return (
		<FooterContainer>
			<Copyright>
				© {new Date().getFullYear()} — Designed & developed by Joseph
				Sintum
			</Copyright>
		</FooterContainer>
	)
}

export default Footer
