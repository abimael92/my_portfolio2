import React from 'react';

import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

import { PersonalAchievements } from '../../constants/constants';

const Acomplishments = () => (
	<Section>
		<SectionTitle>Personal Achievements</SectionTitle>
		<Boxes>
			{PersonalAchievements.map((card, index) => (
				<Box key={index}>
					<BoxNum>{`${card.role}`}</BoxNum>
					<BoxText>{card.achievement}</BoxText>
				</Box>
			))}
		</Boxes>
		<SectionDivider />
	</Section>
);

export default Acomplishments;
