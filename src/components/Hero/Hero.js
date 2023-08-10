import React from 'react';

import {
	Section,
	SectionText,
	SectionTitle,
	SectionSubtitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					My Portfolio
					<br />
					Abimael Garcia (Web Developer)
				</SectionTitle>
				<SectionText>
					Experienced Full-stack Developer with over 8 years in web
					app development, specializing in frontend work with React.
					Proven problem solver, adept at collaborating within
					multicultural, multilingual teams. Recognized for
					exceptional communication, collaborative approach, and
					strong track record. Eager to leverage extensive experience
					for impactful contributions in software development.
				</SectionText>
				<Button onClick={props.handleClick}>Learn More</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
