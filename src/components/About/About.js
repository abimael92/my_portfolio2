import React, { useState, useRef, useEffect } from 'react';

import {
	BulletPoint,
	Container,
	Row,
	PersonalInfoGrid,
	PersonalInfo,
	Image,
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

const remToPixels = (rem) => rem * 16;

const About = () => {
	const birthday = new Date(1992, 9, 7); // October is month 9 (zero-based index)
	const today = new Date();
	const age = today.getFullYear() - birthday.getFullYear();
	const workExp = today.getFullYear() - 2015;

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionDivider />
			<Container>
				<SectionText>
					Hello! I'm a motivated web app developer with a passion for
					coding and problem-solving. I thrive on challenges that
					encourage creative thinking and collaborative teamwork.
					Eager to learn and grow, I'm seeking new opportunities to
					contribute to impactful projects that push boundaries and
					make a difference. Let's create innovative solutions
					together!
				</SectionText>
				<Image
					src='/images/my_picture.png'
					alt='Abimael'
					width={remToPixels(16)}
					height={remToPixels(16)}
					style={{
						margin: '6px',
					}}
				/>
			</Container>
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
							Phone: <InfoDetail> +52 (614) 132 54 05</InfoDetail>
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
							<InfoDetail>{workExp}</InfoDetail>
						</InfoTitle>
					</InfoItem>
				</PersonalInfoGrid>
			</Row>
		</Section>
	);
};

export default About;
