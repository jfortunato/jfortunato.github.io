import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import developer from 'assets/illustrations/developer.svg'
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles'

export const Intro = () => (
	<Wrapper>
		<Header />
		<IntroWrapper as={Container}>
			<Details>
				<h1>Whats Up?</h1>
				<h4>I’m Justin and I’m a Full Stack Web Developer.</h4>
				<Button as={AnchorLink} href="#contact">
					Hire me
				</Button>
			</Details>
			<Thumbnail>
				<img src={developer} alt="I’m Justin and I’m a Full Stack Web Developer!" />
			</Thumbnail>
		</IntroWrapper>
	</Wrapper>
)
