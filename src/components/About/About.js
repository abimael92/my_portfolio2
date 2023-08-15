import React, { useState, useRef, useEffect } from 'react';

import {
	BulletPoint,
	Row,
	PersonalInfoGrid,
	PersonalInfo,
	InfoItem,
	InfoTitle,
	InfoDetail,
} from './AboutStyles';

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';

const About = () => {
	const birthday = new Date(1992, 9, 7); // October is month 9 (zero-based index)
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear();

	const age21 = age >= 21 ? age - 21 : 0;
	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionDivider />
			<SectionText>
				Hello! I'm a motivated web app developer with a passion for
				coding and problem-solving. I thrive on challenges that
				encourage creative thinking and collaborative teamwork. Eager to
				learn and grow, I'm seeking new opportunities to contribute to
				impactful projects that push boundaries and make a difference.
				Let's create innovative solutions together!
			</SectionText>
			<Row>
				<PersonalInfoGrid>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>Degree: </InfoTitle>
						<InfoDetail>Bachelor's in Computer Science</InfoDetail>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Phone: <InfoDetail> +52 (614) 510 54 02</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Location:
							<InfoDetail>Chihuahua, Chih. Mexico</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Email:
							<InfoDetail>abimael1992g@gmail.com</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Birthday: <InfoDetail>October 7th 1992</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Age: <InfoDetail>{age}</InfoDetail>
						</InfoTitle>
					</InfoItem>
					<InfoItem>
						<BulletPoint />
						<InfoTitle>
							Experience:
							<InfoDetail>{age21}</InfoDetail>
						</InfoTitle>
					</InfoItem>
				</PersonalInfoGrid>
			</Row>
		</Section>
	);
};

export default About;
